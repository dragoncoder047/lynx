import { marked } from "marked";
import { get } from "vanilla";

const elToRender = get(".markdown")!;

// preprocess to remove indentation
const unindented = elToRender.textContent!;

const lines = unindented.split("\n");
const indentsByLine = lines.map(x => /^\s*$/.test(x) ? Infinity : (/^\s*/.exec(x))![0].length);
const minIndent = Math.min(...indentsByLine);
const theMarkdown = lines.map(line => line.slice(minIndent)).join("\n");

// render it
elToRender.innerHTML = marked.parse(theMarkdown, { async: false });
