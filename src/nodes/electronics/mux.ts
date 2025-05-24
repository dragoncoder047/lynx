import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "demux",
    category: "Flow Control",
    template: { T: ["any"] },
    inputs: {
        value: new Port("T", undefined),
        select: new Port("number", 0),
    },
    outputs: {
        out: new Port("T", [], ["bus"]),
    },
    doc: `A demultiplexer. Takes a single input and routes it to one of several outputs based on the select input.`,
    update({ node }) {
        node.output("out", node.get("value"), node.get("select"));
    }
});

defNode({
    id: "mux",
    category: "Flow Control",
    template: { T: ["any"] },
    inputs: {
        select: new Port("number", 0),
        in: new Port("T", [], ["bus"]),
    },
    outputs: {
        out: new Port("T", undefined),
    },
    doc: `A multiplexer. Takes several inputs and routes one of them to the output based on the select input.`,
    update({ node }) {
        const oldValue = node.outputCurrentValues.out;
        const newValue = node.get("in")[node.get("select")];
        if (oldValue !== newValue) {
            node.output("out", newValue);
        }
    }
});
