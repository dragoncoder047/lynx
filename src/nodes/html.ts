import { make } from "vanilla";
import { Port } from "../common/nodeDef";
import { Color } from "../common/otherTypes";
import { typeOf } from "../common/types";
import { consToArray, zip } from "../common/utils";
import { LNumber, LString, Pair } from "../lipsShim";
import { defNode } from "./all";

defNode({
    category: "User Interface",
    id: "button",
    inputs: {
        text: new Port("string", "Button"),
    },
    outputs: {
        pressed: new Port("boolean", false),
        hovering: new Port("boolean", false),
        clicked: new Port("signal", undefined),
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a HTML [\`<button>\`](https://developer.mozilla.org/docs/Web/HTML/Element/button)
    element with the given text and outputs \`:pressed\` and \`:hovering\` states when the user
    interacts with it.`,
    stateKeys: ["el"],
    setup({ app, node }) {
        const button = make("button.lynx-ui", {}, node.get("text") as any);
        app.addUI(button);
        node.state.el = button;
        button.addEventListener("pointerdown", () => {
            node.output("pressed", true);
        });
        button.addEventListener("pointerup", () => {
            node.output("pressed", false);
        });
        button.addEventListener("pointerenter", () => {
            node.output("hovering", true);
        });
        button.addEventListener("pointerleave", () => {
            node.output("hovering", false);
        });
        button.addEventListener("click", () => {
            node.output("clicked");
        });
        node.output("hovering", false);
        node.output("pressed", false);
        node.output("el", button);
    },
    update({ node }) {
        node.state.el.textContent = node.get("text");
    }
});

defNode({
    category: "User Interface",
    id: "select",
    inputs: {
        options: new Port("string", [], ["bus"]),
        label: new Port("string", "Select"),
        value: new Port("string", ""),
    },
    outputs: {
        selected: new Port("string", ""),
        index: new Port("number", 0),
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a HTML [\`<select>\`](https://developer.mozilla.org/docs/Web/HTML/Element/select)
    dropdown. Takes an array of options and outputs the selected value and index.`,
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const select = make("select");
        labelEl.append(labelText, select);
        app.addUI(labelEl);
        node.state.el = select;
        node.state.labelText = labelText;
        (node.get("options") || []).forEach((opt: string) => {
            const option = make("option", {}, opt);
            select.append(option);
        });
        // Set value if provided
        if (node.get("value")) {
            select.value = node.get("value");
        }
        select.addEventListener("change", () => {
            node.output("selected", select.value);
            node.output("index", select.selectedIndex);
        });
        node.output("selected", select.value);
        node.output("index", select.selectedIndex);
        node.output("el", labelEl);
    },
    update({ node, changes }) {
        const select = node.state.el;
        const labelText = node.state.labelText as HTMLSpanElement;
        labelText.textContent = node.get("label");
        const oldValue = select.value;
        select.innerHTML = "";
        (node.get("options") || []).forEach((opt: string) => {
            const option = make("option", {}, opt);
            select.append(option);
        });
        // If value input changed, use it, else restore old value
        if ("value" in changes) {
            select.value = node.get("value");
            node.output("selected", select.value);
            node.output("index", select.selectedIndex);
        } else {
            select.value = oldValue;
        }
    }
});

defNode({
    category: "User Interface",
    id: "number-input",
    inputs: {
        value: new Port("number", 0),
        min: new Port("number", 0),
        max: new Port("number", 100),
        step: new Port("number", 1),
        label: new Port("string", "Number"),
    },
    outputs: {
        value: new Port("number", 0),
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a HTML [\`<input type="number">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/number)
    element. Outputs the current value.`,
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const input = make("input", { type: "number" });
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        input.value = String(node.get("value"));
        input.addEventListener("change", () => {
            node.output("value", Number(input.value));
        });
        node.output("value", Number(input.value));
        node.output("el", labelEl);
    },
    update({ node, changes }) {
        const input = node.state.el as HTMLInputElement;
        const labelText = node.state.labelText as HTMLSpanElement;
        labelText.textContent = node.get("label");
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        if ("value" in changes) {
            input.value = String(node.get("value"));
            node.output("value", Number(input.value));
        }
    }
});

defNode({
    category: "User Interface",
    id: "range",
    inputs: {
        value: new Port("number", 0),
        min: new Port("number", 0),
        max: new Port("number", 100),
        step: new Port("number", 1),
        label: new Port("string", "Range"),
    },
    outputs: {
        value: new Port("number", 0),
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a HTML [\`<input type="range">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/range)
    slider. Outputs the current value.`,
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
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
        node.output("el", labelEl);
    },
    update({ node, changes }) {
        const input = node.state.el as HTMLInputElement;
        const labelText = node.state.labelText as HTMLSpanElement;
        labelText.textContent = node.get("label");
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        if ("value" in changes) {
            input.value = String(node.get("value"));
            node.output("value", Number(input.value));
        }
    }
});

defNode({
    category: "User Interface",
    id: "output",
    inputs: {
        value: new Port("any", ""),
        label: new Port("string", "Output"),
    },
    outputs: {
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a HTML [\`<output>\`](https://developer.mozilla.org/docs/Web/HTML/Element/output)
    element to display a value.`,
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const output = make("output");
        labelEl.append(labelText, output);
        app.addUI(labelEl);
        node.state.el = output;
        node.state.labelText = labelText;
        output.textContent = node.get("value");
        node.output("el", labelEl);
    },
    update({ node }) {
        const output = node.state.el as HTMLOutputElement;
        const labelText = node.state.labelText as HTMLSpanElement;
        labelText.textContent = node.get("label");
        output.value = String(node.get("value"));
    }
});

defNode({
    category: "User Interface",
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
    outputs: {
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a HTML [\`<meter>\`](https://developer.mozilla.org/docs/Web/HTML/Element/meter)
    element to display a numeric measurement.`,
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
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
        node.output("el", labelEl);
    },
    update({ node, changes }) {
        const meter = node.state.el as HTMLMeterElement;
        const labelText = node.state.labelText as HTMLSpanElement;
        labelText.textContent = node.get("label");
        meter.min = node.get("min");
        meter.max = node.get("max");
        meter.low = node.get("low");
        meter.high = node.get("high");
        meter.optimum = node.get("optimum");
        if ("value" in changes) {
            meter.value = node.get("value");
        }
    }
});

defNode({
    category: "User Interface",
    id: "text-input",
    inputs: {
        label: new Port("string", "Text"),
        value: new Port("string", ""),
    },
    outputs: {
        value: new Port("string", ""),
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a HTML [\`<input type="text">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/text)
    element with a label. Outputs the current value.`,
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const input = make("input", { type: "text" });
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.value = node.get("value");
        input.addEventListener("input", () => {
            node.output("value", input.value);
        });
        node.output("value", input.value);
        node.output("el", labelEl);
    },
    update({ node, changes }) {
        const input = node.state.el as HTMLInputElement;
        const labelText = node.state.labelText as HTMLSpanElement;
        labelText.textContent = node.get("label");
        if ("value" in changes) {
            input.value = node.get("value");
            node.output("value", input.value);
        }
    }
});

defNode({
    category: "User Interface",
    id: "color-input",
    inputs: {
        label: new Port("string", "Color"),
        value: new Port("color", new Color(0, 0, 0)),
    },
    outputs: {
        value: new Port("color", new Color(0, 0, 0)),
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a HTML [\`<input type="color">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/color)
    element with a label. Outputs the current color value.`,
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const input = make("input", { type: "color" });
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.value = rgbToHex(node.get("value"));
        input.addEventListener("input", () => {
            node.output("value", new Color(...hexToRgb(input.value)));
        });
        node.output("value", new Color(...hexToRgb(input.value)));
        node.output("el", labelEl);
    },
    update({ node, changes }) {
        const input = node.state.el as HTMLInputElement;
        const labelText = node.state.labelText as HTMLSpanElement;
        labelText.textContent = node.get("label");
        if ("value" in changes) {
            input.value = rgbToHex(node.get("value"));
            node.output("value", node.get("value"));
        }
    }
});

function hexToRgb(hex: string): [number, number, number] {
    const num = parseInt(hex.slice(1), 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return [r, g, b];
}

function rgbToHex(color: Color): string {
    const r = color.r.toString(16).padStart(2, '0');
    const g = color.g.toString(16).padStart(2, '0');
    const b = color.b.toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

defNode({
    category: "User Interface",
    id: "checkbox",
    inputs: {
        label: new Port("string", "Checkbox"),
        checked: new Port("boolean", false),
    },
    outputs: {
        value: new Port("boolean", false),
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a HTML [\`<input type="checkbox">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/checkbox)
    element with a label. Outputs the checked state as a boolean.`,
    stateKeys: ["el", "labelText"],
    setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const input = make("input", { type: "checkbox" }) as HTMLInputElement;
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.checked = !!node.get("checked");
        input.addEventListener("change", () => {
            node.output("value", input.checked);
        });
        node.output("value", input.checked);
        node.output("el", labelEl);
    },
    update({ node, changes }) {
        const input = node.state.el as HTMLInputElement;
        const labelText = node.state.labelText as HTMLSpanElement;
        labelText.textContent = node.get("label");
        if ("checked" in changes) {
            input.checked = node.get("checked");
            node.output("value", input.checked);
        }
    }
});

defNode({
    category: "User Interface",
    id: "layout",
    paramDoc: "<layout>",
    inputs: {
        elements: new Port("html-element", [], ["bus", "silent"]),
        refresh: new Port("signal", undefined),
        hide: new Port("boolean", false),
    },
    outputs: {
        el: new Port("html-element", undefined as any),
    },
    doc: `Creates a layout container for multiple HTML elements.

    Layout description:

    * \`(flex <direction> <elements> ...)\` - flexbox layout with the given direction (row, column,
        row-reverse, etc).
    * \`(table (<cell> ...) ...)\` - table layout with a list of rows, each containing a list of cells.
    * \`<string>\` - creates a span with the given text.

        If you want to change the text, use a number and point it to an [\`<output>\`](#node-output)
        node.
    * \`<number>\` - will be filled with the corresponding element from the input list.

    Anything else is invalid.

    NOTE: There is no way to change the layout after it has been created, other than replacing
    individual elements.

    NOTE 2: A single node can only be put in one layout at a time. If you try to put it in
    multiple layouts, it will be removed from the previous one. This is a limitation of the
    underlying HTML DOM API. However you can move the node back and forth by updating the
    \`:refresh\` input.`,
    stateKeys: ["myEl", "containers"],
    setup({ app, args, node }) {
        node.state.containers = [];
        const mine = processUI(node.state.containers, args[0]);
        mine.classList.add("lynx-layout");
        app.addUI(mine);
        node.state.myEl = mine;
        node.output("el", mine);
        // force a refresh to start
        node.send("refresh", undefined, 0);
    },
    update({ node, changes }) {
        if (changes.refresh) {
            console.log("refreshing layout");
            const newEls = node.get("elements") as HTMLElement[];
            const containers = node.state.containers as HTMLElement[];
            for (var [a, b] of zip(containers, newEls)) {
                a.childNodes.forEach(child => child.remove());
                a.append(b);
            }
        }
        if ("hide" in changes)
            node.state.myEl.style.display = changes.hide ? "none" : "block";
    }
});

function processUI(containers: HTMLElement[], args: Pair | LNumber | LString): HTMLElement {
    if (args instanceof LString) {
        return make("span", {}, args.toString());
    }
    if (args instanceof LNumber) {
        const val = args.valueOf();
        return containers[val] = make("span.lynx-container");
    }
    if (args instanceof Pair) {
        const layout_type = args.car.toString();
        const children = consToArray(args.cdr);
        var root: HTMLElement;
        switch (layout_type) {
            case "flex":
                root = make("div");
                root.style.display = "flex";
                root.style.flexDirection = children[0].toString();
                root.style.flexWrap = "wrap";
                root.append(...children.slice(1).map(child => processUI(containers, child)));
                break;
            case "table":
                root = make("table");
                root.style.borderCollapse = "collapse";
                root.style.tableLayout = "auto";
                root.append(...children.map(child => {
                    const row = make("tr");
                    consToArray(child).forEach(cell => {
                        const cellEl = make("td");
                        cellEl.append(processUI(containers, cell));
                        row.append(cellEl);
                    });
                    return row;
                }));
                break;
            default:
                throw new Error(`Unknown layout type ${layout_type}`);
        }
        return root!;
    }
    throw new Error(`${typeOf(args)} not valid here`);
}
