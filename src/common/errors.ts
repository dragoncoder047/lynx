import { WithMetadata } from "@jcubic/lips";
import { make } from "vanilla";

export enum ErrorSeverity {
    BAD_SYNTAX = 50,
    UNDEFINED_NAME = 30,
    BAD_CONN_SPEC = 20,
    TYPE_MISMATCH = 10,
    INPUT_CONFLICT = 0
}

export class LynxError extends Error {
    line: number;
    col: number;
    len: number;
    severity: number;
    constructor(message: string, severity: number, line: number, col: number, len: number = 1) {
        super(message);
        this.severity = severity;
        this.name = this.constructor.name;
        this.line = line;
        this.col = col;
        this.len = len;
    }
}

export class LynxMultiError extends LynxError {
    subErrors: LynxError[];
    constructor(subErrors: LynxError[]) {
        // @ts-ignore
        super(null, null, null, null, null);
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
    const len = (offending?.valueOf() as any)?.length ?? 1;
    const line = __line__ !== undefined ? __line__ + 1 : undefined;
    console.trace("Error ", message, "from line", line, "col", __col__, "length", len);
    return new LynxError(message, severity, line!, __col__!, len);
}

export function throwPosError(message: string, offending: WithMetadata, severity: number = 1): never {
    throw makePosError(message, offending, severity);
}

export function onlyWorstErrors(errors: LynxError[]): LynxError[] {
    const maxSev = Math.max(...errors.map(e => e.severity ?? 0));
    const onlySev = errors.filter(e => (e.severity ?? 0) === maxSev);
    return onlySev;
}
