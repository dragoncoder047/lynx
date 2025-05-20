import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "average",
    category: "Statistics",
    template: { T: ["number"] },
    inputs: {
        values: new Port("T", [], ["bus"]),
    },
    outputs: {
        average: new Port("T", 0),
    },
    doc: `Calculates the average (arithmetic mean) of a bunch of numbers.`,
    update({ node }) {
        const values = node.get("values") as number[];
        node.output("average", values.reduce((a, b) => a + b, 0) / values.length);
    }
});

defNode({
    id: "variance",
    category: "Statistics",
    template: { T: ["number"] },
    inputs: {
        values: new Port("T", [], ["bus"]),
    },
    outputs: {
        variance: new Port("T", 0),
    },
    doc: `Calculates the variance of a bunch of numbers.`,
    update({ node }) {
        const values = node.get("values") as number[];
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        node.output("variance", values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length);
    }
});
