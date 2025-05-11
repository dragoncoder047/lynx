export class Port {
    /**
     * @type {string}
     */
    #name
    /**
     * @type {import('./utils.js').TypeSpec}
     */
    #type
    /**
     * @param {string} name
     * @param {import('./utils.js').TypeSpec} type
     */
    constructor(name, type) {
        this.#name = name;
        this.#type = type;
    }
    /**
     * @readonly
     * @type {string}
     */
    get name() { return this.#name; }
    /**
     * @readonly
     * @type {import('./utils.js').TypeSpec}
     */
    get type() { return this.#type; }
}

export class Bus extends Port {
}
