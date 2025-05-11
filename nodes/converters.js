import { Port } from '../common/port.js';
import { defNode } from './all.js';

defNode({
    id: "string->number",
    argTypes: [],
    inputs: [new Port("string", "string")],
    outputs: [new Port("number", "number")],
    doc: "Receives a string representing a number, parses it as a number, and outputs that.",
    update({ node, changes }) {
        node.output("number", parseFloat(changes.string));
    }
});

defNode({
    id: "to-string",
    argTypes: [],
    inputs: [new Port("what", "any")],
    outputs: [new Port("stringified", "string")],
    doc: "Receives any object and converts it to a string using the Javascript <code>toString()</code> method.",
    update({ node, changes }) {
        node.output("stringified", changes.what.toString());
    }
});
