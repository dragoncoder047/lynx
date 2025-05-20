import { Feature } from "../common/feature";
import { LynxFlow } from "../common/flow";
import { NodeDef } from "../common/nodeDef";
import { Generic } from "../common/types";

export const modulesReady = Promise.all([
    import("./basic"),
    import("./flow_control"),
    import("./html"),
    import("./converters"),
    import("./random"),
    import("./features/gps"),
    import("./features/unsafe"),
    import("./electronics/clock"),
    import("./electronics/logic"),
    import("./electronics/latches"),
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

export function defNode<IPN extends string, OPN extends string, G extends Generic, SK extends string>(node: NodeDef<IPN, OPN, G, SK>) {
    NODES.push(node as any);
}

export function defFeature(name: string, feat: Feature) {
    FEATURES.push([name, feat]);
}
