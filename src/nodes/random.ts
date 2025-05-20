import { Port } from "../common/nodeDef";
import { defNode } from "./all";

defNode({
    category: "Numbers",
    id: "random",
    inputs: { randomize: new Port("signal", undefined) },
    outputs: { value: new Port("number", "a random value" as any) },
    doc: "Outputs a random value in the range [0, 1) when updated.",
    setup({ node }) {
        node.output("value", Math.random());
    },
    update({ node }) {
        node.output("value", Math.random());
    },
});
