import { get, html, make } from "vanilla";
import { Feature } from "./common/feature";
import { Bus, NodeDef } from "./common/nodeDef";
import { env } from "./lipsShim";
import { FEATURES, modulesReady, NODES } from "./nodes/all";
import { repr } from "./common/utils";

await modulesReady;

const featuresContainer = get("#features-container")!;
const nodesContainer = get("#nodes-container")!;

const FEATURE_ID_PREFIX = "feat-";
const NODE_ID_PREFIX = "node-";

function docNode(def: NodeDef, list: HTMLUListElement, fStore: Record<string, Set<string>>) {
    const li = make("li");
    list.append(li);
    li.append(make("p", {},
        make("code", {},
            "(", def.id,
            ...Object.entries(def.inputs).flatMap(([name, val]) => val.paramOnly ? [` :${name} <${val.type}>`] : []),
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
    const ioTab = make("table");
    li.append(ioTab);
    const iRow = make("tr", {}, make("th", {}, "Inputs"));
    const oRow = make("tr", {}, make("th", {}, "Outputs"));
    ioTab.append(iRow, oRow);
    for (let [input, port] of Object.entries(def.inputs)) {
        const b = port instanceof Bus ? ", bussed" : "";
        iRow.append(make("td", {},
            make("div", {},
                make("code", {}, ":", input),
                " (", port.type as string, b, ")"),
            ...(port.type === "signal" ? [] : [make("div", {},
                "default: ", make("code", {}, repr(port.initialVal).toString()))])));
    }
    for (let [output, port] of Object.entries(def.outputs)) {
        const b = port instanceof Bus ? ", bussed" : "";
        oRow.append(make("td", {},
            make("div", {},
                make("code", {}, ":", output),
                " (", port.type as string, b, ")"),
            ...(port.type === "signal" ? [] : [make("div", {},
                "default: ", make("code", {}, repr(port.initialVal).toString()))])));
    }
    if (def.doc) {
        li.append(make("p", {}, html(def.doc)));
    }
}

const nodesById = Object.groupBy(NODES, x => x.id);
const featuresByNodesUsing: Record<string, Set<string>> = {};
for (var id of Object.keys(nodesById).sort()) {
    nodesContainer.append(make("h3", { id: NODE_ID_PREFIX + id },
        make("code", {}, id)));
    const ul = make("ul") as HTMLUListElement;
    nodesContainer.append(ul);
    for (var variant of nodesById[id]!) {
        docNode(variant, ul, featuresByNodesUsing);
    }
}

// features

/**
 * @param {string} id
 * @param {Feature} feat
 * @param {HTMLDListElement} el
 * @param {Set<string>} usedBy
 */
function docFeature(id: string, feat: Feature, el: HTMLDListElement, usedBy: Set<string> = new Set) {
    const dt = make("dt", { id: FEATURE_ID_PREFIX + id }, make("h3", {}, make("code", {}, id)));
    const dl = make("dd", {},
        make("p", {},
            make("em", {}, "Used by: ", ...Array.from(usedBy).flatMap(f => [", ",
                make("a", { href: `#${NODE_ID_PREFIX}${encodeURIComponent(f)}` },
                    make("code", {}, f))]).slice(1))),
        make("p", {}, html(feat.doc!)));
    el.append(dt, dl);
}

const dl = make("dl");
featuresContainer.append(dl);
for (var [id, feature] of FEATURES.sort()) {
    docFeature(id, feature, dl as HTMLDListElement, featuresByNodesUsing[id]!);
}

// compensate for the hash not existing when the page loads initially
get(window.location.hash)?.scrollIntoView();
