import { get, html, make } from "vanilla";
import { Feature } from "./common/feature";
import { NodeDef } from "./common/nodeDef";
import { Bus } from "./common/port";
import { FEATURES, modulesReady, NODES } from "./nodes/all";

await modulesReady;

const featuresContainer = get("#features-container")!;
const nodesContainer = get("#nodes-container")!;

function docNode(def: NodeDef, list: HTMLUListElement, fStore: Record<string, Set<string>>) {
    const li = make("li");
    list.append(li);
    li.append(make("p", {}, make("code", {}, 
        "(", def.id,
        ...(def.argTypes ? def.argTypes.map(x => make("em", {}, ` <${x}>`)) : [" ..."]),
        ")",
    )));
    if (def.features) {
        li.append(make("p", {}, "Uses features ", ...def.features.flatMap(f => [", ", make("a", { href: "#feature-" + encodeURIComponent(f) }, make("strong", {}, make("em", {}, make("code", {}, f))))].slice(1))));
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
    for (var input of def.inputs) {
        const t = def.generics && input.type as any in def.generics ? `type of argument ${def.generics[input.type as any]}` : input.type;
        const b = input instanceof Bus ? ", bussed" : "";
        iRow.append(make("td", {}, ":", input.name, " (", t as string, b, ")"));
    }
    for (var output of def.outputs) {
        const t = def.generics && output.type as any in def.generics ? `type of argument ${def.generics[output.type as any]}` : output.type;
        const b = output instanceof Bus ? ", bussed" : "";
        oRow.append(make("td", {}, ":", output.name, " (", t as string, b, ")"));
    }
    if (def.doc) {
        li.append(make("p", {}, html(def.doc)));
    }
}

const nodesById = Object.groupBy(NODES, x => x.id);
const featuresByNodesUsing: Record<string, Set<string>> = {};
for (var id of Object.keys(nodesById).sort()) {
    nodesContainer.append(make("h3", { id: "node-" + id }, make("code", {}, id)));
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
    const dt = make("dt", { id: "feature-" + id }, make("h3", {}, make("code", {}, id)));
    const dl = make("dd", {}, make("p", {}, make("em", {}, "Used by: ", ...Array.from(usedBy).flatMap(f => [", ", make("a", { href: "#node-" + encodeURIComponent(f) }, make("code", {}, f))]).slice(1))), make("p", {}, html(feat.doc!)));
    el.append(dt, dl);
}

const dl = make("dl");
featuresContainer.append(dl);
for (var [id, feature] of FEATURES.sort()) {
    docFeature(id, feature, dl as HTMLDListElement, featuresByNodesUsing[id]!);
}
