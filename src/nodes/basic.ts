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

