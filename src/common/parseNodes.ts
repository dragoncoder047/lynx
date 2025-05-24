import { env, LNumber, LSymbol, nil, Pair, WithMetadata } from "../lipsShim";
import { LINK_COMMAND_NAME, METADATA_NAME_RE } from "./constants";
import { LynxError, LynxMultiError, makePosError } from "./errors";
import { LynxFlow } from "./flow";
import { LynxNode } from "./node";
import { NodeDef, Port } from "./nodeDef";
import { canConnect, fixTypeOf, Generic, getGroundTypes, TypeMap, TypeSpec } from "./types";
import { consToArray, repr } from "./utils.js";


interface ConnectionSpec {
    readonly from: Superposition,
    readonly to: Superposition,
    readonly portRefs: [] | [PortRef] | [PortRef, PortRef];
    readonly isImplicitConnection: boolean;
}

interface ConcreteNodeDef {
    readonly sym: LSymbol;
    readonly def: NodeDef;
    readonly genericChoices: Map<Generic, TypeSpec>;
}

interface Connection {
    readonly outPort: PortRef;
    readonly inPort: PortRef;
    readonly from: Superposition;
    readonly to: Superposition;
}

interface Superposition {
    readonly sym: LSymbol;
    readonly concretes: Set<ConcreteNodeDef>;
    readonly asWritten: NodeAsWritten;
    readonly args: any[],
}

class NodeAsWritten {
    readonly name: LSymbol;
    readonly args: any[];
    readonly isInvalidPlaceholder: boolean;
    constructor(name: LSymbol, args: any[], invalid = false) {
        this.name = name;
        this.args = args;
        this.isInvalidPlaceholder = invalid;
    }
}

class PortRef {
    readonly sym: LSymbol;
    readonly name: string;
    busNum: LNumber | undefined;
    constructor(sym: LSymbol | string, metasym?: WithMetadata) {
        var name: string, busNum: string | undefined;
        if (sym instanceof LSymbol) {
            const res = /^:(?<name>.*?)(:(?<busNum>\d+))?$/.exec(sym.valueOf());
            name = res!.groups!.name as string;
            busNum = res!.groups!.busNum;
        } else {
            name = sym;
            busNum = undefined;
        }
        this.sym = new LSymbol(name);
        this.sym.__line__ = (metasym ?? sym as any).__line__;
        this.sym.__col__ = metasym?.__line__ ? metasym.__line__ : (sym as any).__col__! + 1;
        this.sym.__offset__ = metasym?.__offset__ ? metasym.__offset__ : (sym as any).__offset__! + 1;
        this.name = name;
        if (busNum !== undefined) {
            this.busNum = new LNumber(BigInt(busNum));
            this.busNum.__line__ = (metasym ?? sym as any).__line__;
            this.busNum.__col__ = metasym?.__line__ ? metasym.__line__ : (sym as any).__col__! + (sym as any).__name__.length + 2;
            this.busNum.__offset__ = metasym?.__offset__ ? metasym.__offset__ : (sym as any).__offset__! + (sym as any).__name__.length + 2;
        }
    }
}


