import { Feature } from "./feature";
import { LynxFlow } from "./flow";
import { LynxNode } from "./node";
import { Generic, TypeMap, TypeSpec } from "./types";

interface UpdateArg<IPN extends string, OPN extends string, G extends Generic, SK extends string> {
    app: LynxFlow;
    node: LynxNode<IPN, OPN, G, SK> & { def: NodeDef<IPN, OPN, G, SK> };
    changes: Partial<Record<IPN, any>>;
}

interface TickArg<IPN extends string, OPN extends string, G extends Generic, SK extends string> {
    app: LynxFlow;
    node: LynxNode<IPN, OPN, G, SK> & { def: NodeDef<IPN, OPN, G, SK> };
}

interface SetupArg<IPN extends string, OPN extends string, G extends Generic, SK extends string> {
    app: LynxFlow;
    node: LynxNode<IPN, OPN, G, SK> & { def: NodeDef<IPN, OPN, G, SK> };
    features: Record<string, Feature>;
}

interface ConnectArg<IPN extends string, OPN extends string, G extends Generic, SK extends string> {
    app: LynxFlow;
    nodeFrom: LynxNode<IPN, OPN, G, SK> & { def: NodeDef<IPN, OPN, G, SK> };
    outFrom: OPN;
    nodeTo: LynxNode;
    inTo: string;
    busNOut: number | undefined;
    busNIn: number | undefined;
}

export interface NodeDef<IPN extends string = any, OPN extends string = any, G extends Generic = any, SK extends string = any> {
    id: string
    template?: Record<G, TypeSpec[]>
    features?: string[]
    inputs: Record<IPN, Port<any, boolean>>
    outputs: Record<OPN, Port<any, false>>
    argTypes?: TypeSpec[],
    stateKeys?: SK[],
    update?: (arg: UpdateArg<IPN, OPN, G, SK>) => (void | Promise<void>)
    tick?: (arg: TickArg<IPN, OPN, G, SK>) => (void | Promise<void>)
    setup?: (arg: SetupArg<IPN, OPN, G, SK>) => (void | Promise<void>)
    connect?: (arg: ConnectArg<IPN, OPN, G, SK>) => (void | Promise<void>)
    doc: string;
}

export type TypeNameToType<T> = T extends keyof TypeMap ? TypeMap[T] : T extends (keyof TypeMap)[] ? TypeMap[T[number]] : any;

export class Port<const T extends TypeSpec | Generic = any, P extends boolean = boolean> {
    type: T;
    initialVal: TypeNameToType<T>;
    paramOnly: P;
    silent: boolean;
    constructor(type: T, initialVal: TypeNameToType<T>, silent: boolean = false, paramOnly?: P) {
        this.type = type;
        this.paramOnly = paramOnly!;
        this.initialVal = initialVal;
        this.silent = silent;
    }
}

export class Bus<const T extends TypeSpec | Generic = any> extends Port<T, false> {
    // @ts-expect-error
    initialVal: TypeNameToType<T>[];
    constructor(type: T, initialVal: TypeNameToType<T>[], silent?: boolean) {
        super(type, initialVal as any, silent);
    }
}
