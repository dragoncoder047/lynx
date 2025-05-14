import { make } from "vanilla";
import { Port } from "../common/nodeDef";
import { defNode } from "./all";

defNode({
    id: "button",
    inputs: {
        text: new Port("string", "Button"),
    },
    outputs: {
        pressed: new Port("boolean", false),
        hovering: new Port("boolean", false),
    },
    doc: "Creates a HTML <code>&lt;button></code> with the text and outputs :pressed and :hovering states when the user interacts with it.",
    stateKeys: ["el"],
    setup({ app, node }) {
        const button = make("button", {}, node.get("text") as any);
        app.addUI(button);
        node.state.el = button;
        button.addEventListener("pointerdown", () => {
            node.output("pressed", true);
        });
        button.addEventListener("pointerup", () => {
            node.output("pressed", false);
        });
        button.addEventListener("mouseover", () => {
            node.output("hovering", true);
        });
        button.addEventListener("mouseout", () => {
            node.output("hovering", false);
        });
        node.output("hovering", false);
        node.output("pressed", false);
    },
    update({ node, changes }) {
        node.state.el.textContent = changes.text;
    }
});
