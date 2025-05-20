import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "integrate",
    category: "Calculus",
    inputs: {
        df: new Port("number", 0),
    },
    outputs: {
        f: new Port("number", 0),
    },
    doc: `Calculates the time integral of the input value.`,
    tick({ node, dt }) {
        node.output("f", node.get("df") * dt + node.outputCurrentValues.f);
    }
});

defNode({
    id: "derivative",
    category: "Calculus",
    inputs: {
        f: new Port("number", 0),
    },
    outputs: {
        df: new Port("number", 0),
    },
    stateKeys: ["old_df"],
    doc: `Calculates the time derivative of the input value.`,
    setup({ node }) {
        node.state.old_df = 0;
    },
    tick({ node, dt }) {
        const f = node.get("f");
        node.output("df", (f - node.state.old_df) / dt);
        node.state.old_df = f;
    }
});