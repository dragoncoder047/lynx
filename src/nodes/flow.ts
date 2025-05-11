import { Port } from "../common/port";
import { defNode } from "./all";

defNode({
    id: "value",
    generics: { T: 0 },
    argTypes: ["any"],
    doc: "Emits the same value every time when it is updated by the trigger input.",
    inputs: [new Port("trigger", "signal")],
    outputs: [new Port("value", "T")],
    setup({ node, params }) {
        node.state.value = params[0];
    },
    update({ node }) {
        node.output("value", node.state.value);
    }
});

defNode({
    id: "edges",
    argTypes: [],
    doc: "Emits a signal on :rising when :value changes from false to true, and a signal on :falling when :value changes from true to false.",
    inputs: [new Port("value", "boolean")],
    outputs: [new Port("rising", "signal"), new Port("falling", "signal")],
    setup({ node }) {
        node.state.oldState = false;
    },
    update({ node, changes }) {
        const oldState = node.state.oldState;
        const newState = changes.value;
        node.state.oldState = newState;
        if (oldState !== newState) {
            node.output(newState ? "rising" : "falling");
        }
    }
});
