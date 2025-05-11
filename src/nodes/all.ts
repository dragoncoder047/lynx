import { LynxFlow } from "../common/flow";
import { Feature } from "../common/feature";
import { NodeDef } from "../common/nodeDef";

export const modulesReady = Promise.all([
    import("./flow"),
    import("./html"),
    import("./simple"),
    import("./converters"),
    import("./random"),
    import("./features/gps"),
    import("./features/unsafe"),
    import("./electronics/clock"),
]);

export const NODES: NodeDef[] = [];
export const FEATURES: [string, Feature][] = [];

export async function loadAllNodes(app: LynxFlow) {
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

export function defNode(node: NodeDef) {
    NODES.push(node);
}

export function defFeature(name: string, feat: Feature) {
    FEATURES.push([name, feat]);
}
