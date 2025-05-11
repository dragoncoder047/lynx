import { Feature } from './feature.js';
import { getMeta } from './getMetadata.js';
import { make } from './html.js';
import { LynxNode } from "./node.js";
import { NodeDef } from "./nodeDef.js";
import { createNodes } from './parseNodes.js';

export class LynxFlow {
    /**
     * @type {NodeDef[]}
     */
    nodeDefs
    /**
     * @type {Record<string, Feature>}
     */
    features
    /**
     * @type {HTMLElement}
     */
    mainEl
    /**
     * @type {HTMLElement}
     */
    titleEl
    /**
     * @type {HTMLElement}
     */
    logEl
    /**
     * @type {HTMLElement}
     */
    connectEl
    constructor(mainEl, titleEl, logEl, connectEl) {
        this.nodeDefs = [];
        this.features = {};
        this.mainEl = mainEl;
        this.titleEl = titleEl;
        this.logEl = logEl;
        this.connectEl = connectEl;
    }
    /**
     * @param {NodeDef} def
     */
    defineNode(def) {
        this.nodeDefs.push(def);
    }
    /**
     * @param {string} featureID
     * @param {Feature} feature
     */
    defineFeature(featureID, feature) {
        if (this.features[featureID] !== undefined) {
            throw new Error(`Feature "${featureID}" is already defined`);
        }
        this.features[featureID] = feature;
    }
    /**
     * @param {string} id
     * @returns {Promise<Feature>}
     */
    async feature(id) {
        const f = this.features[id];
        if (!f) {
            throw new Error(`Feature "${id}" doesn't exist`);
        }
        await f.init(this);
        return f;
    }
    /**
     * @param {lips.Pair[]} data
     * @returns {LynxNode[]}
     */
    build(data) {
        return createNodes(this, data);
    }
    /**
     * @param {LynxNode[]} nodes
     * @returns {Promise<never>}
     */
    async run(nodes) {
        console.log("Running nodes", nodes);
        for (; ;) {
            await Promise.all(nodes.map(node => node.tick(this)));
            // to prevent a total lockup
            await new Promise(r => setTimeout(r, 0));
        }
    }
    /**
     * @param {{def: lips.Pair[]; title: string}} param0
     * @returns {Promise<LynxNode[]>}
     */
    async setup({ def, title }) {
        const nodes = this.build(def);
        const meta = await getMeta(def);
        console.log("Got metadata", meta);
        this.setTitle(meta.title ?? title);
        await Promise.all(nodes.map(node => node.setup(this)));
        this.connectEl.childNodes.forEach(child => child.remove());
        return nodes;
    }
    /**
     * @param {string} title
     */
    setTitle(title) {
        document.title = `${title} | Lynx`;
        this.titleEl.textContent = title;
    }
    /**
     * @template T
     * @param {T} content
     * @returns {T}
     */
    addUI(content) {
        this.mainEl.append(content);
        return content;
    }
    /**
     * @template T
     * @param {T} content
     * @returns {T}
     */
    addConnect(content) {
        this.connectEl.append(content);
        return content;
    }
    /**
     * @template T
     * @param {T} content
     * @param {number} [timeout=5000]
     * @returns {T}
     */
    log(content, timeout = 5000) {
        const now = new Date(Date.now());
        const stamp = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}.${now.getMilliseconds().toString().padStart(3, "0")}`;
        const node = make("span", { class: "log", "data-timestamp": stamp }, [content]);
        this.logEl.append(node);
        if (timeout > 0) setTimeout(() => node.remove(), timeout);
        return content;
    }
    warn(message, timeout) {
        this.log(make("span", { class: "warning" }, [message]), timeout);
    }
    error(message, timeout) {
        this.log(make("span", { class: "error" }, [message]), timeout);
    }
    info(message, timeout) {
        this.log(make("span", { class: "info" }, [message]), timeout);
    }
}
