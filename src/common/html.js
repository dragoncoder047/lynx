import { LynxError } from './utils.js';

/**
 * @param {string} tag
 * @param {Record<string, string>} attrs
 * @param {any[]} contents 
 * @returns {HTMLElement}
 */
export function make(tag, attrs = {}, contents = []) {
    const el = document.createElement(tag);
    for (var key of Object.keys(attrs)) {
        el.setAttribute(key, attrs[key]);
    }
    el.append(...contents);
    return el;
}

/**
 * @param {string} string
 * @returns {HTMLSpanElement}
 */
export function html(string) {
    const el = make("span");
    el.innerHTML = string;
    return el;
}

/**
 * @param {string} id
 * @returns {HTMLElement?}
 */
export function get(id) {
    return document.getElementById(id);
}

/**
 * @param {string} name
 * @param {Error} err
 * @returns {HTMLElement}
 */
export function toError(name, err) {
    const f = err instanceof LynxError && err.line !== undefined && err.col !== undefined
        ? ["(", err.line, ":", err.col, ") "] : [];
    return make("p", { class: "error" }, [name, ...f, err.message]);
}
