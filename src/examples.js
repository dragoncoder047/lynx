import { LYNX_FILE_EXT, ONLINE_EXAMPLES_GH_ENDPOINT } from './common/constants.js';
import { getMeta } from './common/getMetadata.js';

export const EXAMPLES = [];

/**
 * @returns {Promise<string[]>}
 */
async function fetchFromGithub() {
    const response = await fetch(ONLINE_EXAMPLES_GH_ENDPOINT)
        .then(response => response.json());
    if (response.status === "404") return [];
    return response.map(f => f.name);
}
/**
 * @returns {Promise<string[]>}
 */
async function fetchFromPythonHTTPServer() {
    const response = await fetch(import.meta.resolve("./files/"));
    if (response.status === 404) return [];
    const links = Array.from(new DOMParser()
        .parseFromString(await response.text(), "text/html")
        .querySelectorAll("a[href]"));
    return links.map(link => link.textContent);
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
        import.meta.resolve(`./files/${filename}`),
        { cache: "reload" })
        .then(resp => resp.text())
        // .then(text => (console.log(text), text))
        .then(text => lips.parse(text))
        .then(forms => getMeta(forms));
    if (meta.hidden) continue;
    EXAMPLES.push({ filename, id, ...meta });
}
