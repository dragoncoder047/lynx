import { env, LNumber, LSymbol, nil, Pair } from "../lipsShim";
import { LINK_COMMAND_NAME, METADATA_NAME_RE } from "./constants";
import { ErrorSeverity, LynxError, LynxMultiError, makePosError } from "./errors";
import { LynxFlow } from "./flow";
import { LynxNode } from "./node";
import { NodeDef, Port } from "./nodeDef";
import { canConnect, Generic, getGroundTypes, TypeMap, typeOf, TypeSpec } from "./types";
import { consToArray, repr } from "./utils.js";


interface ConnectionSpec {
    readonly from: Superposition,
    readonly to: Superposition,
    readonly portNames: [] | [PortRef] | [PortRef, PortRef];
    readonly busIndexes: [] | [PortRef] | [PortRef, PortRef];
}

interface ConcreteNodeDef {
    readonly sym: LSymbol;
    readonly def: NodeDef;
    readonly genericChoices: Map<Generic, TypeSpec>;
}

interface Connection {
    readonly outPort: PortRef;
    readonly inPort: PortRef;
    readonly outBusI: LNumber | undefined;
    readonly inBusI: LNumber | undefined;
    readonly from: ConcreteNodeDef;
    readonly to: ConcreteNodeDef;
}

interface Superposition {
    readonly sym: LSymbol;
    readonly concretes: Set<ConcreteNodeDef>;
    readonly asWritten: NodeAsWritten;
}

class NodeAsWritten {
    readonly name: LSymbol;
    readonly args: any[];
    constructor(name: LSymbol, args: any[]) {
        this.name = name;
        this.args = args;
    }
}

class PortRef {
    readonly sym: LSymbol;
    readonly name: string;
    constructor(sym: LSymbol) {
        this.sym = new LSymbol(sym.valueOf().replace(/^:/, ""));
        this.sym.__line__ = sym.__line__;
        this.sym.__col__ = sym.__col__! + 1;
        this.sym.__offset__ = sym.__offset__! + 1;
        this.name = this.sym.__name__;
    }
}


export function createNodes(app: LynxFlow, forms: Pair[]): LynxNode[] {
    const chains1: Chain[] = [];
    const namedNodes: Record<string, NodeAsWritten> = {};
    const allErrors: LynxError[] = [];
    for (var form of forms) {
        if (!(form instanceof Pair)) {
            allErrors.push(makePosError(`Unknown ${env.get<(x: any) => string>("type")(form)} ${repr(form)} at top level`,
                form, ErrorSeverity.BAD_SYNTAX));
            continue;
        }
        const first: LSymbol = form.car, rest: Pair = form.cdr;
        const name = first.__name__;
        switch (name) {
            case "define":
                if (rest === nil || rest.length() < 2) {
                    allErrors.push(makePosError("Truncated definition", first, ErrorSeverity.BAD_SYNTAX));
                    continue;
                }
                if (rest.car instanceof Pair)
                    makeHON(app, rest);
                else if (!METADATA_NAME_RE.test(rest.car.toString()))
                    namedNodes[rest.car.toString()] = makeNode(rest.cdr.car);
                break;
            case LINK_COMMAND_NAME:
                const { chains, errors } = processSpecialsAndCreation(consToArray(rest))
                chains1.push(...chains);
                allErrors.push(...errors);
                break;
            default:
                allErrors.push(makePosError(`Unknown top-level invocation "${name}"`,
                    first, ErrorSeverity.BAD_SYNTAX));
        }
    }
    for (var i = 0; i < chains1.length; i++) {
        allErrors.push(...processNamed(chains1[i]!, namedNodes));
    }
    const { superpos, connections, errors } = getSuperpositions(chains1, app.nodeDefs);
    const virtual = getParamImplicitNodes(superpos);
    superpos.push(...virtual.nodes);
    connections.push(...virtual.links);
    allErrors.push(...errors, ...virtual.errors);
    console.log("unprocessed superpos", superpos, "conns", connections);
    console.warn(allErrors);
    throw "stop";
    if (allErrors.length > 0) {
        console.warn(allErrors);
        throw new LynxMultiError(allErrors);
    }
}