export function createNodes(app: LynxFlow, forms: Pair[]): LynxNode[] {
    const chains: Chain[] = [];
    const namedNodes: Record<string, NodeAsWritten> = {};
    const errors: LynxError[] = [];
    for (var form of forms) {
        if (!(form instanceof Pair)) {
            errors.push(makePosError(`Unknown ${env.get<(x: any) => string>("type")(form)} ${repr(form)} at top level`,
                form, LynxError.BAD_SYNTAX));
            continue;
        }
        const first: LSymbol = form.car, rest: Pair = form.cdr;
        const name = first.__name__;
        switch (name) {
            case "define":
                if (rest === nil || rest.length() < 2) {
                    errors.push(makePosError("Truncated definition", first, LynxError.BAD_SYNTAX));
                    continue;
                }
                if (rest.car instanceof Pair)
                    makeHON(app, rest);
                else if (!METADATA_NAME_RE.test(rest.car.toString())) {
                    if (rest.cdr.car instanceof Pair)
                        namedNodes[rest.car.toString()] = makeNode(rest.cdr.car);
                    else errors.push(notValidHere(rest.cdr.car));
                }
                break;
            case LINK_COMMAND_NAME:
                const specialRes = processSpecialsAndPortrefs(consToArray(rest));
                chains.push(...specialRes.chains);
                errors.push(...specialRes.errors);
                break;
            default:
                errors.push(makePosError(`Unknown top-level invocation "${name}"`,
                    first, LynxError.BAD_SYNTAX));
        }
    }
    for (var i = 0; i < chains.length; i++) {
        errors.push(...processNamed(chains[i]!, namedNodes));
    }
    const superRes = getSuperpositions(chains, app.nodeDefs);
    const virtual = getParamImplicitNodes(superRes.superpos);
    superRes.superpos.push(...virtual.nodes);
    superRes.connections.push(...virtual.links);
    errors.push(...superRes.errors);
    errors.push(...virtual.errors);
    const sSet = new Set(superRes.superpos);
    const cSet = new Set(superRes.connections);
    const final = wfc(sSet, cSet);
    errors.push(...final.errors);
    errors.push(...validateConnections(final.realNodes, [...final.connections]));
    if (errors.length > 0) {
        throw new LynxMultiError(errors);
    }
    console.info(final);
    return createAndConnectNodes(final.realNodes, final.connections);
}

function makeHON(app: LynxFlow, def: any) {
    console.error(new RangeError("not implemented make HON"));
}

function makeNode(value: Pair): NodeAsWritten {
    return new NodeAsWritten(value.car, consToArray(value.cdr));
}


type Chain = (NodeAsWritten | PortRef)[];

const SPECIALS: Map<RegExp, (m: RegExpExecArray, el: LSymbol, out: Chain[], curZip: Chain, errors: LynxError[]) => void> = new Map([
    // port ref symbol (the general case)
    [/^:/, (_m, el, _out, zip, _errors) => {
        zip.push(new PortRef(el));
    }],
    // stop linking
    [/^~$/, (_m, _el, out, zip, _errors) => {
        out.push(zip.slice());
        zip.length = 0;
    }],
    // backreference
    [/^@/, (_m, el, out, zip, errors) => {
        const reffed = (el as LSymbol).valueOf().slice(1);
        const prevNodes = out
            .flat(1)
            .concat(zip);
        const n = prevNodes
            .findLast(x => x instanceof NodeAsWritten && x.name.valueOf() === reffed);
        if (n === undefined)
            errors.push(makePosError(`Backreference to "${reffed}" node, but there weren't any previous to here`,
                el, LynxError.UNDEFINED_NAME));
        else zip.push(n);
    }],
]);

