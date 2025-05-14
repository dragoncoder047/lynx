import { Bus } from "../common/nodeDef";
import { defNode } from "./all";

defNode({
    id: "log",
    inputs: { values: new Bus("any", []) },
    outputs: {},
    doc: "Logs the values whenever one of them updates.",
    update({ app, node }) {
        app.log(node.get("values").join(" "));
    }
});
