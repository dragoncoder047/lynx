import { get, html, make } from "vanilla";
import { EXAMPLES } from "./examples";
import meta from "../examples/meta.json";
import { markdownToHTML } from "./markedShim";

const exDiv = get("#examples-container")!;

const grouped = Object.groupBy(EXAMPLES, x => x.category);

// Get all category names, with meta.json order first, then the rest alphabetically

const allCategories = Object.keys(grouped).sort((a, b) => {
    const aIdx = meta[a as keyof typeof meta]?.order;
    const bIdx = meta[b as keyof typeof meta]?.order;
    if (aIdx && bIdx) return aIdx - bIdx;
    if (aIdx) return -1;
    if (bIdx) return 1;
    return a.localeCompare(b);
});

for (const category of allCategories) {
    const exs = grouped[category] || [];
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
