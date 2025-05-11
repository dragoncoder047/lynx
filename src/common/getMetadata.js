import { METADATA_NAME_RE } from './constants.js';

/**
 * @param {lips.Pair[]} forms
 * @returns {Promise<Record<string, any>>}
 */
export async function getMeta(forms) {
    const out = {
        title: undefined,
        category: "Uncategorized",
        author: undefined,
        "author-url": undefined,
        version: undefined,
        description: undefined,
    };
    const toArray = lips.env.get("list->array");
    for (var form of forms) {
        form = toArray(form);
        if (
            form.length === 3
            && lips.LSymbol.is(form[0], "define")
            && form[1] instanceof lips.LSymbol) {
            const key = form[1].__name__;
            const match = METADATA_NAME_RE.exec(key);
            if (match === null) continue;
            out[match[1]] = form[2].valueOf();
        }
    }
    return out;
}