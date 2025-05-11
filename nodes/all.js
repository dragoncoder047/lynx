import { LynxFlow } from '../common/flow.js';
import { Feature } from '../common/feature.js';
import { NodeDef } from '../common/nodeDef.js';

export const modulesReady = Promise.all([
    import('./flow.js'),
    import('./html.js'),
    import('./simple.js'),
    import('./converters.js'),
    import('./random.js'),
    import('./features/gps.js'),
    import('./features/unsafe.js'),
    import('./electronics/clock.js'),
]);

/**
 * @type {NodeDef[]}
 */
export const NODES = [];
/**
 * @type {[string, Feature][]}
 */
export const FEATURES = [];

/**
 * @param {LynxFlow} app
 */
export async function loadAllNodes(app) {
    await modulesReady;
    for (var node of NODES) {
        app.defineNode(node);
    }
    for (var [name, fun] of FEATURES) {
        app.defineFeature(name, fun);
    }
    console.log("Initialized nodes and features");
    console.log(app.nodeDefs, app.features);
}

/**
 * @param {NodeDef} node
 */
export function defNode(node) {
    NODES.push(node);
}

/**
 * @param {string} name
 * @param {Feature} feat
 */
export function defFeature(name, feat) {
    FEATURES.push([name, feat]);
}
