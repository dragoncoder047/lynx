import { LynxFlow } from "./flow";

export class Feature<M extends Record<string, any> = {}> {
    #didInit = false;
    doc: string | undefined;
    initializer: (flow: LynxFlow) => Promise<void>;
    constructor(init: (flow: LynxFlow) => Promise<void>, methods: M) {
        Object.assign(this, methods);
        this.initializer = init;
    }
    async init(flow: LynxFlow) {
        if (this.#didInit) return;
        await this.initializer(flow);
        this.#didInit = true;
    }
}
