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
