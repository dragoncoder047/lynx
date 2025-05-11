import { type Pair, env, LSymbol } from "../lipsShim";
import { METADATA_NAME_RE } from "./constants";

export type Metadata = {
    title: string | undefined;
    category: string;
    author: string | undefined;
    "author-url": string | undefined;
    version: string | undefined;
    description: string | undefined;
    hidden?: boolean;
} & Record<string, number | string | boolean | undefined>;

export function getMeta(forms: Pair[]): Metadata {
    const out: Metadata = {
        title: undefined,
        category: "Uncategorized",
        author: undefined,
        "author-url": undefined,
        version: undefined,
        description: undefined,
    };
    const toArray = env.get("list->array") as (list: Pair) => any[];
    for (var form of forms) {
        const formA = toArray(form);
        if (
            formA.length === 3
            && LSymbol.is(formA[0], "define")
            && formA[1] instanceof LSymbol) {
            const key = formA[1].__name__;
            const match = METADATA_NAME_RE.exec(key);
            if (match === null) continue;
            out[match[1]! as keyof Metadata] = formA[2]!.valueOf();
        }
    }
    return out;
}