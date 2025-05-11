import { LynxFlow } from './flow.js';
import { AUTOSAVE_KEY, LOCAL_SAVE_KEY, LYNX_FILE_EXT } from './constants.js';
import { base64ToBytes, parseWithMetadata, isEmbedded } from './utils.js';
import { decompress } from './compress.js';
async function loadFromHash(isString) {
    if (location.hash === "") return;
    const source = await decompress(base64ToBytes(location.hash.slice(1)));
    if (isString)
        return source;
    return {
        def: await parseWithMetadata(source),
        title: isEmbedded() ? "New Flow" : "Shared Flow"
    };
}
async function loadFromLocalStorage(isString) {
    const params = new URLSearchParams(location.search);
    const key = params.get("saved");
    if (!localStorage.getItem(LOCAL_SAVE_KEY)) localStorage[LOCAL_SAVE_KEY] = "{}";
    const store = JSON.parse(localStorage[LOCAL_SAVE_KEY]);
    if (!key) return;
    if (!(key in store))
        throw new Error(`No save slot "${key}"`);
    const source = await decompress(base64ToBytes(store[key]));
    if (isString)
        return source;
    return {
        def: await parseWithMetadata(source),
        title: `Saved flow '${key}'`
    };
}
async function loadFromURL(isString) {
    const params = new URLSearchParams(location.search);
    const url = params.get("url");
    if (!url) return;
    const response = await fetch(url, { mode: "cors", cache: "reload" });
    if (response.status === 404)
        throw new Error(`Failed to fetch "${url}"`);
    const source = await response.text();
    if (isString)
        return source;
    return {
        def: await parseWithMetadata(source),
        title: `Linked flow from ${url}`
    };
}
async function loadFromExample(isString) {
    const params = new URLSearchParams(location.search);
    const key = params.get("example");
    if (!key) return;
    const response = await fetch(import.meta.resolve(`../examples/files/${key}${LYNX_FILE_EXT}`), { cache: "reload" });
    if (response.status === 404)
        throw new Error(`Failed to fetch example "${key}"`);
    const source = await response.text();
    if (isString)
        return source;
    return {
        def: await parseWithMetadata(source),
        title: `Example flow '${key}'`
    };
}
async function loadAutosaved(isString) {
    if (!isString) return;
    if (!localStorage[AUTOSAVE_KEY]) return;
    return await decompress(base64ToBytes(localStorage[AUTOSAVE_KEY]));
}

/**
 * @type {[(((isString: true) => Promise<string | undefined>) | ((isString: false) => Promise<undefined | {def: lips.Pair[]; title: string}>)), string][]}
 */
const LOADERS = [
    [loadFromHash, "share hash"],
    [loadFromLocalStorage, "save slot"],
    [loadFromURL, "external URL"],
    [loadFromExample, "example"],
    [loadAutosaved, "autosaved app"]
];

/**
 * @param {LynxFlow} app
 * @param {any} nothingEl
 * @returns {Promise<{def: lips.Pair[]; title: string}>}
 */
export async function autoload(app, nothingEl) {
    const errors = [];
    for (var [loader, name] of LOADERS) {
        try {
            const val = await loader(false);
            if (val !== undefined && errors.length === 0)
                return val;
        } catch (e) {
            console.error(e);
            app.error(name + ": " + e);
            errors.push(e);
        }
    }
    if (errors.length === 0) {
        app.addUI(nothingEl);
        app.setTitle("Nothing to see here");
    }
    throw "Stop.";
}

/**
 * @returns {Promise<string>}
 */
export async function autoloadString() {
    const errors = [];
    for (var [loader, name] of LOADERS) {
        try {
            const val = await loader(true);
            if (val !== undefined && errors.length === 0)
                return val.replace(/\n?$/, "\n");
        } catch (e) {
            console.error(e);
            errors.push(`;; ${name}: ${e}`);
        }
    }
    if (errors.length > 0) {
        errors.unshift(";;");
        errors.unshift(";; ERROR");
    }
    return errors.join("\n") + "\n";
}
