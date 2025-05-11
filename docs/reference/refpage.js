import { NODES, FEATURES, modulesReady } from '../../nodes/all.js';
import { get, make, html } from '../../common/html.js';
import { NodeDef } from '../../common/nodeDef.js';
import { Feature } from '../../common/feature.js';
import { Bus } from '../../common/port.js';

await modulesReady;

const featuresContainer = get("features-container");
const nodesContainer = get("nodes-container");

/**
 * @param {NodeDef} def
 * @param {HTMLUListElement} list
 * @param {Record<string, Set<string>>} fStore
 */
function docNode(def, list, fStore) {
    const li = make("li");
    list.append(li);
    li.append(make("p", {}, [make("code", {}, [
        "(", def.id,
        ...(def.argTypes ? def.argTypes.map(x => make("em", {}, [` <${x}>`])) : [" ..."]),
        ")",
    ])]));
    if (def.features) {
        li.append(make("p", {}, ["Uses features ", ...def.features.flatMap(f => [", ", make("a", { href: "#feature-" + encodeURIComponent(f) }, [make("strong", {}, [make("em", {}, [make("code", {}, [f])])])])]).slice(1)]));
        for (var f of def.features) {
            fStore[f] ??= new Set;
            fStore[f].add(def.id);
        }
    }
    const ioTab = make("table");
    li.append(ioTab);
    const iRow = make("tr", {}, [make("th", {}, ["Inputs"])]);
    const oRow = make("tr", {}, [make("th", {}, ["Outputs"])]);
    ioTab.append(iRow, oRow);
    for (var input of def.inputs) {
        const t = def.generics && input.type in def.generics ? `type of argument ${def.generics[input.type]}` : input.type;
        const b = input instanceof Bus ? ", bussed" : "";
        iRow.append(make("td", {}, [":", input.name, " (", t, b, ")"]));
    }
    for (var output of def.outputs) {
        const t = def.generics && output.type in def.generics ? `type of argument ${def.generics[output.type]}` : output.type;
        const b = output instanceof Bus ? ", bussed" : "";
        oRow.append(make("td", {}, [":", output.name, " (", t, b, ")"]));
    }
    if (def.doc) {
        li.append(make("p", {}, [html(def.doc)]));
    }
}

const nodesById = Object.groupBy(NODES, x => x.id);
const featuresByNodesUsing = {};
for (var id of Object.keys(nodesById).sort()) {
    nodesContainer.append(make("h3", { id: "node-" + id }, [make("code", {}, [id])]));
    const ul = make("ul");
    nodesContainer.append(ul);
    for (var variant of nodesById[id]) {
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
function docFeature(id, feat, el, usedBy = []) {
    const dt = make("dt", { id: "feature-" + id }, [make("h3", {}, [make("code", {}, [id])])]);
    const dl = make("dd", {}, [make("p", {}, [make("em", {}, ["Used by: ", ...Array.from(usedBy).flatMap(f => [", ", make("a", { href: "#node-" + encodeURIComponent(f) }, [make("code", {}, [f])])]).slice(1)])]), make("p", {}, [html(feat.doc)])]);
    el.append(dt, dl);
}

const dl = make("dl");
featuresContainer.append(dl);
for (var [id, feature] of FEATURES.sort()) {
    docFeature(id, feature, dl, featuresByNodesUsing[id]);
}
