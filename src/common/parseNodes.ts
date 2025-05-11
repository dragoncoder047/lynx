import { env, LNumber, LSymbol, Pair, WithMetadata } from "../lipsShim";
import { LINK_COMMAND_NAME, METADATA_NAME_RE } from "./constants";
import { LynxFlow } from "./flow";
import { LynxNode, makeNodeComplain, nodeComplain } from "./node";
import { NodeDef } from "./nodeDef";
import { Bus } from "./port.js";
import { canConnect, consToArray, LynxError, LynxMultiError, makePosError, throwPosError, typeMatches, TypeSpec } from "./utils.js";

export function createNodes(app: LynxFlow, forms: Pair[]): LynxNode[] {
    const chains: (LSymbol | LNumber | LynxNode)[][] = [];
    const toArray = env.get("list->array") as (a: Pair) => any[];
    const namedNodes = {};
    const errors: any[] = [];
    for (var form of forms) {
        if (!(form instanceof Pair)) {
            errors.push(makePosError(`Unknown ${env.get<(x: any) => string>("type")(form)} ${env.get<(x: any) => string>("repr")(form)} at top level`, form));
            continue;
        }
        const first = form.car, rest = form.cdr;
        switch (first.__name__) {
            case "define":
                const definition = toArray(rest);
                if (definition.length < 2) {
                    errors.push(makePosError("Truncated definition", first));
                    continue;
                }
                if (definition[0] instanceof Pair)
                    makeHON(app, definition);
                else
                    nameNode(definition as [LSymbol, Pair], namedNodes);
                break;
            case LINK_COMMAND_NAME:
                chains.push(...stage1(toArray(rest)));
                break;
            default:
                errors.push(makePosError(`Unknown top-level data type "${first.__name__}"`, first));
        }
    }
    console.log("unprocessed chains", chains);
    var val;
    try {
        val = stage2(app, chains, namedNodes);
    } catch (e) {
        if (e instanceof LynxMultiError) errors.push(...e.subErrors);
        else errors.push(e);
    }
    if (errors.length > 0) {
        console.warn(errors);
        throw new LynxMultiError(errors);
    }
    return val!;
}

function nameNode([name, value]: [LSymbol, Pair], store: Record<string, LynxNode>) {
    if (METADATA_NAME_RE.test(name.valueOf())) return;
    store[name.valueOf()] = makeNode(value);
}

function makeHON(app: LynxFlow, def: any) {
    const [name, ...params] = consToArray(def[0]).map(s => s.valueOf());
    console.log(name, params);
    throw new RangeError("makeHON: not implemented");
    app.defineNode({
        id: name,

    });
}

function makeNode(value: Pair): LynxNode {
    console.log("CREATING NODE", value);
    return new LynxNode(
        value.car.valueOf(),
        consToArray(value.cdr),
        {
            line: (value.car.__line__ !== undefined ? value.car.__line__ + 1 : undefined),
            col: value.car.__col__
        });
}

function stage1(elements: (Pair | LSymbol | LNumber)[]): (LynxNode | LNumber | LSymbol)[][] {
    const out = [];
    var aa: (LynxNode | LSymbol | LNumber)[] = [];
    const errors = [];
    for (var el of elements) {
        if (el instanceof Pair) {
            aa.push(makeNode(el));
        }
        else if (el instanceof LSymbol && el.valueOf() === "~") {
            out.push(aa);
            aa = [];
        }
        else if (el instanceof LSymbol && el.valueOf().startsWith("@")) {
            const n = out
                .flat(1)
                .concat(aa)
                .findLast(x => x instanceof LynxNode
                    && x.name === (el as LSymbol).valueOf().slice(1));
            if (n === undefined)
                errors.push(makePosError(`Backreference to "${el.valueOf().slice(1)}" node, but there weren't any previous to here`, el, 3));
            else aa.push(n);
        }
        else aa.push(el);
    }
    if (errors.length > 0) {
        throw new LynxMultiError(errors);
    }
    if (aa.length > 0) {
        out.push(aa);
    }
    return out;
}

/**
 * @param {LynxFlow} app
 * @param {(LynxNode | number | string)[][]} chains
 * @param {Record<string, LynxNode>} namedNodes
 * @returns {LynxNode[]}
 */
