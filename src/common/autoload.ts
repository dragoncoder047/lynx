import { decompress } from "./compress";
import { AUTOSAVE_KEY, LOCAL_SAVE_KEY, LYNX_FILE_EXT } from "./constants";
import { LynxFlow } from "./flow";
import { base64ToBytes, isEmbedded } from "./utils.js";

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
    var response: Response;
    try {
        response = await fetch(url, { mode: "cors", cache: "reload", redirect: "follow" });
    } catch (_) {
        throw new Error(`"${url}" failed to fetch`);
    }
    if (!response.ok)
        throw new Error(`"${url}" got a ${response.status} (${response.statusText})`);
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
async function loadAutosaved(allowAutosaved: boolean): LoaderResult {
    if (!allowAutosaved || !localStorage[AUTOSAVE_KEY]) return;
    return {
        source: await decompress(base64ToBytes(localStorage[AUTOSAVE_KEY])),
        title: "Autosaved"
    };
}


const LOADERS: [(allowAutosave: boolean) => LoaderResult, string][] = [
    [loadFromHash, "share hash"],
    [loadFromLocalStorage, "save slot"],
    [loadFromURL, "external URL"],
    [loadFromExample, "example"],
    [loadAutosaved, "autosaved app"]
];
export async function autoload(app: LynxFlow, nothingEl: HTMLElement) {
    const errors: [any, string][] = [];
    for (var [loader, name] of LOADERS) {
        try {
            const val = await loader(false);
            if (val !== undefined && errors.length === 0)
                return val;
        } catch (e) {
            console.error(e);
            errors.push([e, name]);
        }
    }
    if (errors.length === 0) {
        app.addUI(nothingEl);
        app.setTitle("Nothing to see here");
    } else {
        for (var [err, name] of errors) {
            app.error(name + ": " + err, -1);
        }
    }
    throw "Stop.";
}

export async function autoloadString(): Promise<string> {
    const errors: string[] = [];
    for (var [loader, name] of LOADERS) {
        try {
            const val = await loader(true);
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
