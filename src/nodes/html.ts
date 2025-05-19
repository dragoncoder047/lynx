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
    doc: "Creates a HTML <a href=\"https://developer.mozilla.org/docs/Web/HTML/Element/button\" target=\"_blank\"><code>&lt;button></code></a> with the text and outputs :pressed and :hovering states when the user interacts with it.",
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

defNode({
    id: "select",
    inputs: {
        options: new Port("string", [], ["bus"]),
        label: new Port("string", "Select"),
    },
    outputs: {
        value: new Port("string", ""),
        index: new Port("number", 0),
    },
    doc: "Creates a HTML <a href=\"https://developer.mozilla.org/docs/Web/HTML/Element/select\" target=\"_blank\"><code>&lt;label>&lt;select></code></a> dropdown. Takes an array of options and outputs the selected value and index.",
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label");
        const labelText = document.createTextNode(node.get("label"));
        const select = make("select");
        labelEl.append(labelText, select);
        app.addUI(labelEl);
        node.state.el = select;
        node.state.labelText = labelText;
        (node.get("options") || []).forEach((opt: string) => {
            const option = make("option", {}, opt);
            select.append(option);
        });
        select.addEventListener("change", () => {
            node.output("value", select.value);
            node.output("index", select.selectedIndex);
        });
        node.output("value", select.value);
        node.output("index", select.selectedIndex);
    },
    update({ node, changes }) {
        const select = node.state.el;
        const labelText = node.state.labelText as Text;
        labelText.nodeValue = changes.label;
        const oldValue = select.value;
        select.innerHTML = "";
        (node.get("options") || []).forEach((opt: string) => {
            const option = make("option", {}, opt);
            select.append(option);
        });
        select.value = oldValue;
    }
});

defNode({
    id: "number_input",
    inputs: {
        value: new Port("number", 0),
        min: new Port("number", 0),
        max: new Port("number", 100),
        step: new Port("number", 1),
        label: new Port("string", "Number"),
    },
    outputs: {
        value: new Port("number", 0),
    },
    doc: "Creates a HTML <a href=\"https://developer.mozilla.org/docs/Web/HTML/Element/input/number\" target=\"_blank\"><code>&lt;input type=number></code></a> element. Outputs the current value.",
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label");
        const labelText = document.createTextNode(node.get("label"));
        const input = make("input", { type: "number" });
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        input.value = String(node.get("value"));
        input.addEventListener("input", () => {
            node.output("value", Number(input.value));
        });
        node.output("value", Number(input.value));
    },
    update({ node, changes }) {
        const input = node.state.el;
        const labelText = node.state.labelText as Text;
        labelText.nodeValue = changes.label;
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        input.value = String(node.get("value"));
    }
});

defNode({
    id: "range_input",
    inputs: {
        value: new Port("number", 0),
        min: new Port("number", 0),
        max: new Port("number", 100),
        step: new Port("number", 1),
        label: new Port("string", "Range"),
    },
    outputs: {
        value: new Port("number", 0),
    },
    doc: "Creates a HTML <a href=\"https://developer.mozilla.org/docs/Web/HTML/Element/input/range\" target=\"_blank\"><code>&lt;input type=range></code></a> slider. Outputs the current value.",
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label");
        const labelText = document.createTextNode(node.get("label"));
        labelEl.append(labelText);
        const input = make("input", { type: "range" });
        labelEl.append(input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        input.value = String(node.get("value"));
        input.addEventListener("input", () => {
            node.output("value", Number(input.value));
        });
        node.output("value", Number(input.value));
    },
    update({ node, changes }) {
        const input = node.state.el as HTMLInputElement;
        const labelText = node.state.labelText as Text;
        labelText.nodeValue = changes.label;
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        input.value = String(node.get("value"));
    }
});

defNode({
    id: "output_display",
    inputs: {
        value: new Port("string", ""),
        label: new Port("string", "Output"),
    },
    outputs: {},
    doc: "Creates a HTML <a href=\"https://developer.mozilla.org/docs/Web/HTML/Element/output\" target=\"_blank\"><code>&lt;output></code></a> element to display a value.",
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label");
        const labelText = document.createTextNode(node.get("label"));
        const output = make("output");
        labelEl.append(labelText, output);
        app.addUI(labelEl);
        node.state.el = output;
        node.state.labelText = labelText;
        output.textContent = node.get("value");
    },
    update({ node, changes }) {
        const output = node.state.el;
        const labelText = node.state.labelText as Text;
        labelText.nodeValue = changes.label;
        output.textContent = changes.value;
    }
});

defNode({
    id: "meter",
    inputs: {
        value: new Port("number", 0),
        min: new Port("number", 0),
        max: new Port("number", 100),
        low: new Port("number", 0),
        high: new Port("number", 100),
        optimum: new Port("number", 50),
        label: new Port("string", "Meter"),
    },
    outputs: {},
    doc: "Creates a HTML <a href=\"https://developer.mozilla.org/docs/Web/HTML/Element/meter\" target=\"_blank\"><code>&lt;meter></code></a> element to display a scalar measurement.",
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label");
        const labelText = document.createTextNode(node.get("label"));
        labelEl.append(labelText);
        const meter = make("meter") as HTMLMeterElement;
        labelEl.append(meter);
        app.addUI(labelEl);
        node.state.el = meter;
        node.state.labelText = labelText;
        meter.min = node.get("min");
        meter.max = node.get("max");
        meter.low = node.get("low");
        meter.high = node.get("high");
        meter.optimum = node.get("optimum");
        meter.value = node.get("value");
    },
    update({ node, changes }) {
        const meter = node.state.el as HTMLMeterElement;
        const labelText = node.state.labelText as Text;
        labelText.nodeValue = changes.label;
        meter.min = node.get("min");
        meter.max = node.get("max");
        meter.low = node.get("low");
        meter.high = node.get("high");
        meter.optimum = node.get("optimum");
        meter.value = node.get("value");
    }
});

defNode({
    id: "text_input",
    inputs: {
        label: new Port("string", "Text"),
    },
    outputs: {
        value: new Port("string", ""),
    },
    doc: "Creates a HTML <a href=\"https://developer.mozilla.org/docs/Web/HTML/Element/input/text\" target=\"_blank\"><code>&lt;input type=text></code></a> element with a label. Outputs the current value.",
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label");
        const labelText = document.createTextNode(node.get("label"));
        const input = make("input", { type: "text" });
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.addEventListener("input", () => {
            node.output("value", input.value);
        });
        node.output("value", input.value);
    },
    update({ node, changes }) {
        const input = node.state.el as HTMLInputElement;
        const labelText = node.state.labelText as Text;
        labelText.nodeValue = changes.label;
    }
});
