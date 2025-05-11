import { Port } from '../common/port.js';
import { defNode } from './all.js';

defNode({
    id: "log",
    inputs: [new Port("value", "any")],
    outputs: [],
    argTypes: ["string"],
    doc: "Logs the value with a message whenever it updates.",
    setup({ node, params }) {
        node.state.message = params[0] ?? "";
    },
    update({ app, node, changes }) {
        if (changes.value === undefined) changes.value = "";
        app.log(node.state.message + changes.value);
    }
});
