import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

// Math functions (number)
const MATH_FUNCS: Record<string, { func: (a: number, b: number) => number; doc: string }> = {
    pow: { func: Math.pow, doc: "a raised to the power of b" },
    atan2: { func: Math.atan2, doc: "arctangent of a/b, result in radians" },
    max: { func: Math.max, doc: "larger of a and b" },
    min: { func: Math.min, doc: "smaller of a and b" },
};

defNode({
    id: "mathfunc2",
    category: "Math",
    inputs: {
        a: new Port("number", 0),
        b: new Port("number", 0),
    },
    outputs: {
        result: new Port("number", 0),
    },
    paramDoc: "<func>",
    doc: `Two-argument math functions.\n\n${Object.entries(MATH_FUNCS).map(([name, { doc }]) => `* \`${name}\`: ${doc}`).join("\n")}`,
    stateKeys: ["func"],
    setup({ node, args, app }) {
        const entry = MATH_FUNCS[args[0]];
        if (!entry) {
            app.error(`Unknown function: ${args[0]}`);
            return;
        }
        node.state.func = entry.func;
    },
    update({ node, changes }) {
        node.output("result", node.state.func(Number(changes.a), Number(changes.b)));
    }
});

// Comparison functions (number|string)
const COMPARE_FUNCS: Record<string, { func: (a: any, b: any) => boolean; doc: string }> = {
    lt: { func: (a, b) => a < b, doc: "a < b" },
    lte: { func: (a, b) => a <= b, doc: "a ≤ b" },
    gt: { func: (a, b) => a > b, doc: "a > b" },
    gte: { func: (a, b) => a >= b, doc: "a ≥ b" },
    eq: { func: (a, b) => a === b, doc: "a === b (strict equality)" },
    neq: { func: (a, b) => a !== b, doc: "a !== b (strict inequality)" },
};

defNode({
    id: "compare",
    category: "Math",
    template: { T: ["number", "string"] },
    inputs: {
        a: new Port("T", 0),
        b: new Port("T", 0),
    },
    outputs: {
        result: new Port("boolean", false),
    },
    paramDoc: "<func>",
    doc: `Comparison functions for numbers and strings.\n\n${Object.entries(COMPARE_FUNCS).map(([name, { doc }]) => `* \`${name}\`: ${doc}`).join("\n")}`,
    stateKeys: ["func"],
    setup({ node, args, app }) {
        const entry = COMPARE_FUNCS[args[0]];
        if (!entry) {
            app.error(`Unknown function: ${args[0]}`);
            return;
        }
        node.state.func = entry.func;
    },
    update({ node, changes }) {
        node.output("result", node.state.func(changes.a, changes.b));
    }
});

// Bitwise functions (number)
const BITWISE_FUNCS: Record<string, { func: (a: number, b: number) => number; doc: string }> = {
    and: { func: (a, b) => a & b, doc: "bitwise AND" },
    or: { func: (a, b) => a | b, doc: "bitwise OR" },
    xor: { func: (a, b) => a ^ b, doc: "bitwise XOR" },
};

defNode({
    id: "bitwise",
    category: "Math",
    inputs: {
        a: new Port("number", 0),
        b: new Port("number", 0),
    },
    outputs: {
        result: new Port("number", 0),
    },
    paramDoc: "<func>",
    doc: `Bitwise functions for numbers.\n\n${Object.entries(BITWISE_FUNCS).map(([name, { doc }]) => `* \`${name}\`: ${doc}`).join("\n")}`,
    stateKeys: ["func"],
    setup({ node, args, app }) {
        const entry = BITWISE_FUNCS[args[0]];
        if (!entry) {
            app.error(`Unknown function: ${args[0]}`);
            return;
        }
        node.state.func = entry.func;
    },
    update({ node, changes }) {
        node.output("result", node.state.func(Number(changes.a), Number(changes.b)));
    }
});
