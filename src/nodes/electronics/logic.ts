import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "not",
    inputs: {
        input: new Port("boolean", false),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs the inverse of its input.",
    update({ node, changes }) {
        node.output("output", !(changes.input));
    }
});

defNode({
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
    id: "and",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if all inputs are true and false otherwise (arbitrary number of inputs).",
    update({ node, changes }) {
        node.output("output", Array.isArray(changes.inputs) ? changes.inputs.every(Boolean) : false);
    }
});

defNode({
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
    id: "or",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs false if all inputs are false and true otherwise (arbitrary number of inputs).",
    update({ node, changes }) {
        node.output("output", changes.inputs.some(Boolean));
    }
});

defNode({
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
    id: "xor",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if an odd number of inputs are true and false if an even number of inputs are true (arbitrary number of inputs).",
    update({ node, changes }) {
        const count = changes.inputs.filter(Boolean).length;
        node.output("output", count % 2 === 1);
    }
});

defNode({
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
    id: "nand",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if at least one input is false and false if all inputs are true (arbitrary number of inputs).",
    update({ node, changes }) {
        node.output("output", !changes.inputs.every(Boolean));
    }
});

defNode({
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
    id: "nor",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if all inputs are false and false if any are true (arbitrary number of inputs).",
    update({ node, changes }) {
        node.output("output", !changes.inputs.some(Boolean));
    }
});

defNode({
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
    id: "xnor",
    inputs: {
        inputs: new Port("boolean", [], ["bus"]),
    },
    outputs: {
        output: new Port("boolean", true),
    },
    doc: "Outputs true if an even number of inputs are true and false if an odd number of inputs are true (arbitrary number of inputs).",
    update({ node, changes }) {
        const count = changes.inputs.filter(Boolean).length;
        node.output("output", count % 2 === 0);
    }
});
