import { Color, Point } from './otherTypes.js';
import { Port, Bus } from './port.js';

export function base64ToBytes(base64) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

export function bytesToBase64(buffer) {
    return btoa(String.fromCharCode.apply(null, buffer));
}

/**
 * @param {any} obj
 */
export function typeOf(obj) {
    if (obj === undefined || obj === null) return "signal";
    if (typeof obj !== "object") return typeof obj;
    if (obj instanceof AudioNode) return "audio";
    if (obj instanceof Color) return "color";
    if (obj instanceof Point) return "point";
    // special cases for LIPS boxed data
    if (obj instanceof lips.LNumber) return "number";
    if (obj instanceof lips.LString) return "string";
    if (obj instanceof lips.LSymbol) return "symbol";
    return "unknown";
}

/**
 * @typedef {Exclude<ReturnType<typeof typeOf>, "unknown"> | Exclude<ReturnType<typeof typeOf>, "unknown">[] | "any"} TypeSpec
 */

/**
 * @param {any} obj
 * @param {TypeSpec} typeSpec
 * @returns {boolean}
 */
export function typeMatches(obj, typeSpec) {
    if (typeSpec === "any") return true;
    if (Array.isArray(typeSpec)) return typeSpec.some(t => typeMatches(obj, t));
    return typeOf(obj) === typeSpec;
}

/**
 * @param {Port} portOut
 * @param {Port} portIn
 * @param {NodeDef} var1
 * @param {NodeDef} var2
 * @returns {"yes" | "no" | "selectOut" | "selectIn"}
 */
export function canConnect(portOut, portIn, var1, var2) {
    const typeOut = portOut.type;
    const typeIn = portIn.type;
    var typeMatches = false;
    if (typeIn === "any") typeMatches = true;
    else if (Array.isArray(typeIn)) {
        if (Array.isArray(typeOut)) typeMatches = typeOut.every(t => typeIn.includes(t));
        else typeMatches = typeIn.includes(typeOut);
    }
    else if (Array.isArray(typeOut)) typeMatches = false;
    else typeMatches = typeOut === typeIn;
    if (!typeMatches) return "no";
    if (portOut instanceof Bus && !(portIn instanceof Bus)) return "selectIn";
    if (portIn instanceof Bus && !(portOut instanceof Bus)) return "selectOut";
    return "yes";
}

/**
 * @param {lips.Pair} tree
 * @param {(value: any) => Promise<any>} cb
 */
export async function walk(tree, cb) {
    var stack = [tree];
    while (stack.length > 0) {
        const current = stack.pop();
        if (!(current.cdr instanceof lips.Pair)) {
            current.cdr = await cb(current.cdr);
        } else stack.push(current.cdr);
        if (!(current.car instanceof lips.Pair)) {
            current.car = await cb(current.car);
        } else stack.push(current.car);
    }
}


export class LynxError extends Error {
    /**
     * @type number
     */
    line
    /**
     * @type number
     */
    col
    /**
     * @type number
     */
    len
    /**
     * @type number
     */
    severity
    /**
     * @param {string} message
     * @param {number} severity
     * @param {number} line
     * @param {number} col
     * @param {number} len
     */
    constructor(message, severity, line, col, len = 1) {
        super(message);
        this.severity = severity;
        this.name = this.constructor.name;
        this.line = line;
        this.col = col;
        this.len = len;
    }
}

export class LynxMultiError extends Error {
    /**
     * @type {LynxError[]}
     */
    subErrors
    constructor(subErrors) {
        super();
        this.subErrors = subErrors;
    }
}

/**
 * @param {lips.LSymbol} offending
 * @param {string} message
 * @param {number} [severity=1]
 * @returns {LynxError}
 */
export function makePosError(message, offending, severity = 1) {
    const { __line__, __col__ } = offending;
    const len = offending.valueOf().length;
    const line = __line__ !== undefined ? __line__ + 1 : undefined;
    console.trace("Error is at line", line, "col", __col__, "length", len);
    return new LynxError(message, severity, line, __col__, len);
}

/**
 * @param {lips.LSymbol} offending
 * @param {string} message
 * @param {number} [severity=1]
 * @returns {never}
 */
export function throwPosError(message, offending, severity = 1) {
    throw makePosError(message, offending, severity);
}

/**
 * @param {string} source
 * @returns {Promise<lips.Pair[]>}
 */
export async function parseWithMetadata(source) {
    const parser = new lips.Parser({ env: lips.env, meta: true });
    parser.prepare(source);
    return await lips.parse(parser);
}

/**
 * @returns {boolean}
 */
export function isEmbedded() {
    return window.self !== window.top;
}
