import { marked, type MarkedOptions } from "marked";

const options: MarkedOptions = {
    gfm: true
};

function dedent(markdown: string): string {
    const lines = markdown.split("\n");
    const indentsByLine = lines.map(x => /^\s*$/.test(x) ? Infinity : (/^\s*/.exec(x))?.[0].length ?? Infinity);
    // ignore the first line in case it is completely unindented
    const minIndent_rest = Math.min(...indentsByLine.slice(1));
    const minIndent_regexp = new RegExp(`^\\s{0,${minIndent_rest}}`);
    const ret = lines.map(line => line.replace(minIndent_regexp, "")).join("\n");
    console.log(indentsByLine, ret);
    return ret;
}

export function markdownToHTML(markdown: string): string {
    return marked.parse(dedent(markdown), { ...options, async: false });
}