function processSpecialsAndPortrefs(elements: (Pair | LSymbol | LNumber)[]): { chains: Chain[], errors: LynxError[] } {
    const chains: Chain[] = [];
    var curZip: Chain = [];
    const errors: LynxError[] = [];
    outer: for (var el of elements) {
        if (el instanceof Pair) {
            curZip.push(makeNode(el));
            continue;
        }
        if (el instanceof LSymbol) {
            for (var [regex, handler] of SPECIALS) {
                const m = regex.exec(el.toString());
                if (m) {
                    handler(m, el, chains, curZip, errors);
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
                errors.push(makePosError(`Named node ${val} not defined.`,
                    val, LynxError.UNDEFINED_NAME));
                chain[i] = new NodeAsWritten(val, [], true);
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
        // TODO: don't do this, only mark the implicit nodes
        // and remove them if the paramDoc def doesn't get picked
        if ([...s.concretes].some(c => c.def.paramDoc !== "")) continue;
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
    if (s.asWritten.args.length === 1) {
        // only one arg, so there must be one input or one param-only input
        // infer which one it is
        const allInputs = [...s.concretes].map(c => Object.entries(c.def.inputs));
        const matchingInputs = allInputs.flatMap(inputs => {
            if (inputs.length === 1) return inputs;
            const paramOnly = inputs.filter(([_, p]) => p.is("paramOnly"));
            if (paramOnly.length === 1) return paramOnly;
            return [];
        });
        if (new Set(matchingInputs.map(([name, p]) => name)).size === 1) {
            s.asWritten.args.unshift(new LSymbol(":" + matchingInputs[0]![0]));
        }
    }
    for (var i = 0; i < s.asWritten.args.length; i += 2) {
        const keyName = s.asWritten.args[i];
        const keyVal = s.asWritten.args[i + 1];
        if (!(keyName instanceof LSymbol)) {
            errors.push(makePosError(`Invalid init port name ${keyName} (expected a symbol)`,
                keyName, LynxError.BAD_SYNTAX));
            continue;
        }
        if (keyVal === undefined) {
            errors.push(makePosError(`Missing init value for ${keyName}`,
                keyName, LynxError.BAD_SYNTAX));
            // will only occur at the end
            break;
        }
        const { fixedVal, realType } = fixTypeOf(keyVal);
        const implicitNode = createImplicitSuperposition(s.asWritten, keyName, fixedVal, realType);
        nodes.push(implicitNode);
        links.push({
            from: implicitNode,
            to: s,
            portRefs: [new PortRef("value", fixedVal), new PortRef(keyName)],
            isImplicitConnection: true
        });
    }
    return { nodes, links, errors };
}

function createImplicitSuperposition(a: NodeAsWritten, sym: LSymbol, value: any, type: keyof TypeMap): Superposition {
    const name = new PortRef(sym).name;
    return {
        sym,
        asWritten: new NodeAsWritten(a.name, []),
        args: [],
        concretes: new Set([{
            sym,
            genericChoices: new Map,
            def: {
                id: `__implicit_arg_${name}__`,
                inputs: {},
                outputs: {
                    value: new Port(type, value, ["silent"])
                },
                doc: `Implicit node created by init arg :${name}`,
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
        const res = createOrGetCached(seen, chain[i] as any, allNDs);
        var prev = res.super;
        errors.push(...res.errors);
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
            // use cached version for this multiple-referenced node if it exists
            const res = createOrGetCached(seen, curNAW, allNDs);
            const cur = res.super;
            errors.push(...res.errors);
            connections.push({
                from: prev,
                to: cur,
                portRefs: slice.filter(x => x instanceof PortRef) as any,
                isImplicitConnection: false
            });
            prev = cur;
            i = j;
        }
    }
    return { superpos: [...seen.values()], connections, errors };
}

function createOrGetCached(s: Map<NodeAsWritten, Superposition>, n: NodeAsWritten, d: NodeDef[]): { errors: LynxError[], super: Superposition } {
    var ret: Superposition;
    var errors: LynxError[] = [];
    if (s.has(n)) ret = s.get(n)!;
    else {
        const res = createInitialSuperpos(n, d);
        ret = res.super;
        errors = res.errors;
        s.set(n, ret);
    }
    return { errors, super: ret };
}

function notValidHere(what: PortRef | LNumber | LSymbol): LynxError {
    const astNode = what instanceof PortRef ? what.sym : what;
    return makePosError(`${repr(astNode)} not valid here`,
        astNode, LynxError.BAD_SYNTAX);
}

function createInitialSuperpos(naw: NodeAsWritten, allNDs: NodeDef[]): { super: Superposition, errors: LynxError[] } {
    const matchingDefs = naw.isInvalidPlaceholder ? [] : allNDs.filter(nd => nd.id === naw.name.valueOf());
    const errors: LynxError[] = [];
    if (matchingDefs.length === 0 && !naw.isInvalidPlaceholder) {
        errors.push(makePosError(`Node type "${naw.name}" doesn't exist`,
            naw.name, LynxError.UNDEFINED_NAME));
    }
    return {
        super: {
            sym: naw.name,
            args: naw.args,
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

/**
 * Yields all of the combinations of bottom types that can be assigned to each generic
 * based on what each is bound to.
 */
function* choicesMap(choices: [Generic, TypeSpec[]][]): Generator<[Generic, TypeSpec][], void, undefined> {
    if (choices.length === 0) {
        yield [];
        return;
    }
    const [choice1, ...otherChoices] = choices;
    const [choice1Name, choice1Values] = choice1!;
    for (var nextChoices of choicesMap(otherChoices)) {
        for (var choice1Value of choice1Values.flatMap(getGroundTypes)) {
            yield [[choice1Name, choice1Value], ...nextChoices];
        }
    }
}

/*
each superposition is a list of possible defs and template types for each node

the connection specs reference the superpositions.

1. try every possible combination of concrete node def according to the connections
    a. cache all connections to avoid computing them twice
2. validate stuff
    a. if all of the nodes' concretes produced errors just return all of them
    b. if there are multiple variants left that have no errors:
        i.  if all reference the same node def variant but differ only in template 
            generics this is okay
        ii. if they don't, issue a "could not resolve variant, try adding
            more inputs" error
*/
type ConnectResult = [PortRef, PortRef] | LynxError;

// idk why i did it in this order
type ConnCache = Map<ConcreteNodeDef, Map<ConcreteNodeDef, Map<ConnectionSpec, ConnectResult>>>;
type SuperCache = Map<Superposition, Map<ConcreteNodeDef, ConnectResult[]>>;
/**
 * mutates the input sets
 */
function wfc(nodes: Set<Superposition>, connections: Set<ConnectionSpec>): { connections: Connection[], realNodes: Map<Superposition, NodeDef>, errors: LynxError[] } {
    const connCache: ConnCache = new Map;
    const superCache: SuperCache = new Map;
    const errors: LynxError[] = [];
    for (var conn of connections) {
        for (var c1 of conn.from.concretes) {
            for (var c2 of conn.to.concretes) {
                var res = getCache(connCache, c1, c2, conn);
                if (res === undefined) {
                    res = tryConnect(c1, c2, conn.portRefs, conn.isImplicitConnection);
                    putCache(connCache, c1, c2, conn, res);
                    saveSuperCache(superCache, nodes, c1, res);
                    saveSuperCache(superCache, nodes, c2, res);
                }
            }
        }
    }
    // all good now validate
    const realNodes: Map<Superposition, NodeDef> = new Map;
    const realConnections: Connection[] = [];
    for (var node of nodes) {
        if (node.concretes.size < 1) {
            continue;
        }
        const res = superCache.get(node);
        if (res === undefined) {
            // isolated node with no connections
            // check to see if it is just all one node def; if it is; ok
            if (new Set([...node.concretes].map(c => c.def)).size > 1) {
                errors.push(makePosError(`Could not resolve variant of isolated node "${node.asWritten.name}". Try connecting something to it.`,
                    node.sym, LynxError.BAD_CONN_SPEC));
            } else realNodes.set(node, [...node.concretes][0]!.def);
            continue;
        }
        const csNoErrors = [...res].flatMap(([c, r]) => r.every(r2 => r2 instanceof LynxError) ? [] : [c]);
        if (csNoErrors.length === 0) {
            errors.push(...[...res].flatMap(([_, r]) => r.filter(r2 => r2 instanceof LynxError)));
            continue;
        }
        const defsSet = new Set(csNoErrors.map(c => c.def));
        const firstConcrete = csNoErrors[0]!;
        const firstDef = firstConcrete.def;
        if (defsSet.size > 1) {
            errors.push(makePosError(`Could not resolve variant of node "${node.asWritten.name}". Try connecting something else to it.`,
                node.sym, LynxError.BAD_CONN_SPEC));
            continue;
        }
        realNodes.set(node, firstDef);
    }
    // create all of the connection objects
    for (var conn of connections) {
        const tgtLeft = realNodes.get(conn.from);
        const tgtRight = realNodes.get(conn.to);
        if (tgtLeft === undefined || tgtRight === undefined) {
            // one or both is errored
            continue;
        }
        const pair = findSuccessfulConcretePair(conn.from, tgtLeft, conn.to, tgtRight, conn, connCache);
        if (!pair) continue;
        const { fc, tc } = pair;
        const res = getCache(connCache, fc, tc, conn);
        if (res instanceof LynxError) {
            continue;
        }
        if (res === undefined) {
            throw new RangeError("unreachable");
        }
        realConnections.push({
            from: conn.from,
            to: conn.to,
            outPort: res[0],
            inPort: res[1]
        });
    }
    return {
        errors,
        realNodes,
        connections: realConnections
    }
}

function saveSuperCache(cache: SuperCache, superpositions: Set<Superposition>, d: ConcreteNodeDef, res: ConnectResult) {
    for (var s of superpositions) {
        const cache1 = cache.get(s) ?? new Map;
        cache.set(s, cache1);
        for (var c of s.concretes) {
            if (c === d) {
                const arr = cache1.get(c) ?? [];
                arr.push(res);
                cache1.set(c, arr);
            }
        }
    }
}

function putCache(cache: ConnCache, left: ConcreteNodeDef, right: ConcreteNodeDef, conn: ConnectionSpec, value: ConnectResult) {
    if (!cache.has(left)) cache.set(left, new Map);
    const cache2 = cache.get(left)!;
    if (!cache2.has(right)) cache2.set(right, new Map);
    const cache3 = cache2.get(right)!
    cache3.set(conn, value);
}

function getCache(cache: ConnCache, left: ConcreteNodeDef, right: ConcreteNodeDef, conn: ConnectionSpec): ConnectResult | undefined {
    return cache.get(left)?.get(right)?.get(conn);
}

function findSuccessfulConcretePair(
    fromSuper: Superposition,
    fromDef: NodeDef,
    toSuper: Superposition,
    toDef: NodeDef,
    conn: ConnectionSpec,
    connCache: ConnCache
): { fc: ConcreteNodeDef, tc: ConcreteNodeDef } | undefined {
    for (const fc of fromSuper.concretes) {
        if (fc.def !== fromDef) continue;
        for (const tc of toSuper.concretes) {
            if (tc.def !== toDef) continue;
            const res = getCache(connCache, fc, tc, conn);
            if (res && !(res instanceof LynxError)) {
                return { fc, tc };
            }
        }
    }
    return undefined;
}

/*
meaning of connection spec:
1. symbols and port types must define which ports to connect
    a. no symbols means that only one matching pair of ports has the same type
    b. one symbol means that it specifies one side, and the other side
       must be uniquely inferrable based on type
    c. two symbols just get their named ports, provided the types match
2. numbers specify the bus indexes
    a. once the port names are resolved by (1), the classes of the ports are checked
    b. if neither port is a bus, there must be no numbers. period.
    c. if only one of them is a bus, there must be only one number,
       which is the index to connect to
    d. if both are a bus, there must be two numbers or none. If two, only one line
       of the bus is connected, if none the whole bus is connected.
*/
function tryConnect(from: ConcreteNodeDef, to: ConcreteNodeDef, refs: PortRef[], isImplicitParamConnection: boolean): ConnectResult {
    const typeChoices: [PortRef, PortRef][] = [];
    const ports1 = resolvePortTypes(from.def.outputs, from.genericChoices);
    const ports2 = resolvePortTypes(to.def.inputs, to.genericChoices);
    const ports1Obj = Object.fromEntries(ports1);
    const ports2Obj = Object.fromEntries(ports2);
    for (var [n1, t1] of ports1) {
        for (var [n2, t2] of ports2) {
            if (t2.is("paramOnly") && !isImplicitParamConnection) continue;
            if (canConnect(t1.type, t2.type)) {
                typeChoices.push([new PortRef(n1, from.sym), new PortRef(n2, to.sym)]);
            }
        }
    }
    if (typeChoices.length === 0) {
        return makePosError(
            `No outputs of "${from.def.id}" match the type of any input of "${to.def.id}". Try inserting a converter node in between.`,
            refs[0]?.sym ?? from.sym, LynxError.TYPE_MISMATCH);
    }
    var successPorts: [PortRef, PortRef];
    const refsWithName = refs.filter(ref => ref.name !== "");
    const refsWithoutName = refs.filter(ref => ref.name === "");
    var needToGuessBusNumberAssignment = false;
    portswitch: switch (refsWithName.length) {
        case 0: {
            // No ports specified, so there must be only one with the right type to connect
            if (typeChoices.length > 1) {
                return makePosError(
                    `Multiple ways to connect "${from.def.id}" to "${to.def.id}" and none was specified`,
                    from.sym, LynxError.BAD_CONN_SPEC);
            }
            successPorts = typeChoices[0]!;
            needToGuessBusNumberAssignment = true;
            break;
        }
        case 1: {
            // one side must be specified by the name; the other must be inferrable by the type
            const sPort = refsWithName[0]!;
            const tPortLeft = ports1Obj[sPort.name];
            const tPortRight = ports2Obj[sPort.name];
            const connWithNameOnLeft = typeChoices.filter(([o, _]) => o.name === sPort.name);
            const connWithNameOnRight = typeChoices.filter(([_, i]) => i.name === sPort.name);
            if (tPortLeft === undefined && tPortRight === undefined) {
                return makePosError(
                    `No port :${sPort.name} exists on outputs of "${from.def.id}" or inputs of "${to.def.id}"`,
                    sPort.sym, LynxError.UNDEFINED_NAME);
            }
            if (tPortLeft !== undefined && tPortRight !== undefined) {
                // name could refer to one or the other. find the one that makes the most sense -
                // the possible connections with the name placed on one side, one of them must have only one choice.
                // if both ways have only one choice it is easy.
                if (connWithNameOnLeft.length === 1) {
                    successPorts = connWithNameOnLeft[0]!.with(0, sPort) as any;
                    if (refsWithoutName.length > 0) successPorts[1].busNum = refsWithoutName[0]!.busNum;
                    break portswitch;
                }
                if (connWithNameOnRight.length === 1) {
                    successPorts = connWithNameOnRight[0]!.with(1, sPort) as any;
                    if (refsWithoutName.length > 0) successPorts[0].busNum = refsWithoutName[0]!.busNum;
                    break portswitch;
                }
                return makePosError(`Write ':${sPort.name} :${sPort.name}' if you intend to connect :${sPort.name} of "${from.def.id}" to :${sPort.name} of "${to.def.id}". There are multiple other ports that each of these could be connected to.`,
                    sPort.sym, LynxError.BAD_CONN_SPEC);
            }
            if (tPortLeft !== undefined) {
                // name was referring to name on left; get the ones on right it can connect to
                if (connWithNameOnLeft.length === 1) {
                    const conn = connWithNameOnLeft[0]!;
                    if (to.def.inputs[conn[1].name]!.is("paramOnly")) {
                        return makePosError(`Output :${sPort.name} (${tPortLeft}) of "${from.def.id}" can only connect to :${conn[1]} of "${to.def.id}", but it is initialize-only`,
                            sPort.sym, LynxError.INPUT_CONFLICT)
                    }
                    successPorts = conn.with(0, sPort) as any;
                    if (refsWithoutName.length > 0) successPorts[1].busNum = refsWithoutName[0]!.busNum;
                    break portswitch;
                }
                else if (connWithNameOnLeft.length === 0)
                    return makePosError(`No inputs to "${to.def.id}" can be connected to output :${sPort.name} (${tPortLeft}) of "${from.def.id}"`,
                        sPort.sym, LynxError.TYPE_MISMATCH);
                else return makePosError(`Multiple inputs to "${to.def.id}" (${connWithNameOnLeft.map(([_, i]) => i)}) can be connected to output :${sPort.name} (${tPortLeft}) of "${from.def.id}" - use two symbols to specify.`,
                    sPort.sym, LynxError.BAD_CONN_SPEC);
            }
            if (tPortRight !== undefined) {
                // name was referring to name on right; get the ones on left it can be connected to
                if (to.def.inputs[sPort.name]!.is("paramOnly")) {
                    return makePosError(`Input :${sPort.name} (${tPortLeft}) of "${to.def.id}" is initialize-only`,
                        sPort.sym, LynxError.INPUT_CONFLICT)
                }
                if (connWithNameOnRight.length === 1) {
                    successPorts = connWithNameOnRight[0]!.with(1, sPort) as any;
                    if (refsWithoutName.length > 0) successPorts[0].busNum = refsWithoutName[0]!.busNum;
                    break portswitch;
                }
                else if (connWithNameOnRight.length === 0)
                    return makePosError(`No outputs of "${from.def.id}" can be connected to input :${sPort.name} (${tPortRight}) of "${to.def.id}"`,
                        sPort.sym, LynxError.TYPE_MISMATCH);
                else return makePosError(`Multiple outputs of "${from.def.id}" (${connWithNameOnRight.map(([i, _]) => i)}) can be connected to input :${sPort.name} (${tPortRight}) of "${to.def.id}" - use two symbols to specify.`,
                    sPort.sym, LynxError.BAD_CONN_SPEC);
            }
            throw "unreachable";
        }
        case 2: {
            // both are specified: they must both exist and have the right type
            const p1 = refsWithName[0]!;
            const p2 = refsWithName[1]!;
            const tPortLeft = ports1Obj[p1.name];
            const tPortRight = ports2Obj[p2.name];
            const errors: LynxError[] = [];
            if (tPortLeft === undefined) {
                errors.push(makePosError(`Node "${from.def.id}" has no output port :${p1.name}`,
                    p1.sym, LynxError.UNDEFINED_NAME));
            }
            if (tPortRight === undefined) {
                errors.push(makePosError(`Node "${to.def.id}" has no input port :${p2.name}`,
                    p2.sym, LynxError.UNDEFINED_NAME));
            }
            if (errors.length === 0 && !canConnect(tPortLeft!.type, tPortRight!.type)) {
                return makePosError(`Cannot connect output :${p1.name} (${tPortLeft}) of "${from.def.id}" node to :${p2.name} (${tPortRight}) of "${to.def.id}"`,
                    p2.sym, LynxError.TYPE_MISMATCH)
            }
            if (errors.length === 2) return new LynxMultiError(errors);
            else if (errors.length === 1) return errors[0]!;
            successPorts = [p1, p2];
            break;
        }
        default:
            return makePosError("Too many port references", refs[2]!.sym, LynxError.BAD_CONN_SPEC);
    }
    // Now: validate the bus numbers (no need to edit the port refs)
    const [pLeft, pRight] = [ports1.get(successPorts[0].name)!, ports2.get(successPorts[1].name)!];
    const [leftIsBus, rightIsBus] = [pLeft.is("bus"), pRight.is("bus")];
    const refsWithBus = refs.filter(ref => ref.busNum !== undefined);
    const errors: LynxError[] = [];
    if (!leftIsBus && !rightIsBus) {
        // neither can have numbers
        if (needToGuessBusNumberAssignment) {
            if (refsWithBus.length > 0) {
                return makePosError(`Number not allowed here. Neither output :${successPorts[0].sym} of "${from.def.id}" nor input :${successPorts[1].sym} of "${to.def.id}" is a bus.`,
                    refsWithBus[0]!.busNum!, LynxError.BAD_CONN_SPEC);
            }
        }
        else {
            if (successPorts[0].busNum !== undefined)
                errors.push(makePosError(`Output :${successPorts[0].sym} of "${from.def.id}" is not a bus`,
                    successPorts[0].busNum, LynxError.TYPE_MISMATCH));
            if (successPorts[1].busNum !== undefined)
                errors.push(makePosError(`Input :${successPorts[1].sym} of "${to.def.id}" is not a bus`,
                    successPorts[1].busNum, LynxError.TYPE_MISMATCH));
        }
    }
    else if (leftIsBus && rightIsBus) {
        if (needToGuessBusNumberAssignment) {
            // just assign them left-right; if there is only one the error condition
            // below will trigger
            successPorts[0].busNum = refsWithBus[0]?.busNum;
            successPorts[1].busNum = refsWithBus[1]?.busNum;
        }
        if ((successPorts[0].busNum !== undefined) === (successPorts[1].busNum !== undefined)) {
            // two or none; ok
        } else
            return makePosError(`Both output :${successPorts[0].sym} of "${from.def.id}" and input :${successPorts[1].sym} of "${to.def.id}" are busses, you must specify two numbers or none`,
                successPorts[0].busNum ?? successPorts[1].busNum!, LynxError.TYPE_MISMATCH);
    }
    else {
        // one and not the other
        const [b, nb] = (leftIsBus ? [0, 1] : [1, 0]) as [0 | 1, 0 | 1];
        const [iinL, iinR] = leftIsBus ? ["", "not "] : ["not ", ""];
        if (needToGuessBusNumberAssignment) {
            if (refsWithBus.length === 2) {
                successPorts[0].busNum = refsWithBus[0]?.busNum;
                successPorts[1].busNum = refsWithBus[1]?.busNum;
            } else {
                successPorts[b].busNum = refsWithBus[0]?.busNum;
            }
        }
        if (successPorts[b].busNum === undefined)
            errors.push(makePosError(`Output :${successPorts[0].sym} of "${from.def.id}" is ${iinL}a bus, and input :${successPorts[1].sym} of "${to.def.id}" is ${iinR}a bus, so a number is required here`,
                successPorts[b].sym, LynxError.TYPE_MISMATCH));
        if (successPorts[nb].busNum !== undefined)
            errors.push(makePosError(`Output :${successPorts[0].sym} of "${from.def.id}" is ${iinL}a bus, and input :${successPorts[1].sym} of "${to.def.id}" is ${iinR}a bus, so a number is not allowed here`,
                successPorts[nb].busNum, LynxError.TYPE_MISMATCH));

    }
    return errors.length > 0 ? (errors.length === 1 ? errors[0]! : new LynxMultiError(errors)) : successPorts;
}

/**
 * Resolves the generic types in ports to the concrete type specifications and
 * returns a new map of name to port, with the port having the concrete type
 * where the source had a templated type name.
 */
function resolvePortTypes(portSide: Record<string, Port>, concrete: Map<string, TypeSpec>): Map<string, Port> {
    const out = new Map<string, Port>();
    for (var name of Object.keys(portSide)) {
        const thePort = portSide[name]!;
        const theType = concrete.get(thePort.type as string) ?? thePort.type;
        out.set(name, new Port(theType, thePort.initialVal, thePort.flags));
    }
    return out;
}

/*
to check for multiple-output-into-one-input conflicts
1. iterate over all nodes' inputs
2. if it is a normal port, only one output can be outputting into it unless it is a eventReceiver port
3. if it is a bus, either one bus output without indices can be inputting,
   or multiple non-bus ports that all have different indices
*/
function validateConnections(nodes: Map<Superposition, NodeDef>, links: Connection[]): LynxError[] {
    const errors: LynxError[] = [];
    for (var [s, def] of nodes) {
        const toThisNode = links.filter(c => c.to === s);
        for (var i in def.inputs) {
            const thisPort = def.inputs[i]!;
            const toThisPort = toThisNode.filter(c => c.inPort.name === i);
            if (thisPort.is("bus")) {
                const wholeBusConnections = toThisPort.filter(c => c.inPort.busNum === undefined);
                if (wholeBusConnections.length > 0) {
                    // Only one whole-bus connection allowed
                    if (wholeBusConnections.length > 1 || toThisPort.length > 1) {
                        for (const c of toThisPort) {
                            errors.push(makePosError(`Multiple outputs are connected to input :${i} of node "${def.id}" (whole-bus connection)`,
                                c.outPort.sym, LynxError.INPUT_CONFLICT));
                        }
                    }
                } else {
                    // Each must have a different busNum
                    const seenBI: Set<number> = new Set;
                    for (const c of toThisPort) {
                        const busNumStr = c.inPort.busNum!.valueOf();
                        if (seenBI.has(busNumStr)) {
                            errors.push(makePosError(`Multiple outputs are connected to the same bus index (${busNumStr}) of input :${i} of node "${def.id}"`,
                                c.outPort.sym, LynxError.INPUT_CONFLICT));
                        } else {
                            seenBI.add(busNumStr);
                        }
                    }
                }
            } else if (!thisPort.is("eventReceiver")) {
                if (toThisPort.length > 1) {
                    for (var c of toThisPort) {
                        errors.push(makePosError(`Multiple outputs are connected to input :${i} of node "${def.id}"`,
                            c.outPort.sym, LynxError.INPUT_CONFLICT));
                    }
                }
            }
        }
    }
    return errors;
}

function createAndConnectNodes(nodes: Map<Superposition, NodeDef>, links: Connection[]): LynxNode[] {
    const sToI: Map<Superposition, LynxNode> = new Map;
    for (var [n, def] of nodes) {
        sToI.set(n, new LynxNode(def.id, def, { line: n.sym.__line__!, col: n.sym.__col__! }, n.args));
    }
    // connect them
    for (var link of links) {
        const { from, to, inPort, outPort } = link;
        const fromNode = sToI.get(from)!;
        const toNode = sToI.get(to)!;
        fromNode.connect(outPort.name, toNode, inPort.name, outPort.busNum?.valueOf(), inPort.busNum?.valueOf());
    }
    return [...sToI.values()];
}
