import { make } from "vanilla";
import { env, LNumber, LString, LSymbol, Pair, parse, Parser, WithMetadata } from "../lipsShim";
import { Color, Point } from "./otherTypes";
import { Bus, Port } from "./port";


export const consToArray = env.get<(x: Pair) => any[]>("list->array");

export function base64ToBytes(base64: string): Uint8Array {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

export function bytesToBase64(buffer: Uint8Array): string {
    return btoa(String.fromCharCode.apply(null, buffer as any));
}

export function typeOf(obj: any) {
    if (obj === undefined || obj === null) return "signal";
    if (typeof obj !== "object") return typeof obj;
    if (obj instanceof AudioNode) return "audio";
    if (obj instanceof Color) return "color";
    if (obj instanceof Point) return "point";
    // special cases for LIPS boxed data
    if (obj instanceof LNumber) return "number";
    if (obj instanceof LString) return "string";
    if (obj instanceof LSymbol) return "symbol";
    return "unknown";
}

export type TypeSpec = Exclude<ReturnType<typeof typeOf>, "unknown"> | Exclude<ReturnType<typeof typeOf>, "unknown">[] | "any";

export function typeMatches(obj: any, typeSpec: TypeSpec): boolean {
    if (typeSpec === "any") return true;
    if (Array.isArray(typeSpec)) return typeSpec.some(t => typeMatches(obj, t));
    return typeOf(obj) === typeSpec;
}

export function canConnect(portOut: Port, portIn: Port): "yes" | "no" | "selectOut" | "selectIn" {
    const typeOut = portOut.type;
    const typeIn = portIn.type;
    var typeMatches = false;
    if (typeIn === "any") typeMatches = true;
    else if (Array.isArray(typeIn)) {
        if (Array.isArray(typeOut)) typeMatches = typeOut.every(t => typeIn.includes(t));
        else typeMatches = (typeIn as (TypeSpec | "any")[]).includes(typeOut);
    }
    else if (Array.isArray(typeOut)) typeMatches = false;
    else typeMatches = typeOut === typeIn;
    if (!typeMatches) return "no";
    if (portOut instanceof Bus && !(portIn instanceof Bus)) return "selectIn";
    if (portIn instanceof Bus && !(portOut instanceof Bus)) return "selectOut";
    return "yes";
}

export async function walk(tree: Pair, cb: (value: any) => Promise<any>) {
    var stack = [tree];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current === undefined) continue;
        if (!(current.cdr instanceof Pair)) {
            current.cdr = await cb(current.cdr);
        } else stack.push(current.cdr);
        if (!(current.car instanceof Pair)) {
            current.car = await cb(current.car);
        } else stack.push(current.car);
    }
}


export class LynxError extends Error {
    /**
     * @type number
     */
    line: number
    /**
     * @type number
     */
    col: number
    /**
     * @type number
     */
    len: number
    /**
     * @type number
     */
    severity: number
    /**
     * @param {string} message
     * @param {number} severity
     * @param {number} line
     * @param {number} col
     * @param {number} len
     */
    constructor(message: string, severity: number, line: number, col: number, len: number = 1) {
        super(message);
        this.severity = severity;
        this.name = this.constructor.name;
        this.line = line;
        this.col = col;
        this.len = len;
    }
}

export class LynxMultiError extends Error {
    subErrors: LynxError[]
    constructor(subErrors: LynxError[]) {
        super();
        this.subErrors = subErrors;
    }
}

export function toError(name: string, err: Error): HTMLElement {
    const f = err instanceof LynxError && err.line !== undefined && err.col !== undefined
        ? `(${err.line}:${err.col}) ` : "";
    return make("p", { class: "error" }, name, f, err.message);
}
export function makePosError(message: string, offending: WithMetadata, severity: number = 1): LynxError {
    const { __line__, __col__ } = offending;
    const len = (offending.valueOf() as any).length;
    const line = __line__ !== undefined ? __line__ + 1 : undefined;
    console.trace("Error is at line", line, "col", __col__, "length", len);
    return new LynxError(message, severity, line!, __col__!, len);
}

export function throwPosError(message: string, offending: WithMetadata, severity: number = 1): never {
    throw makePosError(message, offending, severity);
}

export async function parseWithMetadata(source: string): Promise<Pair[]> {
    const parser = new Parser({ env, meta: true });
    parser.prepare(source);
    return await parse(parser);
}

export function isEmbedded(): boolean {
    return window.self !== window.top;
}