function makeHON(app: LynxFlow, def: any) {
    console.error(new RangeError("not implemented make HON"));
}

function makeNode(value: Pair): NodeAsWritten {
    return new NodeAsWritten(value.car, consToArray(value.cdr));
}


type Chain = (NodeAsWritten | LNumber | PortRef)[];

const SPECIALS: Map<RegExp, (el: LSymbol, out: Chain[], curZip: Chain, errors: LynxError[]) => void> = new Map([
    // port ref symbol (the general case)
    [/^:/, (el, _out, zip, _errors) => {
        zip.push(new PortRef(el));
    }],
    // stop linking
    [/^~$/, (_el, out, zip, _errors) => {
        out.push(zip.slice());
        zip.length = 0;
    }],
    // backreference
    [/^@/, (el, out, zip, errors) => {
        const reffed = (el as LSymbol).valueOf().slice(1);
        const prevNodes = out
            .flat(1)
            .concat(zip);
        const n = prevNodes
            .findLast(x => x instanceof NodeAsWritten && x.name.valueOf() === reffed);
        if (n === undefined)
            errors.push(makePosError(`Backreference to "${reffed}" node, but there weren't any previous to here`,
                el, ErrorSeverity.UNDEFINED_NAME));
        else zip.push(n);
    }],
]);

function processSpecialsAndCreation(elements: (Pair | LSymbol | LNumber)[]): { chains: Chain[], errors: LynxError[] } {
    const chains: Chain[] = [];
    var curZip: Chain = [];
    const errors: LynxError[] = [];
    outer: for (var el of elements) {
        if (el instanceof Pair) {
            curZip.push(makeNode(el));
            continue;
        }
        if (el instanceof LNumber) {
            curZip.push(el);
            continue;
        }
        if (el instanceof LSymbol) {
            for (var [regex, handler] of SPECIALS) {
                if (regex.test(el.toString())) {
                    handler(el, chains, curZip, errors);
                    continue outer;
                }
            }
        }
        curZip.push(el as any);
    }
    if (curZip.length > 0) {
        chains.push(curZip);
    }
    return { chains, errors };
}

/**
 * mutates the chain to insert the named nodes
 */
function processNamed(chain: Chain, named: Record<string, NodeAsWritten>): LynxError[] {
    const errors: LynxError[] = [];
    for (var i = 0; i < chain.length; i++) {
        const val = chain[i];
        if (val instanceof LSymbol) {
            const reffed = named[val.valueOf()];
            if (reffed === undefined) {
                errors.push(makePosError(`Named node ${val} not defined, ignoring this.`,
                    val, ErrorSeverity.UNDEFINED_NAME));
                chain.splice(i, 1);
                i--;
            }
            else chain[i] = reffed;
        }
    }
    return errors;
}

function getParamImplicitNodes(writtenNodes: Superposition[]): { nodes: Superposition[], links: ConnectionSpec[], errors: LynxError[] } {
    const errors: LynxError[] = [];
    const nodes: Superposition[] = [];
    const links: ConnectionSpec[] = [];
    for (var s of writtenNodes) {
        const res = implicit1(s);
        errors.push(...res.errors);
        nodes.push(...res.nodes);
        links.push(...res.links);
    }
    return { nodes, links, errors };
}

function implicit1(s: Superposition): { nodes: Superposition[], links: ConnectionSpec[], errors: LynxError[] } {
    const errors: LynxError[] = [];
    const nodes: Superposition[] = [];
    const links: ConnectionSpec[] = [];
    for (var i = 0; i < s.asWritten.args.length; i += 2) {
        const keyName = s.asWritten.args[i];
        const keyVal = s.asWritten.args[i + 1];
        if (!(keyName instanceof LSymbol)) {
            errors.push(makePosError(`Invalid init port name ${keyName} (expected a symbol)`,
                keyName, ErrorSeverity.BAD_SYNTAX));
            continue;
        }
        if (keyVal === undefined) {
            errors.push(makePosError(`Missing init value for ${keyName}`,
                keyName, ErrorSeverity.BAD_SYNTAX));
            // will only occur at the end
            break;
        }
        const implicitNode = createImplicitSuperposition(s.asWritten, keyName, keyVal, typeOf(keyVal));
        nodes.push(implicitNode);
        links.push({
            from: implicitNode,
            to: s,
            portNames: [new PortRef(new LSymbol("value")), new PortRef(keyName)],
            busIndexes: [],
        });
    }
    return { nodes, links, errors };
}

