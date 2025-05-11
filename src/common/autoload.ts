import { LynxFlow } from "./flow";
import { AUTOSAVE_KEY, LOCAL_SAVE_KEY, LYNX_FILE_EXT } from "./constants";
import { base64ToBytes, parseWithMetadata, isEmbedded } from "./utils.js";
import { decompress } from './compress.js';

type LoaderResult = Promise<{
    title: string,
    source: string,
} | undefined>;
async function loadFromHash(): LoaderResult {
    if (location.hash === "") return;
    const source = await decompress(base64ToBytes(location.hash.slice(1)));
    return {
        source,
        title: isEmbedded() ? "New Flow" : "Shared Flow"
    };
}
async function loadFromLocalStorage(): LoaderResult {
    const params = new URLSearchParams(location.search);
    const key = params.get("saved");
    if (!localStorage.getItem(LOCAL_SAVE_KEY)) localStorage[LOCAL_SAVE_KEY] = "{}";
    const store = JSON.parse(localStorage[LOCAL_SAVE_KEY]);
    if (!key) return;
    if (!(key in store))
        throw new Error(`No save slot "${key}"`);
    const source = await decompress(base64ToBytes(store[key]));
    return {
        source,
        title: `Saved flow '${key}'`
    };
}
async function loadFromURL(): LoaderResult {
    const params = new URLSearchParams(location.search);
    const url = params.get("url");
    if (!url) return;
    const response = await fetch(url, { mode: "cors", cache: "reload" });
    if (response.status === 404)
        throw new Error(`Failed to fetch "${url}"`);
    const source = await response.text();
    return {
        source,
        title: `Linked flow from ${url}`
    };
}
async function loadFromExample(): LoaderResult {
    const params = new URLSearchParams(location.search);
    const key = params.get("example");
    if (!key) return;
    const response = await fetch(import.meta.resolve(`../examples/files/${key}${LYNX_FILE_EXT}`), { cache: "reload" });
    if (response.status === 404)
        throw new Error(`Failed to fetch example "${key}"`);
    const source = await response.text();
    return {
        source,
        title: `Example flow '${key}'`
    };
}
async function loadAutosaved(): LoaderResult {
    if (!localStorage[AUTOSAVE_KEY]) return;
    return {
        source: await decompress(base64ToBytes(localStorage[AUTOSAVE_KEY])),
        title: "Autosaved"
    };
}


const LOADERS: [() => LoaderResult, string][] = [
    [loadFromHash, "share hash"],
    [loadFromLocalStorage, "save slot"],
    [loadFromURL, "external URL"],
    [loadFromExample, "example"],
    [loadAutosaved, "autosaved app"]
];
export async function autoload(app: LynxFlow, nothingEl: HTMLElement) {
    const errors = [];
    for (var [loader, name] of LOADERS) {
        try {
            const val = await loader();
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

export async function autoloadString(): Promise<string> {
    const errors = [];
    for (var [loader, name] of LOADERS) {
        try {
            const val = await loader();
            if (val !== undefined && errors.length === 0)
                return val.source.replace(/\n?$/, "\n");
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
