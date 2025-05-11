import { Port } from "../common/port";
import { defNode } from "./all";

defNode({
    id: "random",
    argTypes: [],
    inputs: [new Port("randomize", "signal")],
    outputs: [new Port("value", "number")],
    doc: "Outputs a random value in the range [0, 1) when updated.",
    update({ node }) {
        node.output("value", Math.random());
    },
});
