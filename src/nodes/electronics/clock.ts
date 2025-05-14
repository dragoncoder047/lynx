import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "clock",
    inputs: {
        interval: new Port("number", 1000),
        paused: new Port("boolean", false),
        reset: new Port("signal", undefined),
    },
    outputs: {
        clock: new Port("signal", undefined),
    },
    stateKeys: ["elapsedTime", "lastTickTime"],
    doc: "Updates connected nodes every N milliseconds.",
    setup({ node }) {
        node.state.elapsedTime = 0;
        node.state.lastTickTime = 0;
    },
    update({ node, changes }) {
        if (changes.reset) {
            node.state.elapsedTime = 0;
        }
    },
    tick({ node }) {
        const dt = Date.now() - node.state.lastTickTime;
        if (!node.get("paused")) {
            node.state.elapsedTime += dt;
        }
        // Max 1 update per tick because limitations
        if (node.state.elapsedTime >= node.get("interval")) {
            node.state.elapsedTime = 0;
            node.output("clock");
        }
    }
});
