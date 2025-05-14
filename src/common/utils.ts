import { env, FixedParser, LString, Pair, parse } from "../lipsShim";

export const consToArray = env.get<(x: Pair) => any[]>("list->array");
export const repr = (x: any) => env.get<(fmt: string, ...args: any[]) => LString>("format")("~s", x);

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

export async function parseWithMetadata(source: string): Promise<Pair[]> {
    const parser = new FixedParser({ env, meta: true });
    parser.prepare(source);
    return await parse(parser);
}

export function isEmbedded(): boolean {
    return window.self !== window.top;
}
