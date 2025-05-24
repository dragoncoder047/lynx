import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "clipboard",
    category: "Device",
    inputs: {
        writeText: new Port("string", ""),
    },
    outputs: {
        contents: new Port("string", ""),
    },
    doc: `Reads from or writes to the clipboard using the [Clipboard API](https://developer.mozilla.org/docs/Web/API/Clipboard_API).`,
    async update({ app, changes }) {
        if (!("clipboard" in navigator)) {
            app.error("Clipboard API not supported");
            return;
        }
        await navigator.clipboard.writeText(changes.writeText);
    },
    async tick({ app, node }) {
        if (!("clipboard" in navigator)) {
            app.error("Clipboard API not supported");
            return;
        }
        const text = await navigator.clipboard.readText();
        if (text === node.outputCurrentValues.contents) {
            return;
        }
        node.output("contents", text);
    }
});
