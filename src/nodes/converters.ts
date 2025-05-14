import { Port } from "../common/nodeDef";
import { defNode } from "./all";

defNode({
    id: "string->number",
    inputs: {
        string: new Port("string", "")
    },
    outputs: {
        number: new Port("number", 0),
    },
    doc: `Receives a string representing a number, parses it as a number, and
    outputs that. It uses <code>parseFloat</code> so if you give it a non-number
    string like <code>akjgsd78</code> you will just get 0.`, // cSpell: ignore akjgsd
    update({ node, changes }) {
        node.output("number", parseFloat(changes.string!.toString()));
    }
});

defNode({
    id: "to-string",
    inputs: {
        what: new Port("any", undefined),
    },
    outputs: {
        stringified: new Port("string", ""),
    },
    doc: `Receives any object and converts it to a string using the Javascript
    <code>toString()</code> method.`,
    update({ node, changes }) {
        node.output("stringified", changes.what!.toString());
    }
});