function stage2(app: LynxFlow, chains: (LynxNode | LNumber | LSymbol)[][], namedNodes: Record<string, LynxNode>): LynxNode[] {
    // insert named nodes into chains
    const errors = [];
    for (var chain of chains) {
        for (var i = 0; i < chain.length; i++) {
            if (chain[i] instanceof LSymbol) {
                if (!/^:/.test(chain[i]!.toString())) {
                    if (!(chain[i]!.toString() in namedNodes)) {
                        errors.push(makePosError(`Node named "${chain[i]}" wasn't defined`, chain[i] as WithMetadata, 4));
                        continue;
                    }
                    chain[i] = namedNodes[chain[i]!.toString()]!;
                }
            }
        }
    }
    const node2PossibleVariants = new Map;
    for (var chain of chains) {
        for (var i = 0; i < chain.length; i++) {
            const item = chain[i];
            if (item instanceof LynxNode && !node2PossibleVariants.has(item)) {
                var variants = app.nodeDefs.filter(v => {
                    if (v.id !== item.name) return false;
                    if (v.argTypes === undefined) return true;
                    if (v.argTypes.length !== item.args.length) return false;
                    return v.argTypes.every((t: TypeSpec, i: number) => typeMatches(item.args[i], t));
                });
                if (variants.length === 0) {
                    console.log("got undefined node");
                    errors.push(makeNodeComplain(item,
                        app.nodeDefs.some(x => x.id === item.name)
                            ? `Bad parameters to "${item.name}"`
                            : `Undefined node type "${item.name}"`, 4))
                }
                // check if start
                if (i === 0) {
                    // TODO: what if the node is backreferenced later
                    variants = variants.filter(v => v.inputs.length === 0);
                    if (variants.length === 0)
                        errors.push(makeNodeComplain(item,
                            `"${item.name}" can't be used at the start of a chain as it requires input`));
                }
                node2PossibleVariants.set(item, variants);
            }
        }
    }
    console.log("variants", node2PossibleVariants);
    const node2VariantsCopy = new Map(node2PossibleVariants.entries());
    const allNodes: LynxNode[] = [];
    for (var chain of chains) {
        console.log("proc chain", chain);
        if (!(chain[0] instanceof LynxNode)) {
            errors.push(makePosError(`${env.get<(x: any) => string>("type")(chain[0])} not allowed here`, chain[0] as WithMetadata));
            continue;
        }
        var i = 0;
        while (i < chain.length) {
            if ((i + 1) === chain.length) {
                if (!allNodes.includes(chain[i] as LynxNode)) allNodes.push(chain[i] as LynxNode);
                break;
            }
            const nextI = chain.findIndex((n, ii) => ii > i && n instanceof LynxNode);
            if (nextI === -1) {
                errors.push(makePosError(`${env.get<(x: any) => string>("type")(chain[i + 1])} not allowed here`, chain[i + 1] as WithMetadata));
                break;
            }
            try {
                console.log("aac", chain[i], chain[nextI], chain.slice(i + 1, nextI));
                assignAndConnect(chain[i] as LynxNode, chain[nextI] as LynxNode,
                    node2PossibleVariants, chain.slice(i + 1, nextI) as LSymbol[],
                    node2VariantsCopy);
            } catch (e) {
                if (e instanceof LynxMultiError)
                    errors.push(...e.subErrors);
                else if (e instanceof LynxError)
                    errors.push(e);
                else throw e;
            }
            if (!allNodes.includes(chain[i] as LynxNode)) allNodes.push(chain[i] as LynxNode);
            i = nextI;
        }
    }
    console.log("all nodes", allNodes);
    if (errors.length > 0) {
        throw new LynxMultiError(errors);
    }
    return allNodes;
}

