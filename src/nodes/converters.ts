import { Port } from "../common/nodeDef";
import { defNode } from "./all";

defNode({
    category: "Converters",
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
    category: "Converters",
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

defNode({
    id: "string->boolean",
    category: "Converters",
    inputs: {
        string: new Port("string", ""),
    },
    outputs: {
        boolean: new Port("boolean", false),
    },
    doc: `Returns false if the string is the empty string or the string "false", and true otherwise.`,
    update({ node, changes }) {
        const str = changes.string!.toString();
        node.output("boolean", str !== "" && str.toLowerCase() !== "false");
    }
});
