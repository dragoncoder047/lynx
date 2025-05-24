import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "rc-lowpass",
    category: "Math",
    inputs: {
        input: new Port("number", 0),
        tau: new Port("number", 0.1), // RC time constant
    },
    outputs: {
        output: new Port("number", 0),
    },
    doc: `RC low-pass filter. Tau is the time it takes for the output to move
    1-1/<em>e</em> = ~63.2% of the change after a step change in input.`,
    tick({ node, dt }) {
        const input = node.get("input");
        const tau = node.get("tau");
        let y = node.outputCurrentValues.output;
        if (tau > 0) {
            y += (input - y) * (dt / tau);
        } else {
            y = input;
        }
        node.output("output", y);
    }
});

defNode({
    id: "ramp-follower",
    category: "Math",
    inputs: {
        input: new Port("number", 0),
        rate: new Port("number", 1), // max change per second
    },
    outputs: {
        output: new Port("number", 0),
    },
    doc: `Ramp follower (slew rate limiter). Limits the rate of change of the output to ±rate per second.`,
    tick({ node, dt }) {
        const input = node.get("input");
        const rate = node.get("rate");
        let y = node.outputCurrentValues.output;
        const maxDelta = Math.abs(rate) * dt;
        const delta = input - y;
        if (Math.abs(delta) > maxDelta) {
            y += Math.sign(delta) * maxDelta;
        } else {
            y = input;
        }
        node.output("output", y);
    }
});