function createImplicitSuperposition(a: NodeAsWritten, sym: LSymbol, value: any, type: keyof TypeMap): Superposition {
    const name = new PortRef(sym).name;
    return {
        sym,
        asWritten: new NodeAsWritten(a.name, []),
        concretes: new Set([{
            sym,
            genericChoices: new Map,
            def: {
                id: `__implicit_arg_${name}__`,
                inputs: {},
                outputs: {
                    value: new Port(type, value)
                },
                doc: `Implicit node created by init arg :${name}`,
                setup({ node }) {
                    node.output("value", value);
                }
            }
        }])
    }
}

function getSuperpositions(chains: Chain[], allNDs: NodeDef[]): { superpos: Superposition[], connections: ConnectionSpec[], errors: LynxError[] } {
    const connections: ConnectionSpec[] = [];
    const errors: LynxError[] = [];
    const seen: Map<NodeAsWritten, Superposition> = new Map;
    outer: for (var chain of chains) {
        var i = 0, j = 0;
        while (!(chain[i] instanceof NodeAsWritten)) {
            errors.push(notValidHere(chain[i] as any));
            i++;
        }
        const res = createInitialSuperpos(chain[i] as any, allNDs);
        var prev = res.super;
        errors.push(...res.errors);
        seen.set(chain[i] as any, prev);
        while (i < chain.length) {
            j = chain.findIndex((v, j) => j > i && v instanceof NodeAsWritten);
            if (j === -1) {
                for (var k = i + 1; k < chain.length; k++) {
                    errors.push(notValidHere(chain[k]! as any));
                }
                continue outer;
            }
            const curNAW = chain[j] as NodeAsWritten;
            const slice = chain.slice(i + 1, j);
            var cur: Superposition;
            // use cached version for this multiple-referenced node if it exists
            if (seen.has(curNAW)) cur = seen.get(curNAW)!;
            else {
                const res = createInitialSuperpos(curNAW, allNDs);
                cur = res.super;
                errors.push(...res.errors);
            }
            seen.set(curNAW, cur);
            connections.push({
                from: prev,
                to: cur,
                portNames: slice.filter(x => x instanceof PortRef) as any,
                busIndexes: slice.filter(x => x instanceof LNumber) as any,
            });
            prev = cur;
            i = j;
        }
    }
    return { superpos: [...seen.values()], connections, errors };
}

function notValidHere(what: PortRef | LNumber): LynxError {
    const astNode = what instanceof PortRef ? what.sym : what;
    return makePosError(`${astNode} not valid here`,
        astNode, ErrorSeverity.BAD_SYNTAX);
}

function createInitialSuperpos(naw: NodeAsWritten, allNDs: NodeDef[]): { super: Superposition, errors: LynxError[] } {
    const matchingDefs = allNDs.filter(nd => nd.id === naw.name.valueOf());
    const errors: LynxError[] = [];
    if (matchingDefs.length === 0) {
        errors.push(makePosError(`Node type "${naw.name}" doesn't exist`,
            naw.name, ErrorSeverity.UNDEFINED_NAME));
    }
    return {
        super: {
            sym: naw.name,
            asWritten: naw,
            concretes: new Set(getConcretes(matchingDefs, naw.name))
        },
        errors
    }
}

function* getConcretes(defs: NodeDef[], sym: LSymbol): Generator<ConcreteNodeDef, void, undefined> {
    for (var def of defs) {
        for (var cMap of choicesMap(Object.entries(def.template || {}) as any)) {
            yield { def, genericChoices: new Map(cMap), sym };
        }
    }
}

