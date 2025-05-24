import { get, html, make } from "vanilla";
import meta from "../examples/meta.json";
import { CATEGORY_ORDER, EXAMPLES_BY_CATEGORY } from "./examples";
import { markdownToHTML } from "./markedShim";

const exDiv = get("#examples-container")!;

for (const category of CATEGORY_ORDER) {
    const exs = EXAMPLES_BY_CATEGORY[category] || [];
    if (!exs.length) continue;
    const catMeta = meta[category as keyof typeof meta];
    exDiv.append(
        make("h3", { id: "category-" + category.toLowerCase().replaceAll(" ", "-") }, category));
    if (catMeta?.description) {
        exDiv.append(make("p", {}, html(markdownToHTML(catMeta.description))));
    }
    const exDL = make("dl");
    exDiv.append(exDL);
    for (var ex of exs) {
        const inner: (Node | string)[] = [
            make("strong", {},
                make("a", { href: `../runner?example=${ex.id}` },
                    ex.title ?? ex.id)),
        ];
        if (ex.version) {
            inner.push(make("code", {}, ` v${ex.version}`));
        }
        inner.push(
            " (",
            make(
                "a",
                { href: `../editor?example=${ex.id}` },
                "edit"),
            ")"
        );
        if (ex.author || ex["author-url"]) {
            inner.push(make("em", {}, " by "));
            const text = ex.author || ex["author-url"];
            if (ex["author-url"]) {
                inner.push(make("a", { href: ex["author-url"], target: "_blank" }, text!));
            } else inner.push(text!);
        }
        exDL.append(make("dt", {}, ...inner));
        if (ex.description) {
            exDL.append(make("dd", {}, html(markdownToHTML(ex.description))));
        }
    }
}
