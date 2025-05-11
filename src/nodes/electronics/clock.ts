import { Port } from "../../common/port";
import { defNode } from "../all";

defNode({
    id: "clock",
    argTypes: ["number"],
    inputs: [],
    outputs: [new Port("clock", "signal")],
    doc: "Updates connected nodes every N milliseconds.",
    setup({ node, params }) {
        setInterval(() => node.output("clock"), params[0].valueOf());
    }
});

defNode({
    id: "clock",
    argTypes: ["number"],
    inputs: [new Port("enabled", "boolean")],
    outputs: [new Port("clock", "signal")],
    doc: "Updates connected nodes every N milliseconds, unless :enabled is false. When :enables changes to true again, the timer starts counting from 0.",
    setup({ node, params }) {
        node.state.interval = params[0].valueOf();
        node.update("enabled", false, undefined);
    },
    update({ node, changes }) {
        if (node.state.tid) clearInterval(node.state.tid);
        if (changes.enabled) {
            node.state.tid = setInterval(() => node.output("clock"), node.state.interval);
        }
    }
});

defNode({
    id: "clock",
    argTypes: [],
    inputs: [new Port("interval", "number")],
    outputs: [new Port("clock", "signal")],
    doc: "Updates connected nodes every N milliseconds.",
    setup({ node }) {
        node.state.lastTime = Date.now();
        node.state.interval = Infinity;
    },
    update({ node, changes }) {
        node.state.interval = changes.interval;
    },
    tick({ node }) {
        const now = Date.now();
        if ((node.state.lastTime + node.state.interval) <= now) {
            node.state.lastTime = now;
            node.output("clock");
        }
    }
});
