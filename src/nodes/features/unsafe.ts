import { make } from "vanilla";
import { Feature } from "../../common/feature";
import { Port } from "../../common/nodeDef";
import { consToArray } from "../../common/utils";
import { env, exec, LSymbol, nil, Pair } from "../../lipsShim";
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
    doc: `Used by nodes that have access to all of Javascript, meaning that
    they could do just about anything, including executing malicious code.
    This feature forces the user to confirm they want to run the flow first
    before anything happens.`
}));


defNode({
    id: "fn",
    inputs: {
        inputs: new Port("any", [], ["bus"]),
    },
    outputs: {
        outputs: new Port("any", [], ["bus"]),
    },
    handlesParams: true,
    features: ["unsafe-code"],
    doc: `Transforms the input and output values using a Scheme function.
    The value of the inputs is available in the variable <code>$inputs</code>,
    and the node object is available in the variable <code>$node</code>.
    Whatever array the function returns will be passed to the output.
    If <code>#&lt;void></code> (JS <code>undefined</code>) is returned,
    the node will not update its outputs.`,
    async setup({ node, features, args }) {
        const arrayToConsList = env.get<(x: any[]) => Pair>("vector->list");
        console.log(features["unsafe-code"]);
        const cons = (a: any, d: any) => new Pair(a, d);
        const s = (n: string) => new LSymbol(n);
        const code = cons(
            s("lambda"),
            cons(
                cons(s("$inputs"), cons(s("$node"), nil)),
                arrayToConsList(args)));
        console.log(code.toString());
        node.state.func = (await exec(code))[0];
    },
    async update({ node, app }) {
        const arrayToConsList = env.get<(x: any[]) => Pair>("vector->list");
        var value;
        try {
            value = await node.state.func(arrayToConsList(node.get("inputs")), node);
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
