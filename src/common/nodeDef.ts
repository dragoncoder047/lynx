import { Feature } from "./feature";
import { LynxFlow } from "./flow";
import { LynxNode } from "./node";
import { Port } from "./port";
import { TypeSpec } from "./utils.js";

interface UpdateArg {
    app: LynxFlow;
    node: LynxNode;
    changes: Record<string, any>;
}

interface TickArg {
    app: LynxFlow;
    node: LynxNode;
}

interface SetupArg {
    app: LynxFlow;
    node: LynxNode;
    params: Array<any>;
    features: Record<string, Feature>;
}

interface ConnectArg {
    app: LynxFlow;
    nodeFrom: LynxNode;
    outFrom: string;
    nodeTo: LynxNode;
    inTo: string;
    busNOut: number | undefined;
    busNIn: number | undefined;
}

export interface NodeDef {
    id: string
    generics?: Record<string, number>
    template?: Record<string, TypeSpec>
    features?: string[]
    inputs: Port[]
    outputs: Port[]
    argTypes?: TypeSpec[]
    update?: (arg: UpdateArg) => (void | Promise<void>)
    tick?: (arg: TickArg) => (void | Promise<void>)
    setup?: (arg: SetupArg) => (void | Promise<void>)
    connect?: (arg: ConnectArg) => (void | Promise<void>)
    doc: string
}
