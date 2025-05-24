import { make } from "vanilla";
import { Feature } from "../../common/feature";
import { Port } from "../../common/nodeDef";
import { arrayToConsList, consToArray } from "../../common/utils";
import { exec, LSymbol, nil, Pair } from "../../lipsShim";
import { defFeature, defNode } from "../all";

defFeature("unsafe-code", new Feature(async app => {
    const btn = make("button", {}, "Yes, run");
    const area = make("div", {}, "This flow runs arbitrary code. ",
        "Please confirm you want to run it: ", btn);
    app.addConnect(area);
    await new Promise<void>(r => {
        btn.addEventListener("click", () => r());
    });
}, {
    doc: `Used by nodes that have access to all of Javascript, meaning that they could do just about anything, including executing malicious code.

    This feature forces the user to confirm they want to run the flow first before anything happens.`
}));


defNode({
    id: "fn",
    inputs: {
        inputs: new Port("any", [], ["bus"]),
    },
    outputs: {
        outputs: new Port("any", [], ["bus"]),
    },
    paramDoc: "<lambda body>",
    features: ["unsafe-code"],
    doc: `Transforms the input and output values using a Scheme function.

    The value of the inputs is available in the variable \`$inputs\`, the node object is available
    in the variable \`$node\`, and the app context is available in the variable \`$app\`.
    Whatever array the function returns will be passed to the output.

    If \`#<void>\` (JS \`undefined\`) is returned, the node will not update its outputs.`,
    async setup({ node, features, args }) {
        console.log(features["unsafe-code"]);
        const cons = (a: any, d: any) => new Pair(a, d);
        const s = (n: string) => new LSymbol(n);
        const code = cons(
            s("lambda"),
            cons(
                cons(s("$inputs"), cons(s("$node"), cons(s("$app"), nil))),
                arrayToConsList(args)));
        console.log(code.toString());
        node.state.func = (await exec(code))[0];
    },
    async update({ node, app }) {
        var value;
        try {
            value = await node.state.func(arrayToConsList(node.get("inputs")), node, app);
        } catch (e: any) {
            app.error(e);
            console.error(e);
            return;
        }
        if (value instanceof Pair) value = consToArray(value);
        else value = [value];
        if (value !== undefined) node.output("outputs", value);
    }
});
