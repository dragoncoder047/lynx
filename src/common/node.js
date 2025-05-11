import { LynxFlow } from './flow.js';
import { Bus, Port } from './port.js';
import { NodeDef } from './nodeDef.js';
import { typeOf, LynxError } from './utils.js';

export class LynxNode {
    /**
     * @type {string}
     */
    name
    /**
     * @type {any[]}
     */
    args
    /**
     * @type {NodeDef}
     */
    def
    /**
     * @type {Record<string, import('./utils.js').TypeSpec>}
     */
    templateInstantiation
    /**
     * @type {{line: number, col: number}}
     */
    where
    /**
     * @type {Record<string, any>}
     */
    #changes
    /**
     * used for sending the right value of output
     * 
     * Map of outputID -> list of [node, input value goes into, index of bus output, index of bus input]
     * @type {Record<string, [LynxNode, string, number | undefined, number | undefined][]>}
     */
    linksByOutput
    /**
     * used for getting current value of input
     * 
     * Map of inputID -> list of [node inputting, output getting value from, index of bus output, index of bus input]
     * @type {Record<string, [LynxNode, string, number | undefined, number | undefined][]>}
     */
    nodesInputting
    /**
     * @type {Record<string, any>}
     */
    state
    /**
     * @type {Record<string, any | any[]>}
     */
    currentValues
    /**
     * @param {string} name
     * @param {any[]} args
     * @param {{line: number, col: number}} where
     */
    constructor(name, args, where) {
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
    /**
     * @param {LynxFlow} app
     */
    async setup(app) {
        for (var o of this.def.outputs) {
            if (o instanceof Bus) this.currentValues[o.name] = [];
        }
        await this.def.setup?.({
            app,
            node: this,
            params: this.args,
            features: Object.fromEntries(
                await Promise.all(
                    this.def.features !== undefined
                        ? this.def.features.map(
                            async f => [f, await app.feature(f)])
                        : [])),
        });
        for (var out of Object.keys(this.linksByOutput)) {
            for (var [nt, it, po, pi] of this.linksByOutput[out]) {
                await this.def.connect?.({
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
    /**
     * @param {string} name
     * @param {any} value
     * @param {number | undefined} bi
     */
    update(name, value, bi) {
        if (bi === undefined) this.#changes[name] = value;
        else this.#changes[name] = this.get(name);
    }
    /**
     * @param {LynxFlow} app
     */
    async tick(app) {
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
    /**
     * @param {name} outName
     * @param {any} value
     * @param {number | undefined} bo
     */
    output(outName, value, bo) {
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
    /**
     * @param {string} inName
     * @param {any} def
     * @returns {any}
     */
    get(inName, def) {
        if (!this.nodesInputting[inName]) return def;
        const inputsHere = this.nodesInputting[inName];
        if (inputsHere.length === 1 && inputsHere[0][3] === undefined) {
            // this is a non-bus input or bus-to-bus link, just get the value output
            const [ni, oi, bo, _] = inputsHere[0];
            const ov = ni.currentValues[oi];
            if (bo !== undefined) return ov[bo];
            else return ov;
        }
        // we have a bus input, collected from others, so collect the value
        const busVal = [];
        for (var [ni, oi, bo, bi] of inputsHere) {
            var val;
            const ov = ni.currentValues[oi];
            if (bo !== undefined) val = ov[bo];
            else val = ov;
            busVal[bi] = val;
        }
        // nice thing about arrays is that when you set an index,
        // they update the length automatically
        return busVal;
    }
    /**
     * @param {string} outFrom
     * @param {LynxNode} nodeTo
     * @param {string} inTo
     */
    connect(outFrom, nodeTo, inTo, busNOut, busNIn) {
        console.log("connecting", this, outFrom, nodeTo, inTo, busNOut, busNIn);
        // record connection going out
        (this.linksByOutput[outFrom] || (this.linksByOutput[outFrom] = [])).push([nodeTo, inTo, busNOut, busNIn]);
        // check to make sure inputting works
        if (nodeTo.nodesInputting[inTo] !== undefined && nodeTo.nodesInputting[inTo].length === 1) {
            const [ni, oi, bo, bi] = nodeTo.nodesInputting[inTo][0];
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
    insertParameterizedTypes(def) {
        const instantiate = (t) => {
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
                .map(c => new c.constructor(c.name, instantiate(c.type))),
            outputs: def.outputs
                .map(c => new c.constructor(c.name, instantiate(c.type)))
        };
    }
}

/**
 * @param {LynxNode} node
 * @param {string} msg
 * @param {number} [severity=1]
 * @returns {never}
 */
export function makeNodeComplain(node, msg, severity = 1) {
    return new LynxError(
        msg,
        severity,
        node.where?.line,
        node.where?.col,
        node.name.length)
}

/**
 * @param {LynxNode} node
 * @param {string} msg
 * @param {number} [severity=1]
 * @returns {never}
 */
export function nodeComplain(node, msg, severity = 1) {
    throw makeNodeComplain(node, msg, severity);
}
