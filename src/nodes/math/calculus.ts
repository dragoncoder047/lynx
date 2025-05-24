import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "integrate",
    category: "Calculus",
    inputs: {
        df: new Port("number", 0),
        min: new Port("number", -Infinity),
        max: new Port("number", Infinity),
    },
    outputs: {
        f: new Port("number", 0),
    },
    doc: `Calculates the time integral of the input value. The optional min and max inputs
    will clamp the integrand and prevent it from growing without bound which would be useful in
    a PID controller setup.`,
    tick({ node, dt }) {
        node.output("f", Math.min(node.get("max"), Math.max(node.get("min"), node.get("df") * dt + node.outputCurrentValues.f)));
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
    stateKeys: ["old_f"],
    doc: `Calculates the time derivative of the input value.`,
    setup({ node }) {
        node.state.old_f = 0;
    },
    tick({ node, dt }) {
        const f = node.get("f");
        node.output("df", (f - node.state.old_f) / dt);
        node.state.old_f = f;
    }
});