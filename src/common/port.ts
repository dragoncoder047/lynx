import type { TypeSpec } from "./utils";

export class Port {
    #name: string;
    #type: TypeSpec;
    constructor(name: string, type: TypeSpec) {
        this.#name = name;
        this.#type = type;
    }
    get name() { return this.#name; }
    get type() { return this.#type; }
}

export class Bus extends Port {
}
