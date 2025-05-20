import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    category: "Logic",
    id: "not",
    inputs: {
        input: new Port("boolean", false),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs the inverse of its input.",
    update({ node, changes }) {
        node.output("output", !changes.input);
    }
});

defNode({
    category: "Logic",
    id: "and",
    inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if both inputs are true and false otherwise.",
    update({ node, changes }) {
        node.output("output", !!(changes.a && changes.b));
    }
});

defNode({
    category: "Logic",
    id: "every",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if all inputs are true and false otherwise. This is the any-number-of-inputs version of the AND gate.",
    update({ node, changes }) {
        node.output("output", Array.isArray(changes.inputs) ? changes.inputs.every(Boolean) : false);
    }
});

defNode({
    category: "Logic",
    id: "or",
    inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs false if both inputs are false and true otherwise.",
    update({ node, changes }) {
        node.output("output", !!(changes.a || changes.b));
    }
});

defNode({
    category: "Logic",
    id: "some",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs false if all inputs are false and true otherwise. This is the any-number-of-inputs version of the OR gate.",
    update({ node, changes }) {
        node.output("output", changes.inputs.some(Boolean));
    }
});

defNode({
    category: "Logic",
    id: "xor",
    inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if the inputs are different and false if they are the same.",
    update({ node, changes }) {
        node.output("output", !!changes.a === !changes.b);
    }
});

defNode({
    category: "Logic",
    id: "parity-1",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if an odd number of inputs are true and false if an even number of inputs are true. This is the any-number-of-inputs version of the XOR gate.",
    update({ node, changes }) {
        const count = changes.inputs.filter(Boolean).length;
        node.output("output", count % 2 === 1);
    }
});

defNode({
    category: "Logic",
    id: "nand",
    inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if at least one input is false and false if both inputs are true.",
    update({ node, changes }) {
        node.output("output", !(changes.a && changes.b));
    }
});

defNode({
    category: "Logic",
    id: "not-all",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if at least one input is false and false if all inputs are true. This is the any-number-of-inputs version of the NAND gate.",
    update({ node, changes }) {
        node.output("output", !changes.inputs.every(Boolean));
    }
});

defNode({
    category: "Logic",
    id: "nor",
    inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if both inputs are false and false otherwise.",
    update({ node, changes }) {
        node.output("output", !(changes.a || changes.b));
    }
});

defNode({
    category: "Logic",
    id: "none",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if all inputs are false and false if any are true. This is the any-number-of-inputs version of the NOR gate.",
    update({ node, changes }) {
        node.output("output", !changes.inputs.some(Boolean));
    }
});

defNode({
    category: "Logic",
    id: "xnor",
    inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if both inputs are the same.",
    update({ node, changes }) {
        node.output("output", !!changes.a === !!changes.b);
    }
});

defNode({
    category: "Logic",
    id: "parity-0",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if an even number of inputs are true and false if an odd number of inputs are true. This is the any-number-of-inputs version of the XNOR gate.",
    update({ node, changes }) {
        const count = changes.inputs.filter(Boolean).length;
        node.output("output", count % 2 === 0);
    }
});
