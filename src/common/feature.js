import { LynxFlow } from './flow.js';

export class Feature {
    /**
     * @type {string | undefined}
     */
    doc
    /**
     * @type {() => Promise<void>}
     */
    initializer
    /**
     * @type {boolean}
     */
    #didInit
    constructor(init, methods) {
        Object.assign(this, methods);
        this.initializer = init;
        this.#didInit = false;
    }
    /**
     * @param {LynxFlow} flow
     */
    async init(flow) {
        if (this.#didInit) return;
        await this.initializer(flow);
        this.#didInit = true;
    }
}
