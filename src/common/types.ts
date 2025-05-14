import { LBigInteger, LNumber, LString, LSymbol } from "../lipsShim";
import { Color, Point } from "./otherTypes";

export type TypeMap = {
    signal: undefined;
    number: number | bigint | LNumber,
    bigint: number | bigint | LBigInteger;
    string: string | LString;
    symbol: symbol | LSymbol;
    boolean: boolean;
    color: Color,
    point: Point,
    audio: AudioNode,
} & Record<string, any>;

export type SingleType = keyof TypeMap;

export function typeOf(obj: any): SingleType | "unknown" {
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

export function getGroundTypes(type: TypeSpec): TypeSpec[] {
    if (type === "any") return ["number", "bigint", "string", "symbol", "boolean", "color", "point"];
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
    return output === input;
}

