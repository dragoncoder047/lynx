import { Feature } from "./feature";
import { LynxFlow } from "./flow";
import { LynxNode } from "./node";
import { Generic, TypeMap, TypeSpec } from "./types";

interface UpdateArg<IPN extends string, OPN extends string, G extends Generic, SK extends string> {
    readonly app: LynxFlow;
    readonly node: LynxNode<IPN, OPN, G, SK> & { def: NodeDef<IPN, OPN, G, SK> };
    readonly changes: Partial<Record<IPN, any>>;
}

interface TickArg<IPN extends string, OPN extends string, G extends Generic, SK extends string> {
    readonly app: LynxFlow;
    readonly node: LynxNode<IPN, OPN, G, SK> & { def: NodeDef<IPN, OPN, G, SK> };
    readonly dt: number;
}

interface SetupArg<IPN extends string, OPN extends string, G extends Generic, SK extends string> {
    readonly app: LynxFlow;
    readonly node: LynxNode<IPN, OPN, G, SK> & { def: NodeDef<IPN, OPN, G, SK> };
    readonly features: Record<string, Feature>;
    readonly args: any[];
}

interface ConnectArg<IPN extends string, OPN extends string, G extends Generic, SK extends string> {
    readonly app: LynxFlow;
    readonly nodeFrom: LynxNode<IPN, OPN, G, SK> & { def: NodeDef<IPN, OPN, G, SK> };
    readonly outFrom: OPN;
    readonly nodeTo: LynxNode;
    readonly inTo: string;
    readonly busNOut: number | undefined;
    readonly busNIn: number | undefined;
}

export interface NodeDef<IPN extends string = any, OPN extends string = any, G extends Generic = any, SK extends string = any> {
    readonly id: string;
    readonly category?: string;
    readonly template?: Record<G, TypeSpec[]>;
    readonly features?: string[];
    readonly inputs: Record<IPN, Port<any>>;
    readonly outputs: Record<OPN, Port<any>>;
    readonly argTypes?: TypeSpec[];
    readonly stateKeys?: SK[];
    readonly paramDoc?: string;
    readonly update?: (arg: UpdateArg<IPN, OPN, G, SK>) => (void | Promise<void>);
    readonly tick?: (arg: TickArg<IPN, OPN, G, SK>) => (void | Promise<void>);
    readonly setup?: (arg: SetupArg<IPN, OPN, G, SK>) => (void | Promise<void>);
    readonly connect?: (arg: ConnectArg<IPN, OPN, G, SK>) => (void | Promise<void>);
    readonly doc: string;
}

export type TypeNameToType<T> = T extends keyof TypeMap ? TypeMap[T] : T extends (keyof TypeMap)[] ? TypeMap[T[number]] : any;

type PortFlag = "silent" | "bus" | "paramOnly" | "eventReceiver";
export class Port<const T extends TypeSpec | Generic = any> {
    readonly type: T;
    readonly initialVal: TypeNameToType<T> | TypeNameToType<T>[];
    readonly flags: PortFlag[];
    constructor(type: T, initialVal: TypeNameToType<T> | TypeNameToType<T>[], flags: PortFlag[] = []) {
        this.type = type;
        this.initialVal = initialVal;
        this.flags = flags;
    }
    is(pf: PortFlag): boolean {
        return this.flags.includes(pf);
    }
}
