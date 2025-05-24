import { Port } from "../common/nodeDef";
import { defNode } from "./all";

defNode({
    category: "Flow Control",
    id: "value",
    template: { T: ["any"] },
    doc: `Emits the input again when it is updated by the \`:trigger\`
    input or when it changes. If you think in terms of digital logic
    elements, this is a D flip-flop with caveats: when the \`:trigger\`
    input updates it causes the output to send an update even if the value
    it sends didn't change, and when the input \`:value\` changes it automatically
    triggers an update even if \`:trigger\` didn't send an update.`,
    inputs: {
        trigger: new Port("signal", undefined),
        value: new Port("T", undefined),
    },
    outputs: {
        value: new Port("T", undefined),
    },
    update({ node }) {
        node.output("value", node.get("value"));
    }
});

defNode({
    category: "Flow Control",
    id: "edges",
    doc: `Emits a signal on \`:rising\` when \`:value\` changes from
    false to true, and a signal on \`:falling\` when \`:value\` changes
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
