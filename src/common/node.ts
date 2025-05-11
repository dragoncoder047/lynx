import { LynxFlow } from "./flow";
import { NodeDef } from "./nodeDef";
import { Bus, Port } from "./port";
import { LynxError, typeOf, TypeSpec } from "./utils";

export class LynxNode {
    name: string;
    args: any[];
    def: NodeDef | undefined;
    templateInstantiation: Record<string, TypeSpec>;
    where: { line: number; col: number; };
    #changes: Record<string, any>;
    /**
     * used for sending the right value of output
     * 
     * Map of outputID -> list of [node, input value goes into, index of bus output, index of bus input]
     */
    linksByOutput: Record<string, [LynxNode, string, number | undefined, number | undefined][]>;
    /**
     * used for getting current value of input
     * 
     * Map of inputID -> list of [node inputting, output getting value from, index of bus output, index of bus input]
     */
    nodesInputting: Record<string, [LynxNode, string, number | undefined, number | undefined][]>;
    /**
     * @type {Record<string, any>}
     */
    state: Record<string, any>;
    /**
     * @type {Record<string, any | any[]>}
     */
    currentValues: Record<string, any | any[]>;
    constructor(name: string, args: any[], where: { line: number; col: number; }) {
        this.name = name;
        this.args = args;
        this.def = undefined;
        this.where = where;
        this.#changes = {};
        this.linksByOutput = {};
        this.nodesInputting = {};
        this.state = {};
        this.currentValues = {};
        this.templateInstantiation = {};
    }
    async setup(app: LynxFlow) {
        for (var o of this.def!.outputs) {
            if (o instanceof Bus) this.currentValues[o.name] = [];
        }
        await this.def!.setup?.({
            app,
            node: this,
            params: this.args,
            features: Object.fromEntries(
                await Promise.all(
                    this.def!.features !== undefined
                        ? this.def!.features.map(
                            async f => [f, await app.feature(f)])
                        : [])),
        });
        for (var out of Object.keys(this.linksByOutput)) {
            for (var [nt, it, po, pi] of this.linksByOutput[out]!) {
                await this.def!.connect?.({
                    app,
                    nodeFrom: this,
                    outFrom: out,
                    nodeTo: nt,
                    inTo: it,
                    busNOut: po,
                    busNIn: pi
                });
            }
        }
    }
    update(name: string, value: any, bi: number | undefined) {
        if (bi === undefined) this.#changes[name] = value;
        else this.#changes[name] = this.get(name);
    }
    async tick(app: LynxFlow) {
        if (this.def === undefined)
            nodeComplain(this, "Node has no definition");
        await this.def.tick?.({
            app,
            node: this
        });
        if (Object.keys(this.#changes).length > 0) {
            await this.def.update?.({
                app,
                node: this,
                changes: this.#changes
            });
        }
        this.#changes = {};
    }
    output(outName: string, value?: any, bo?: number) {
        if (Array.isArray(this.currentValues[outName]) && bo !== undefined) {
            this.currentValues[outName][bo] = value;
        }
        else this.currentValues[outName] = value;
        const links = this.linksByOutput[outName];
        if (!links) return;
        for (var [node, inName, xbo, bi] of links) {
            if (bo === xbo || bo === undefined)
                node.update(inName, value, bi);
        }
    }
    get<T>(inName: string, def?: T | T[]): T | T[] {
        if (!this.nodesInputting[inName]) return def as T;
        const inputsHere = this.nodesInputting[inName];
        if (inputsHere.length === 1 && inputsHere[0]![3] === undefined) {
            // this is a non-bus input or bus-to-bus link, just get the value output
            const [ni, oi, bo, _] = inputsHere[0]!;
            const ov = ni.currentValues[oi];
            if (bo !== undefined) return ov[bo];
            else return ov;
        }
        // we have a bus input, collected from others, so collect the value
        const busVal: T[] = [];
        for (var [ni, oi, bo, bi] of inputsHere) {
            var val;
            const ov = ni.currentValues[oi];
            if (bo !== undefined) val = ov[bo];
            else val = ov;
            busVal[bi!] = val;
        }
        // nice thing about arrays is that when you set an index,
        // they update the length automatically
        return busVal;
    }
    connect(outFrom: string, nodeTo: LynxNode, inTo: string, busNOut?: number, busNIn?: number) {
        console.log("connecting", this, outFrom, nodeTo, inTo, busNOut, busNIn);
        // record connection going out
        (this.linksByOutput[outFrom] || (this.linksByOutput[outFrom] = [])).push([nodeTo, inTo, busNOut, busNIn]);
        // check to make sure inputting works
        if (nodeTo.nodesInputting[inTo] !== undefined && nodeTo.nodesInputting[inTo].length === 1) {
            const [ni, oi, bo, bi] = nodeTo.nodesInputting[inTo][0]!;
            if ((bo === undefined && bi === undefined) || (bi === busNIn))
                nodeComplain(this, `Can't connect multiple outputs to the same input :${inTo}`);
        }
        // record connection going in
        (nodeTo.nodesInputting[inTo] || (nodeTo.nodesInputting[inTo] = [])).push([this, outFrom, busNOut, busNIn]);
    }
    /**
     * @param {NodeDef} def
     * @returns {{inputs: Port[]; outputs: Port[]}}
     */
    insertParameterizedTypes(def: NodeDef): { inputs: Port[]; outputs: Port[]; } {
        const instantiate = (t: string) => {
            if (def.template?.[t] !== undefined) {
                if (this.templateInstantiation[t] !== undefined)
                    return this.templateInstantiation[t];
                else return def.template[t];
            }
            if (def.generics?.[t] !== undefined)
                return typeOf(this.args[def.generics[t]])
            return t;
        }
        return {
            inputs: def.inputs
                // @ts-ignore
                .map(c => new c.constructor(c.name, instantiate(c.type))),
            outputs: def.outputs
                // @ts-ignore
                .map(c => new c.constructor(c.name, instantiate(c.type)))
        };
    }
}

export function makeNodeComplain(node: LynxNode, msg: string, severity: number = 1): LynxError {
    return new LynxError(
        msg,
        severity,
        node.where?.line,
        node.where?.col,
        node.name.length)
}

export function nodeComplain(node: LynxNode, msg: string, severity: number = 1): never {
    throw makeNodeComplain(node, msg, severity);
}
