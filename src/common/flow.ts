import type { Pair } from "../lipsShim";
import { make } from "vanilla";
import { Feature } from "./feature";
import { getMeta } from "./getMetadata";
import { LynxNode } from "./node";
import { NodeDef } from "./nodeDef";
import { createNodes } from "./parseNodes";
import { parseWithMetadata } from "./utils";

export class LynxFlow {
    nodeDefs: NodeDef[];
    features: Record<string, Feature>;
    mainEl: HTMLElement | null;
    titleEl: HTMLElement | null;
    logEl: HTMLElement | null;
    connectEl: HTMLElement | null;
    constructor(mainEl: HTMLElement | null, titleEl: HTMLElement | null, logEl: HTMLElement | null, connectEl: HTMLElement | null) {
        this.nodeDefs = [];
        this.features = {};
        this.mainEl = mainEl;
        this.titleEl = titleEl;
        this.logEl = logEl;
        this.connectEl = connectEl;
    }
    defineNode(def: NodeDef) {
        this.nodeDefs.push(def);
    }
    defineFeature(featureID: string, feature: Feature) {
        if (this.features[featureID] !== undefined) {
            throw new Error(`Feature "${featureID}" is already defined`);
        }
        this.features[featureID] = feature;
    }
    async feature(id: string): Promise<Feature> {
        const f = this.features[id];
        if (!f) {
            throw new Error(`Feature "${id}" doesn't exist`);
        }
        await f.init(this);
        return f;
    }
    build(data: Pair[]): LynxNode[] {
        return createNodes(this, data);
    }
    async run(nodes: LynxNode[]): Promise<never> {
        console.log("Running nodes", nodes);
        var last = performance.now();
        for (; ;) {
            const now = performance.now();
            const dt = (now - last) / 1000;
            last = now;
            const iter = await Promise.allSettled(nodes.map(node => node.tick(this, dt)));
            for (var res of iter) {
                if (res.status === "rejected") {
                    console.error(res.reason);
                }
            }
            // to prevent a total lockup
            await new Promise(r => setTimeout(r, 0));
        }
    }
    async setup({ source, title }: { source: string; title: string; }): Promise<LynxNode[]> {
        const def = await parseWithMetadata(source);
        const nodes = this.build(def);
        const meta = getMeta(def);
        console.log("Got metadata", meta);
        this.setTitle(meta.title ?? title);
        await Promise.all(nodes.map(node => node.setup(this)));
        if (this.connectEl) this.connectEl.innerHTML = "";
        return nodes;
    }
    setTitle(title: string) {
        document.title = `${title} | Lynx`;
        if (this.titleEl) this.titleEl.textContent = title;
    }
    addUI<T extends Parameters<HTMLElement["append"]>[number]>(content: T): T {
        this.mainEl?.append(content);
        return content;
    }
    /**
     * @template T
     * @param {T} content
     * @returns {T}
     */
    addConnect<T extends Parameters<HTMLElement["append"]>[number]>(content: T): T {
        this.connectEl?.append(content);
        return content;
    }
    log<T extends string | Node>(content: T, timeout: number = 5000): T {
        const now = new Date(Date.now());
        const stamp = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}.${now.getMilliseconds().toString().padStart(3, "0")}`;
        const node = make("span.log", { "data-timestamp": stamp }, content);
        this.logEl?.append(node);
        if (timeout > 0) setTimeout(() => node.remove(), timeout);
        return content;
    }
    warn(message: string, timeout?: number) {
        this.log(make("span.warning", {}, message), timeout);
    }
    error(message: string, timeout?: number) {
        this.log(make("span.error", {}, message), timeout);
    }
    info(message: string, timeout?: number) {
        this.log(make("span.info", {}, message), timeout);
    }
}