function assignAndConnect(node1: LynxNode, node2: LynxNode, vMap: Map<LynxNode, NodeDef[]>, symbols: (LNumber | LSymbol)[], vMapCopy: Map<LynxNode, NodeDef[]>) {
    const v1s = vMap.get(node1)!;
    const v2s = vMap.get(node2)!;
    const candidates: [NodeDef, NodeDef, ReturnType<typeof guessConnect>][] = [];
    const errors: LynxError[] = [];
    const cErrors: LynxError[] = [];
    for (var v1 of v1s) {
        for (var v2 of v2s) {
            try {
                console.group("guessConnect", v1, v2);
                candidates.push([v1, v2, guessConnect(v1, v2, symbols, node1, node2)]);
            } catch (e: any) {
                cErrors.push(e);
            } finally {
                console.groupEnd();
            }
        }
    }
    console.log("candidate connections", candidates);
    if (candidates.length === 0) {
        // check to see if ruled-out excluded stuff
        const v1ss = vMapCopy.get(node1)!;
        const v2ss = vMapCopy.get(node2)!;
        if (v1ss.length !== v1s.length)
            errors.push(makeNodeComplain(node1, `No variant of "${node1.name}" works here`));
        else if (v2ss.length !== v2s.length)
            errors.push(makeNodeComplain(node2, `No variant of "${node2.name}" works here`));
        else if (errors.length === 0)
            errors.push(makeNodeComplain(node1,
                `No outputs of "${node1.name}" match the type of any input of "${node2.name}"`));
    }
    if (candidates.length > 1) {
        errors.push(makeNodeComplain(node1,
            `Multiple ways to connect "${node1.name}" to "${node2.name}" and no one in particular was specified`));
    }
    var wv1: NodeDef, wv2: NodeDef, winner: ReturnType<typeof guessConnect>;
    if (candidates.length > 0) {
        [wv1, wv2, winner] = candidates[0]!;

        // instantiate template types
        const oo1 = wv1.outputs.find(p => p.name === winner[0])!;
        const oo2 = wv2.inputs.find(p => p.name === winner[1])!;
        const o1it = wv1.template?.[oo1.type as string] !== undefined;
        const o2it = wv2.template?.[oo2.type as string] !== undefined;
        if (o1it && o2it)
            errors.push(makeNodeComplain(node1, `Failed to resolve template types between ${node1.name}:${winner[0]} and ${node2.name}:${winner[1]}. Try using a converter node that expects a type.`));
        else if (o1it)
            node1.templateInstantiation[oo1.type as string] = oo2.type;
        else if (o2it)
            node2.templateInstantiation[oo2.type as string] = oo1.type;
    }
    if (errors.length > 0)
        throw new LynxMultiError(errors.concat(cErrors));

    // assign definitions
    console.log("Assigned definitions", node1, wv1!, node2, wv2!);
    node1.def = wv1!;
    node2.def = wv2!;
    node1.connect(winner![0], node2, winner![1], winner![2], winner![3]);
    // do ruling-out
    vMap.set(node1, [node1.def]);
    vMap.set(node2, [node2.def]);
}

function allPossibleConnections(node1: LynxNode, node2: LynxNode, var1: NodeDef, var2: NodeDef): [string, string][] {
    const io1 = node1.insertParameterizedTypes(var1);
    const io2 = node2.insertParameterizedTypes(var2);
    const out: [string, string][] = [];
    for (var input of io2.inputs) {
        for (var output of io1.outputs) {
            if (canConnect(output, input) !== "no")
                out.push([output.name, input.name]);
        }
    }
    console.log("possibilities for connections", out);
    return out;
}

