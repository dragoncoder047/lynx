import { LynxFlow } from './flow.js';
import { Feature } from './feature.js';
import { LynxNode } from './node.js';
import { Port } from './port.js';

/**
 * @interface
 */
export class NodeDef {
    /**
     * @type {string}
     */
    id
    /**
     * @type {Record<string, number>}
     */
    generics
    /**
     * @type {Record<string, import('./utils.js').TypeSpec>}
     */
    template
    /**
     * @type {string[]}
     */
    features
    /**
     * @type {Port[]}
     */
    inputs
    /**
     * @type {Port[]}
     */
    outputs
    /**
     * @type {import('./utils.js').TypeSpec[]}
     */
    argTypes
    /**
     * @type {({app, node, changes}: {app: LynxFlow, node: LynxNode, changes: Object}) => Promise<void>}
     */
    update
    /**
     * @type {({app, node}: {app: LynxFlow, node: LynxNode}) => Promise<void>}
     */
    tick
    /**
     * @type {({app, node, params, features}: {app: LynxFlow, node: LynxNode, params: Array, features: Record<string, Feature>}) => Promise<void>}
     */
    setup
    /**
     * @type {({app, nodeFrom, outFrom, nodeTo, inTo, busNOut, busNIn}: {app: LynxFlow, nodeFrom: LynxNode, outFrom: string, nodeTo: LynxNode, inTo: string, busNOut: number | undefined, busNIn: number | undefined}) => Promise<void>}
     */
    connect
    /**
     * @type {string}
     */
    doc
    /**
     * @param {NodeDef} value
     */
    constructor({ id, inputs, outputs, features = [], argTypes, update, generics = {}, template = {}, tick, setup, connect, doc = "" }) {
        this.id = id;
        this.generics = generics;
        this.template = template;
        this.inputs = inputs;
        this.outputs = outputs;
        this.features = features;
        this.argTypes = argTypes;
        this.update = update;
        this.tick = tick;
        this.setup = setup;
        this.connect = connect;
        this.doc = doc;
    }
}
