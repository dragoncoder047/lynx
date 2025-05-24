import { Port } from "../common/nodeDef";
import { defNode } from "./all";

defNode({
    category: "Basic",
    id: "log",
    inputs: { values: new Port("any", [], ["bus"]) },
    outputs: {},
    doc: "Logs the values whenever one of them updates.",
    update({ app, node }) {
        app.log(node.get("values").join(" "));
    }
});

defNode({
    category: "Basic",
    id: "on-start",
    doc: "Outputs a single update when the flow is started and then never again.",
    inputs: {},
    outputs: {
        update: new Port("signal", undefined),
    },
    setup({ node }) {
        node.output("update");
    }
});
