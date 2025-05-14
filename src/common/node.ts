import { LynxError } from "./errors";
import { LynxFlow } from "./flow";
import { Bus, NodeDef } from "./nodeDef";
import { Generic, TypeSpec } from "./types";

interface Link<N extends LynxNode, P extends string> {
    node: N;
    port: P;
    busNOut: number | undefined;
    busNIn: number | undefined;
}

type OutLinks<SLN extends string, IPN extends string = any>
    = Partial<Record<SLN, Link<LynxNode<IPN>, IPN>[]>>;
type InLinks<SLN extends string, SPN extends string = any>
    = Partial<Record<SLN, Link<LynxNode<any, SPN>, SPN>[]>>;

export class LynxNode<IPN extends string = any, OPN extends string = any, G extends Generic = any, SK extends string = any> {
    readonly name: string;
    def: NodeDef<IPN, OPN, G, SK>;
    readonly where: { line: number; col: number; };
    #changes: Partial<Record<IPN, any>>;
    /**
     * used for sending the right value of output
     * 
     * Map of outputID -> list of [node, input value goes into, index of bus output, index of bus input]
     */
    readonly linksByOutput: OutLinks<OPN>;
    /**
     * used for getting current value of input
     * 
     * Map of inputID -> list of [node inputting, output getting value from, index of bus output, index of bus input]
     */
    readonly nodesInputting: InLinks<IPN>;
    readonly state: Partial<Record<SK, any>>;
    readonly currentValues: Partial<Record<OPN, any | any[]>>;
    constructor(name: string, def: NodeDef<IPN, OPN, G, SK>, where: { line: number; col: number; }) {
        this.name = name;
        this.def = def;
        this.where = where;
        this.#changes = {};
        this.linksByOutput = {};
        this.nodesInputting = {};
        this.state = {};
        this.currentValues = {};
    }
    /**
     * Must be called AFTER {@link LynxNode.connect|.connect()} is called to establish connections
     */
    async setup(app: LynxFlow) {
        // init values for outputs
        for (var n of Object.keys(this.def!.outputs)) {
            this.currentValues[n as OPN] = this.def!.outputs[n as OPN].initialVal;
        }
        await this.def!.setup?.({
            app,
            node: this,
            features: Object.fromEntries(
                await Promise.all(
                    this.def!.features !== undefined
                        ? this.def!.features.map(
                            async f => [f, await app.feature(f)])
                        : [])),
        });
        for (var out in this.linksByOutput) {
            for (var { node, port, busNOut, busNIn } of this.linksByOutput[out]!) {
                await this.def!.connect?.({
                    app,
                    nodeFrom: this,
                    outFrom: out,
                    nodeTo: node,
                    inTo: port,
                    busNOut,
                    busNIn
                });
            }
        }
    }
    send(name: IPN, value: any, bi: number | undefined) {
        if (this.def.inputs[name].silent) return;
        if (this.def.inputs[name].type === "signal") value = true;
        if (bi === undefined) this.#changes[name] = value;
        // the below line relies on the nod being connected and the sending
        // node updating its currentValues before calling .send()
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
    output(outName: OPN, value?: any, bo?: number) {
        if (Array.isArray(this.currentValues[outName]) && !Array.isArray(value)) {
            if (bo === undefined)
                nodeComplain(this, `Output :${outName} is a bus. You must specify an index, or give the whole array at once.`);
            this.currentValues[outName][bo] = value;
        }
        else this.currentValues[outName] = value;
        if (this.def.outputs[outName].silent) return;
        const links = this.linksByOutput[outName];
        if (!links) return;
        for (var { node, port, busNOut, busNIn } of links) {
            if (bo === busNOut || bo === undefined)
                node.send(port, value, busNIn);
        }
    }
    get(inName: IPN): any {
        if (!this.nodesInputting[inName]) return this.def.inputs[inName].initialVal;
        const inputsHere = this.nodesInputting[inName];
        if (inputsHere.length === 1 && inputsHere[0]!.busNIn === undefined) {
            // this is a non-bus input or bus-to-bus link, just get the value output
            const link = inputsHere[0]!;
            const ov = link.node.currentValues[link.port];
            if (link.busNOut !== undefined) return ov[link.busNOut];
            else return ov;
        }
        // we have a bus input, collected from others, so collect the value
        const busVal = [];
        for (var { node, port, busNOut, busNIn } of inputsHere) {
            const ov = node.currentValues[port];
            if (busNOut !== undefined) busVal[busNIn!] = ov[busNOut];
            else busVal[busNIn!] = ov;
        }
        // nice thing about arrays is that when you set an index,
        // they update the length automatically
        return busVal;
    }
    connect<P extends string>(outFrom: OPN, nodeTo: LynxNode<P, any>, inTo: P, busOut?: number, busIn?: number) {
        console.log("connecting", this, outFrom, nodeTo, inTo, busOut, busIn);
        // record connection going out
        if (!this.linksByOutput[outFrom]) this.linksByOutput[outFrom] = [];
        this.linksByOutput[outFrom].push({ node: nodeTo, port: inTo, busNOut: busOut, busNIn: busIn });
        // check to make sure inputting works
        if (nodeTo.nodesInputting[inTo] !== undefined && nodeTo.nodesInputting[inTo].length === 1) {
            const { busNOut, busNIn } = nodeTo.nodesInputting[inTo][0]!;
            if ((busNOut === undefined && busNIn === undefined) || (busNOut === busIn))
                // should've already been resolved by the connection getter code
                nodeComplain(this as any, `Can't connect multiple outputs to the same input :${inTo}`);
        }
        // record connection going in
        if (!nodeTo.nodesInputting[inTo]) nodeTo.nodesInputting[inTo] = [];
        nodeTo.nodesInputting[inTo].push({ node: this, port: outFrom, busNOut: busOut, busNIn: busIn });
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
