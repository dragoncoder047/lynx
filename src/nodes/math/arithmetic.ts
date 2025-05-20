import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "sum",
    category: "Math",
    template: { T: ["number"] },
    inputs: {
        values: new Port("T", [], ["bus"]),
    },
    outputs: {
        sum: new Port("T", 0),
    },
    doc: `Adds a bunch of numbers.`,
    update({ node }) {
        node.output("sum", (node.get("values") as number[]).reduce((a, b) => a + b, 0));
    }
});

defNode({
    id: "difference",
    category: "Math",
    template: { T: ["number"] },
    inputs: {
        a: new Port("T", 0),
        b: new Port("T", 0),
    },
    outputs: {
        difference: new Port("T", 0),
    },
    doc: `Subtracts two numbers, a - b.`,
    update({ node }) {
        node.output("difference", node.get("a") - node.get("b"));
    }
});

defNode({
    id: "product",
    category: "Math",
    template: { T: ["number"] },
    inputs: {
        values: new Port("T", [], ["bus"]),
    },
    outputs: {
        product: new Port("T", 1),
    },
    doc: `Multiplies a bunch of numbers.`,
    update({ node }) {
        node.output("product", (node.get("values") as number[]).reduce((a, b) => a * b, 1));
    }
});

defNode({
    id: "quotient",
    category: "Math",
    template: { T: ["number"] },
    inputs: {
        a: new Port("T", 1),
        b: new Port("T", 1),
    },
    outputs: {
        quotient: new Port("T", 1),
    },
    doc: `Divides two numbers, a / b.`,
    update({ node }) {
        node.output("quotient", node.get("a") / node.get("b"));
    }
});

defNode({
    id: "modulus",
    category: "Math",
    template: { T: ["number"] },
    inputs: {
        a: new Port("T", 1),
        b: new Port("T", 1),
    },
    outputs: {
        modulus: new Port("T", 1),
    },
    doc: `Calculates the modulus of two numbers, a % b.`,
    update({ node }) {
        node.output("modulus", node.get("a") % node.get("b"));
    }
});


