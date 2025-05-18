import { LynxError } from "./errors";
import { LynxFlow } from "./flow";
import { NodeDef } from "./nodeDef";
import { Generic } from "./types";

/**
 * the data holding a link going FROM the holder of this node
 * TO another node
 */
interface Link {
    /**
     * The node that this one is connected to
     */
    node: LynxNode;
    /**
     * The port name that this connection goes to
     */
    port: string;
    /**
     * The bus index on THIS node that the data comes from
     */
    busNOut: number | undefined;
    /**
     * The bus index on the OTHER node that the data goes into
     */
    busNIn: number | undefined;
}

export class LynxNode<IPN extends string = any, OPN extends string = any, G extends Generic = any, SK extends string = any> {
    readonly name: string;
    def: NodeDef<IPN, OPN, G, SK>;
    readonly where: { line: number; col: number; };
    #changes: Partial<Record<IPN, any>>;
    readonly connections: Partial<Record<OPN, Link[]>>;
    readonly inputCurrentValues: Partial<Record<IPN, any>>;
    readonly state: Partial<Record<SK, any>>;
    readonly outputCurrentValues: Partial<Record<OPN, any | any[]>>;
    constructor(name: string, def: NodeDef<IPN, OPN, G, SK>, where: { line: number; col: number; }) {
        this.name = name;
        this.def = def;
        this.where = where;
        this.#changes = {};
        this.connections = {};
        this.inputCurrentValues = {};
        this.state = {};
        this.outputCurrentValues = {};
    }
    /**
     * Must be called AFTER {@link LynxNode.connect|.connect()} is called to establish connections
     */
    async setup(app: LynxFlow) {
        // init values for outputs
        for (var n in this.def!.outputs) {
            const val = this.def!.outputs[n].initialVal;
            this.outputCurrentValues[n] = val;
            this.output(n, val);
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
        for (var out in this.connections) {
            for (var { node, port, busNOut, busNIn } of this.connections[out]!) {
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
        // assign the value
        if (bi === undefined) this.inputCurrentValues[name] = value;
        else {
            this.inputCurrentValues[name] ??= [];
            this.inputCurrentValues[name][bi] = value;
        }
        // decide whether to mark it as a change
        if (this.def.inputs[name]?.is("silent")) return;
        if (this.def.inputs[name]?.type === "signal") value = true;
        if (bi === undefined) this.#changes[name] = value;
        else this.#changes[name] = (this.inputCurrentValues[name] as any[]).with(bi, value);
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
        const isBus = Array.isArray(this.outputCurrentValues[outName]);
        if (isBus && !Array.isArray(value)) {
            if (bo === undefined)
                nodeComplain(this, `Output :${outName} is a bus. You must specify an index, or give the whole array at once.`);
            this.outputCurrentValues[outName][bo] = value;
        }
        else this.outputCurrentValues[outName] = value;
        if (this.def.outputs[outName].is("silent")) return;
        const connections = this.connections[outName] ?? [];
        for (var conn of connections) {
            var theValue = this.outputCurrentValues[outName];
            // If conn is not for whole array only send if it is the right index input
            if (isBus && conn.busNOut !== undefined) {
                // if we just updated the whole thing or the index being pulled from
                if (bo === undefined || conn.busNOut === bo)
                    theValue = theValue[conn.busNOut!];
                // otherwise don't update the node cause it isn't concerned with this update
                else continue;
            }
            // otherwise just send it as is
            conn.node.send(conn.port, theValue, conn.busNIn);
        }
    }
    get(inName: IPN): any {
        if (!(inName in this.inputCurrentValues)) return this.def.inputs[inName].initialVal;
        return this.inputCurrentValues[inName];
    }
    connect<P extends string>(outFrom: OPN, nodeTo: LynxNode<P, any>, inTo: P, busOut?: number, busIn?: number) {
        console.log("connecting", this, outFrom, nodeTo, inTo, busOut, busIn);
        // record connection going out
        this.connections[outFrom] ??= [];
        this.connections[outFrom].push({
            node: nodeTo,
            port: inTo,
            busNIn: busIn,
            busNOut: busOut
        });
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
