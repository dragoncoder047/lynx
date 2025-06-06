import { LYNX_FILE_EXT, ONLINE_EXAMPLES_GH_ENDPOINT } from "./common/constants";
import { getMeta, Metadata } from "./common/getMetadata";
import { parseWithMetadata } from "./common/utils";
import meta from "../examples/meta.json";

export type Example = {
    filename: string;
    id: string;
} & Metadata;

export const EXAMPLES: Example[] = [];

type GithubAPIFileEntry = {
    name: string;
    path: string;
};

async function fetchFromGithub(): Promise<string[]> {
    const response: GithubAPIFileEntry[] | { status: "404" }
        = await fetch(ONLINE_EXAMPLES_GH_ENDPOINT)
            .then(response => response.json());
    if (!Array.isArray(response)) return [];
    return response.map((f: GithubAPIFileEntry) => f.name);
}

async function fetchFromPythonHTTPServer(): Promise<string[]> {
    const response = await fetch(import.meta.resolve("../examples/files/"));
    if (response.status === 404) return [];
    const links = Array.from(new DOMParser()
        .parseFromString(await response.text(), "text/html")
        .querySelectorAll("a[href]"));
    return links.map(link => link.textContent!);
}

const files = (await Promise.all(
    [
        fetchFromGithub(),
        fetchFromPythonHTTPServer()
    ]))
    .flat(1)
    .filter(name => name.endsWith(LYNX_FILE_EXT));

for (var filename of files) {
    const id = filename.replace(/\.[^/.]+$/, "");
    const meta = await fetch(
        import.meta.resolve(`../examples/files/${filename}`),
        { cache: "reload" })
        .then(resp => resp.text())
        // .then(text => (console.log(text), text))
        .then(text => parseWithMetadata(text))
        .then(forms => getMeta(forms));
    if (meta.hidden) continue;
    EXAMPLES.push({ filename, id, ...meta });
}

export const EXAMPLES_BY_CATEGORY = Object.groupBy(EXAMPLES, x => x.category);

export const CATEGORY_ORDER = Object.keys(EXAMPLES_BY_CATEGORY).sort((a, b) => {
    const aIdx = meta[a as keyof typeof meta]?.order;
    const bIdx = meta[b as keyof typeof meta]?.order;
    if (aIdx && bIdx) return aIdx - bIdx;
    if (aIdx) return -1;
    if (bIdx) return 1;
    return a.localeCompare(b);
});
