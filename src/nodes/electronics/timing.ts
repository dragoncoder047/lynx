import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    category: "Timing",
    id: "clock",
    inputs: {
        interval: new Port("number", 1000),
        paused: new Port("boolean", false),
        reset: new Port("signal", undefined),
    },
    outputs: {
        clock: new Port("signal", undefined),
    },
    stateKeys: ["elapsedTime"],
    doc: "Updates connected nodes every N milliseconds.",
    setup({ node }) {
        node.state.elapsedTime = 0;
    },
    update({ node, changes }) {
        if (changes.reset) {
            node.state.elapsedTime = 0;
        }
    },
    tick({ node, dt }) {
        if (!node.get("paused")) {
            node.state.elapsedTime += dt * 1000;
        }
        // Max 1 update per tick because limitations
        if (node.state.elapsedTime >= node.get("interval")) {
            node.state.elapsedTime -= node.get("interval");
            node.output("clock");
        }
    }
});

defNode({
    category: "Timing",
    id: "delay",
    template: { T: ["any"] },
    inputs: {
        value: new Port("T", undefined),
        delay: new Port("number", 1000, ["silent"]),
    },
    outputs: {
        value: new Port("T", undefined),
    },
    doc: `Forwards the input value after a specified delay (in milliseconds)
    using \`setTimeout\`.`,
    update({ node, changes }) {
        const value = changes.value;
        const delay = (node.get("delay") ?? 0).valueOf();
        console.log("Delaying value ", value, "by", delay, "ms");
        setTimeout(() => node.output("value", value), delay);
    }
});

defNode({
    id: "pulse",
    inputs: {
        edge: new Port("signal", undefined),
    },
    outputs: {
        pulse: new Port("boolean", false),
    },
    doc: `When updated, sets output to true for one tick and then sets it back to false.`,
    tick({ node }) {
        if (node.outputCurrentValues.pulse)
            node.output("pulse", false);
    },
    update({ node }) {
        // update runs after tick yay
        node.output("pulse", true);
    }
})