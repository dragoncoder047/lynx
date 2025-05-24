import { marked } from "marked";
import { get, html, make } from "vanilla";
import { Feature } from "./common/feature";
import { NodeDef } from "./common/nodeDef";
import { repr } from "./common/utils";
import { FEATURES, modulesReady, NODES } from "./nodes/all";
import { markdownToHTML } from "./markedShim";

await modulesReady;

const featuresContainer = get("#features-container")!;
const nodesContainer = get("#nodes-container")!;

const FEATURE_ID_PREFIX = "feat-";
const NODE_ID_PREFIX = "node-";
const CATEGORY_ID_PREFIX = "category-";

const MAX_NUM_ENTRIES = 6;

function renderPortsTable(ports: Record<string, any>, label: string) {
    const entries = Object.entries(ports);
    if (entries.length === 0) return null;
    const numRows = Math.ceil(entries.length / MAX_NUM_ENTRIES);
    const table = make("table");
    for (var row = 0; row < numRows; row++) {
        const start = row * MAX_NUM_ENTRIES;
        const chunk = entries.slice(start, start + MAX_NUM_ENTRIES);
        const tr = make("tr");
        if (row === 0) {
            tr.append(make("th", { rowspan: String(numRows) }, label));
        }
        for (const [name, port] of chunk) {
            const b = port.is("bus") ? ", bussed" : "";
            tr.append(
                make("td", {},
                    make("div", {},
                        make("code", {}, `:${name}`),
                        " (", port.type as string, b, ")"),
                    ...(port.type === "signal" ? [] : [make("div", {},
                        "default: ", make("code", {}, repr(port.initialVal).toString()))])
                )
            );
        }
        table.append(tr);
    }
    return table;
}

function docNode(def: NodeDef, list: HTMLUListElement, fStore: Record<string, Set<string>>) {
    const li = make("li");
    list.append(li);
    li.append(make("p", {},
        make("code", {},
            "(", def.id,
            ...(def.paramDoc ? [" ", def.paramDoc] : Object.entries(def.inputs).flatMap(([name, val]) => val.is("paramOnly") ? [` :${name} <${val.type}>`] : [])),
            ")")));
    if (def.features) {
        li.append(make("p", {},
            "Uses features ", ...def.features.flatMap(f => [", ",
                make("a", { href: `#${FEATURE_ID_PREFIX}${encodeURIComponent(f)}` },
                    make("strong", {}, make("em", {},
                        make("code", {}, f))))].slice(1))));
        for (var f of def.features) {
            fStore[f] ??= new Set;
            fStore[f]!.add(def.id);
        }
    }
    const inTable = renderPortsTable(def.inputs, "Inputs");
    if (inTable) li.append(inTable);
    const outTable = renderPortsTable(def.outputs, "Outputs");
    if (outTable) li.append(outTable);
    if (def.doc) {
        li.append(make("p", {}, html(markdownToHTML(def.doc))));
    }
}

const featuresByNodesUsing: Record<string, Set<string>> = {};

// Group nodes by category, then by id
const nodesByCategory: Record<string, typeof NODES> = {};
for (const node of NODES) {
    const cat = node.category || "Uncategorized";
    (nodesByCategory[cat] ??= []).push(node);
}

const sortedCategories = Object.keys(nodesByCategory).sort();

// Table of contents for categories
nodesContainer.append(make("ul", {},
    ...sortedCategories.map(cat =>
        make("li", {},
            make("a", { href: `#${CATEGORY_ID_PREFIX}${cat.toLowerCase().replaceAll(" ", "-")}` }, cat)
        )
    )
));

for (const cat of sortedCategories) {
    nodesContainer.append(make("h3", { id: CATEGORY_ID_PREFIX + cat.toLowerCase().replaceAll(" ", "-") }, cat));
    const nodesInCat = nodesByCategory[cat] ?? [];
    const nodesById = Object.groupBy(nodesInCat, x => x.id);
    for (const id of Object.keys(nodesById).sort()) {
        nodesContainer.append(make("h4", { id: NODE_ID_PREFIX + id },
            make("code", {}, id)));
        const ul = make("ul");
        nodesContainer.append(ul);
        for (const variant of nodesById[id] ?? []) {
            docNode(variant, ul, featuresByNodesUsing);
        }
    }
}

// features
function docFeature(id: string, feat: Feature, el: HTMLDListElement, usedBy: Set<string> = new Set) {
    const dt = make("dt", { id: FEATURE_ID_PREFIX + id }, make("h3", {}, make("code", {}, id)));
    const dl = make("dd", {},
        make("p", {},
            make("em", {}, "Used by: ", ...Array.from(usedBy).flatMap(f => [", ",
                make("a", { href: `#${NODE_ID_PREFIX}${encodeURIComponent(f)}` },
                    make("code", {}, f))]).slice(1))),
        make("p", {}, html(markdownToHTML(feat.doc!))));
    el.append(dt, dl);
}

const dl = make("dl");
featuresContainer.append(dl);
for (var [id, feature] of FEATURES.sort()) {
    docFeature(id, feature, dl, featuresByNodesUsing[id]!);
}

// compensate for the hash not existing when the page loads initially
get(window.location.hash)?.scrollIntoView();
