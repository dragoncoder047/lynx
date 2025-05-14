import { Port } from "../common/nodeDef";
import { defNode } from "./all";

defNode({
    id: "value",
    template: { T: ["any"] },
    doc: `Emits the same value every time when it is updated
    by the trigger input.`,
    inputs: {
        trigger: new Port("signal", undefined),
        value: new Port("T", undefined, true),
    },
    outputs: {
        value: new Port("T", undefined),
    },
    update({ node }) {
        node.output("value", node.get("value"));
    }
});

defNode({
    id: "edges",
    doc: `Emits a signal on :rising when :value changes from
    false to true, and a signal on :falling when :value changes
    from true to false.`,
    inputs: {
        value: new Port("boolean", false),
    },
    outputs: {
        rising: new Port("signal", undefined),
        falling: new Port("signal", undefined),
    },
    stateKeys: ["oldState"],
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
