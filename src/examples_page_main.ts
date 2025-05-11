import { get, html, make } from "vanilla";
import { EXAMPLES, type Example } from "./examples";

const exDiv = get("#examples-container")!;

const grouped = Object.groupBy(EXAMPLES, (x: Example) => x.category);

for (var category of Object.keys(grouped).sort()) {
    const exs = grouped[category]!;
    exDiv.append(make("h3", { id: "category-" + category.toLowerCase().replaceAll(" ", "-") }, category));
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
            exDL.append(make("dd", {}, html(ex.description)));
        }
    }
}