function guessConnect(v1: NodeDef, v2: NodeDef, connSpec: (LSymbol | LNumber)[], node1: LynxNode, node2: LynxNode): [string, string, number | undefined, number | undefined] {
    // there is a HECK of a lot of error checking in here
    /*
    meaning of symbols:
    1. (x) (y) -> both must have only one input and output, must both be bus or neither
    2. (x) :foo (y) -> x has :foo output, y has only one input; or x has only one output, y has :foo input
    3. (x) :foo :bar (y) -> x has :foo output, y has :bar input
    4. (x) 1 (y) -> x and y have only one output/input and only one of them is a bus
    5. (x) 1 1 (y) -> x and y have only one output/input and both are a bus
    6. (x) 1 :foo (y) -> x has only one output and it is a bus, y has :foo input
    7. (x) :foo 1 (y) -> x has a :foo output, y has only one input and it is a bus
    8. (x) 1 :foo 1 (y) -> either x has a :foo output, y has only one input; or y has only one input and x has a :foo output; both are a bus
    9. (x) :foo 1 1 (y) -> same as 7
    10. (x) 1 1 :foo (y) -> same as 7
    11. (x) :foo 1 1 :bar (y) -> x has :foo output, y has :bar input, both are buses
    12. (x) 1 :foo :bar 1 (y) -> same as 10
    13. (x) 1 :foo 1 :bar (y) -> same as 10
    14. (x) :foo 1 :bar 1 (y) -> same as 10
    15. give up
    */
    // first: check to see if any connection can be made at all
    if (v1.outputs.length === 0)
        nodeComplain(node2, `Can't connect here, "${v1.id}" has no outputs`);
    if (v2.inputs.length === 0)
        nodeComplain(node1, `Can't connect here, "${v2.id}" has no inputs`);
    var sn: string;
    const symbols: LSymbol[] = connSpec.filter(x => typeof x.valueOf() === "string") as any;
    const numbers: LNumber[] = connSpec.filter(x => typeof x.valueOf() === "number") as any;
    console.log("guessConnect", node1, v1, symbols, numbers, node2, v2);
    const pConns = allPossibleConnections(node1, node2, v1, v2);
    var inn: string, oun: string;
    var ini: number, oui: number;
    var obi: number | undefined, ibi: number | undefined;
    var fb1: [string, string][] | undefined, fb2: [string, string][] | undefined;
    var is: LSymbol | LNumber | undefined, os: LSymbol | LNumber | undefined;
    switch (symbols.length) {
        case 0:
            if (pConns.length > 1) {
                if (v1.outputs.length > 1)
                    nodeComplain(node1, `"${v1.id}" node has multiple outputs and none was specified`);
                if (v2.inputs.length > 1)
                    nodeComplain(node2, `"${v2.id}" node has multiple inputs and none was specified`);
            }
            inn = pConns[0]![1];
            oun = pConns[0]![0];
            is = os = undefined;
            break;
        case 1:
            sn = symbols[0]!.toString().replace(/^:/, "");
            fb1 = pConns.filter(([a, _]) => a === sn);
            fb2 = pConns.filter(([_, a]) => a === sn);
            console.log(fb1, fb2);
            // check to see which one it applies to
            if (fb1.length > 0 && fb2.length > 0)
                throwPosError(`Write ":${sn}" twice if you intend to connect :${sn} to :${sn}`, symbols[0]!);
            if (fb2.length === 1) {
                oun = fb2[0]![0];
                inn = sn;
                is = symbols[0];
                os = undefined;
            }
            else if (fb1.length === 1) {
                inn = fb1[0]![1];
                oun = sn;
                os = symbols[0];
                is = undefined;
            }
            else {
                inn = oun = sn;
                os = is = symbols[0];
            }
            break;
        case 2:
            os = symbols[0]!;
            is = symbols[1]!;
            oun = os.toString().replace(/^:/, "");
            inn = is.toString().replace(/^:/, "");
            break;
        default:
            throwPosError("too many symbols", symbols[2] as any);
    }
    ini = v2.inputs.findIndex(p => p.name === inn);
    oui = v1.outputs.findIndex(p => p.name === oun);
    if (oui === -1)
        throwPosError(`"${v1.id}" node has no output :${oun}`, os!, 2);
    if (ini === -1)
        throwPosError(`"${v2.id}" node has no input :${inn}`, is!, 2);
    switch (numbers.length) {
        case 0:
            break;
        case 1:
            if (v1.outputs[oui] instanceof Bus) obi = numbers[0]!.valueOf() as number;
            else if (v2.inputs[ini] instanceof Bus) ibi = numbers[0]!.valueOf() as number;
            else throwPosError(`Neither input "${inn}" nor output "${oun}" are busses`, numbers[0]!, 3);
            break;
        case 2:
            if (!(v2.inputs[ini] instanceof Bus))
                throwPosError(`Invalid number, input :${inn} is not a bus`, numbers[1]!);
            if (!(v1.outputs[oui] instanceof Bus))
                throwPosError(`Invalid number, output :${oun} is not a bus`, numbers[0]!);
            obi = numbers[0]!.valueOf();
            ibi = numbers[1]!.valueOf();
            break;
        default:
            throwPosError("too many numbers", numbers[2]!);
    }
    const cc = canConnect(v1.outputs[oui]!, v2.inputs[ini]!);
    if (cc === "no")
        nodeComplain(node1, `Type mismatch: can't connect output "${oun}" (${v1.outputs[oui]!.type}) `
            + `to input "${inn}" (${v2.inputs[ini]!.type})`, 2);
    if (cc === "selectIn" && obi === undefined)
        nodeComplain(node2, `Output of "${v1.id}" is a bus, but no index was specified`, 3);
    if (cc === "selectOut" && ibi === undefined)
        nodeComplain(node1, `Input of "${v2.id}" is a bus, but no index was specified`, 3);
    if (((obi !== undefined) === (ibi === undefined)) && v1.outputs[oui] instanceof Bus && v2.inputs[ini] instanceof Bus)
        nodeComplain(node2, `Must specify two numbers or none, both input "${inn}" and output "${oun}" are busses`, 2);
    // commit to the connection
    return [oun, inn, obi, ibi];
}
