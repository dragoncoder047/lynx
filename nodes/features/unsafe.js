import { Feature } from '../../common/feature.js';
import { make } from '../../common/html.js';
import { Bus } from '../../common/port.js';
import { defFeature, defNode } from '../all.js';

defFeature("unsafe-code", new Feature(async app => {
    const btn = make("button", {}, ["Yes, run"]);
    const area = make("div", {}, ["This flow runs arbitrary code. Please confirm you want to run it: ", btn]);
    app.addConnect(area);
    await new Promise(r => {
        btn.addEventListener("click", () => r());
    });
}, {
    doc: "Used by nodes that have access to all of Javascript, meaning that they could do just about anything, including executing malicious code. This feature forces the user to confirm they want to run the flow first before anything happens."
}));

defNode({
    id: "fn",
    inputs: [new Bus("inputs", "any")],
    outputs: [new Bus("outputs", "any")],
    features: ["unsafe-code"],
    doc: "Transforms the input and output values using a Scheme function. The value of the inputs is available in the variable <code>$inputs</code>, and the node object is available in the variable <code>$node</code>. Whatever array the function returns will be passed to the output. If <code>#&lt;void></code> is returned, the node will not update its outputs.",
    async setup({ node, params, features }) {
        console.log(features["unsafe-code"]);
        const cons = (a, d) => new lips.Pair(a, d);
        const s = n => new lips.LSymbol(n);
        const code = cons(
            s("lambda"),
            cons(
                cons(s("$inputs"), cons(s("$node"), lips.nil)),
                lips.env.get("array->list")(params)));
        console.log(code.toString());
        node.state.func = (await lips.exec(code))[0];
    },
    async update({ node, app }) {
        var value;
        try {
            value = await node.state.func(lips.env.get("vector->list")(node.get("inputs", [])), node);
        } catch (e) {
            app.error(e);
            console.error(e);
            return;
        }
        if (value instanceof lips.Pair) value = lips.env.get("list->vector")(value);
        if (value !== undefined) node.output("outputs", value);
    }
});