// this one is recursive
function* choicesMap(choices: [Generic, TypeSpec[]][]): Generator<[Generic, TypeSpec][], void, undefined> {
    if (choices.length === 0) {
        yield [];
        return;
    }
    const [choice1, ...otherChoices] = choices;
    const [choice1Name, choice1Values] = choice1!;
    for (var submap of choicesMap(otherChoices)) {
        for (var choice1Value of choice1Values.flatMap(getGroundTypes)) {
            yield [[choice1Name, choice1Value], ...submap];
        }
    }
}

/*
each superposition is a list of possible defs and template types for each node

the connection specs reference the superpositions.

For each superposition:
1. get all of the connection specs referencing it
2. try to resolve each into a connection
TODO: finish writing this

*/
function* allPossibleConnections(spec: ConnectionSpec): Generator<Connection | LynxError, void, undefined> {
}

/*
meaning of connection spec:
1. symbols and port types must define which ports to connect
    a. no symbols means that only one matching pair has the same type
    b. one symbol means that it specifies one side, and the other side
       must be uniquely inferrable based on type
    c. two symbols just get their named ports, provided the types match
2. numbers specify the bus indexes
    a. once the port names are resolved by (1), the types of the ports are checked
    b. if neither port is a bus, there must be no numbers. period.
    c. if only one of them is a bus, there must be only one number,
       which is the index to connect to
    d. if both are a bus, there must be two numbers or none. If two, only one line
       of the bus is connected, if none the whole bus is connected.

guessNames() only does part 1.
*/
function guessNames(from: ConcreteNodeDef, to: ConcreteNodeDef, symbols: PortRef[]): [string, string] | LynxError {
    const typeChoices: [string, string][] = [];
    const ports1 = resolvePortTypes(from.def.outputs, from.genericChoices);
    const ports2 = resolvePortTypes(to.def.inputs, to.genericChoices);
    const ports1Obj = Object.fromEntries(ports1);
    const ports2Obj = Object.fromEntries(ports2);
    for (var [n1, t1] of ports1) {
        for (var [n2, t2] of ports2) {
            if (to.def.inputs[n2]!.paramOnly) continue;
            if (canConnect(t1, t2)) {
                typeChoices.push([n1, n2]);
            }
        }
    }
    if (typeChoices.length === 0) {
        return makePosError(
            `No outputs of "${from.def.id}" match the type of any input of "${to.def.id}". Try inserting a converter node in between.`,
            symbols[0]?.sym ?? from.sym, ErrorSeverity.TYPE_MISMATCH);
    }
    switch (symbols.length) {
        case 0: {
            // No ports specified, so there must be only one with the right type to connect
            if (typeChoices.length > 1) {
                return makePosError(
                    `Multiple ways to connect "${from.def.id}" to "${to.def.id}" and none was specified`,
                    from.sym, ErrorSeverity.BAD_CONN_SPEC);
            }
            return typeChoices[0]!;
        }
        case 1: {
            // one side must be specified by the name; the other must be inferrable by the type
            const sPort = symbols[0]!;
            const tPortLeft = ports1Obj[sPort.name];
            const tPortRight = ports2Obj[sPort.name];
            const connWithNameOnLeft = typeChoices.filter(([i, _]) => i === sPort.name);
            const connWithNameOnRight = typeChoices.filter(([_, i]) => i === sPort.name);
            if (tPortLeft === undefined && tPortRight === undefined) {
                return makePosError(
                    `No port :${sPort.name} exists on outputs of "${from.def.id}" or inputs of "${to.def.id}"`,
                    sPort.sym, ErrorSeverity.UNDEFINED_NAME);
            }
            if (tPortLeft !== undefined && tPortRight !== undefined) {
                // name could refer to one or the other. find the one that makes the most sense -
                // the possible connections with the name placed on one side, one of them must have only one choice.
                // if both ways have only one choice it is easy.
                if (connWithNameOnLeft.length === 1) return connWithNameOnLeft[0]!;
                if (connWithNameOnRight.length === 1) return connWithNameOnRight[0]!;
                return makePosError(`Write ':${sPort.name} :${sPort.name}' if you intend to connect :${sPort.name} of "${from.def.id}" to :${sPort.name} of "${to.def.id}". There are multiple other ports that these could be connected to.`,
                    sPort.sym, ErrorSeverity.BAD_CONN_SPEC);
            }
            if (tPortLeft !== undefined) {
                // name was referring to name on left; get the ones on right it can connect to
                if (connWithNameOnLeft.length === 1) {
                    const conn = connWithNameOnLeft[0]!;
                    if (to.def.inputs[conn[1]]!.paramOnly) {
                        return makePosError(`Output :${sPort.name} (${tPortLeft}) of "${from.def.id}" can only connect to :${conn[1]} of "${to.def.id}", but it is initialize-only`,
                            sPort.sym, ErrorSeverity.INPUT_CONFLICT)
                    }
                    return conn;
                }
                else if (connWithNameOnLeft.length === 0)
                    return makePosError(`No inputs to "${to.def.id}" can be connected to output :${sPort.name} (${tPortLeft}) of "${from.def.id}"`,
                        sPort.sym, ErrorSeverity.TYPE_MISMATCH);
                else return makePosError(`Multiple inputs to "${to.def.id}" (${connWithNameOnLeft.map(([_, i]) => i)}) can be connected to output :${sPort.name} (${tPortLeft}) of "${from.def.id}" - use two symbols to specify.`,
                    sPort.sym, ErrorSeverity.BAD_CONN_SPEC);
            }
            if (tPortRight !== undefined) {
                // name was referring to name on right; get the ones on left it can be connected to
                if (to.def.inputs[sPort.name]!.paramOnly) {
                    return makePosError(`Input :${sPort.name} (${tPortLeft}) of "${to.def.id}" is initialize-only`,
                        sPort.sym, ErrorSeverity.INPUT_CONFLICT)
                }
                if (connWithNameOnRight.length === 1)
                    return connWithNameOnRight[0]!;
                else if (connWithNameOnRight.length === 0)
                    return makePosError(`No outputs of "${from.def.id}" can be connected to input :${sPort.name} (${tPortRight}) of "${to.def.id}"`,
                        sPort.sym, ErrorSeverity.TYPE_MISMATCH);
                else return makePosError(`Multiple outputs of "${from.def.id}" (${connWithNameOnRight.map(([i, _]) => i)}) can be connected to input :${sPort.name} (${tPortRight}) of "${to.def.id}" - use two symbols to specify.`,
                    sPort.sym, ErrorSeverity.BAD_CONN_SPEC);
            }
            throw "unreachable";
        }
        case 2: {
            // both are specified: they must both exist and have the right type
            const p1 = symbols[0]!;
            const p2 = symbols[0]!;
            const tPortLeft = ports1Obj[p1.name];
            const tPortRight = ports2Obj[p2.name];
            const errors: LynxError[] = [];
            if (tPortLeft === undefined) {
                errors.push(makePosError(`Node "${from.def.id}" has no output port :${p1.name}`,
                    p1.sym, ErrorSeverity.UNDEFINED_NAME));
            }
            if (tPortRight === undefined) {
                errors.push(makePosError(`Node "${to.def.id}" has no input port :${p2.name}`,
                    p2.sym, ErrorSeverity.UNDEFINED_NAME));
            }
            if (errors.length === 0 && !canConnect(tPortLeft!, tPortRight!)) {
                return makePosError(`Cannot connect output :${p1.name} (${tPortLeft}) of "${from.def.id}" node to :${p2.name} (${tPortRight}) of "${to.def.id}"`,
                    p2.sym, ErrorSeverity.TYPE_MISMATCH)
            }
            if (errors.length === 2) return new LynxMultiError(errors);
            else if (errors.length === 1) return errors[0]!;
            return [p1.name, p2.name];
        }
        default:
            return makePosError("Too many symbols", symbols[2]!.sym, ErrorSeverity.BAD_CONN_SPEC);
    }
}

function resolvePortTypes(portSide: Record<string, Port>, concrete: Map<string, TypeSpec>): Map<string, TypeSpec> {
    const out = new Map<string, TypeSpec>();
    for (var name of Object.keys(portSide)) {
        out.set(name, concrete.get(portSide[name]!.type as string) ?? portSide[name]!.type);
    }
    return out;
}
