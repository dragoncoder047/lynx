import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

function degreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180);
}
function radiansToDegrees(radians: number) {
    return radians * (180 / Math.PI);
}

const FUNCS: Record<string, { func: (x: number) => number; doc: string }> = {
    abs: { func: Math.abs, doc: "absolute value" },
    acos: { func: Math.acos, doc: "inverse cosine" },
    asin: { func: Math.asin, doc: "inverse sine" },
    atan: { func: Math.atan, doc: "inverse tangent" },
    ceil: { func: Math.ceil, doc: "round up" },
    cos: { func: Math.cos, doc: "cosine" },
    degrees: { func: radiansToDegrees, doc: "convert radians to degrees" },
    exp: { func: Math.exp, doc: "exponential function" },
    floor: { func: Math.floor, doc: "round down" },
    log: { func: Math.log, doc: "natural logarithm" },
    radians: { func: degreesToRadians, doc: "convert degrees to radians" },
    round: { func: Math.round, doc: "round to nearest integer" },
    sin: { func: Math.sin, doc: "sine" },
    sqrt: { func: Math.sqrt, doc: "square root" },
    tan: { func: Math.tan, doc: "tangent" },
    trunc: { func: Math.trunc, doc: "round towards zero" },
};

defNode({
    id: "mathfunc1",
    category: "Math",
    inputs: {
        input: new Port("number", 0),
    },
    outputs: {
        output: new Port("number", 0),
    },
    paramDoc: "<func>",
    doc: `Single-argument math functions.\n\n${Object.entries(FUNCS).map(([name, { doc }]) => `* \`${name}\`: ${doc}`).join("\n")}`,
    stateKeys: ["func"],
    setup({ node, args, app }) {
        const func = FUNCS[args[0]];
        if (!func) {
            app.error(`Unknown function: ${args[0]}`);
            return;
        }
        node.state.func = func.func;
    },
    update({ node, changes }) {
        node.output("output", node.state.func(changes.input));
    }
});
