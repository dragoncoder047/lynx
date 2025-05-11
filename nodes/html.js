import { Port } from '../common/port.js';
import { defNode } from './all.js';
import { make } from '../common/html.js';

defNode({
    id: "button",
    inputs: [],
    argTypes: ["string"],
    outputs: [
        new Port("pressed", "boolean"),
        new Port("hovering", "boolean"),
    ],
    doc: "Creates a HTML <code>&lt;button></code> with the argument and outputs :pressed and :hovering states when the user interacts with it.",
    setup({ app, node, params }) {
        const button = make("button", {}, [params[0]]);
        app.addUI(button);
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
    }
});
