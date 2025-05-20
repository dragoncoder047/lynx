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
