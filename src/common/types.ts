import { LBigInteger, LNumber, LString, LSymbol } from "../lipsShim";
import { Color, Point } from "./otherTypes";

const CONSTRUCTORS = {
    bigint: LBigInteger,
    number: LNumber,
    string: LString,
    symbol: LSymbol,
    boolean: Boolean,
    color: Color,
    point: Point,
    audio: AudioNode,
    "html-element": HTMLElement,
};

type _pTypeMap = {
    signal: undefined,
    number: number | bigint,
    bigint: number | bigint,
    string: string,
    symbol: symbol,
    boolean: boolean,
};
export type TypeMap = {
    [k in keyof typeof CONSTRUCTORS]: InstanceType<typeof CONSTRUCTORS[k]> | (k extends keyof _pTypeMap ? _pTypeMap[k] : never)
} & Record<string, any>;

export type SingleType = keyof TypeMap;
export function typeOf(obj: any): SingleType | "unknown" {
    if (obj === undefined || obj === null) return "signal";
    if (typeof obj !== "object") return typeof obj;
    for (const [type, constructor] of Object.entries(CONSTRUCTORS)) {
        if (obj instanceof constructor) {
            return type as SingleType;
        }
    }
    return "unknown";
}

export function fixTypeOf(obj: any): { fixedVal: any, realType: SingleType } {
    const color_regex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;
    if (typeof obj === "string") {
        const res = color_regex.exec(obj);
        if (res) {
            const [, r, g, b] = res;
            return { fixedVal: new Color(parseInt(r!, 16), parseInt(g!, 16), parseInt(b!, 16)), realType: "color" };
        }
    }
    return { fixedVal: obj, realType: typeOf(obj) };
}

export function getGroundTypes(type: TypeSpec): TypeSpec[] {
    if (type === "any") return ["number", "bigint", "string", "symbol", "boolean", "color", "point", "html-element", "audio", "signal"];
    if (type === "number") return ["number", "bigint", "boolean"]
    return [type];
}

export type TypeSpec = SingleType | SingleType[] | "any";

export type UpperLetter = "Q" | "W" | "E" | "R" | "T" | "Y" | "U" | "I" | "O" | "P" | "A" | "S" | "D" | "F" | "G" | "H" | "J" | "K" | "L" | "Z" | "X" | "C" | "V" | "B" | "N" | "M";
export type Generic = `${UpperLetter}${string}`;

export function canConnect(output: TypeSpec, input: TypeSpec): boolean {
    if (input === "any") return true;
    else if (Array.isArray(input)) {
        if (Array.isArray(output)) return output.every(t => input.includes(t));
        else return input.includes(output);
    }
    else if (Array.isArray(output)) return false;
    // special case for numbers
    if (input === "number" && output === "bigint") return true;
    return output === input;
}

