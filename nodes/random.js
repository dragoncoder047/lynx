import { Port } from '../common/port.js';
import { defNode } from './all.js';

defNode({
    id: "random",
    argTypes: [],
    inputs: [new Port("randomize", "signal")],
    outputs: [new Port("value", "number")],
    doc: "Outputs a random value in the range [0, 1) when updated.",
    update({ node }) {
        node.output("value", Math.random());
    },
});
