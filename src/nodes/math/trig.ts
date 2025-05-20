import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "cos",
    inputs: {
        angle: new Port("number", 0),
    },
    outputs: {
        value: new Port("number", 0),
    },
    update({ node }) {
        const angle = node.get("angle");
        node.output("value", Math.cos(angle));
    },
    doc: `Outputs the cosine of the input angle measured in radians.`
});

defNode({
    id: "sin",
    inputs: {
        angle: new Port("number", 0),
    },
    outputs: {
        value: new Port("number", 0),
    },
    update({ node }) {
        const angle = node.get("angle");
        node.output("value", Math.sin(angle));
    },
    doc: `Outputs the sine of the input angle measured in radians.`
});

defNode({
    id: "tan",
    inputs: {
        angle: new Port("number", 0),
    },
    outputs: {
        value: new Port("number", 0),
    },
    update({ node }) {
        const angle = node.get("angle");
        node.output("value", Math.tan(angle));
    },
    doc: `Outputs the tangent of the input angle measured in radians.`
});

defNode({
    id: "acos",
    inputs: {
        value: new Port("number", 0),
    },
    outputs: {
        angle: new Port("number", 0),
    },
    update({ node }) {
        const value = node.get("value");
        node.output("angle", Math.acos(value));
    },
    doc: `Outputs the inverse cosine of the input value as an angle in radians or NaN if the value is outside the range [-1, 1].`
});

defNode({
    id: "asin",
    inputs: {
        value: new Port("number", 0),
    },
    outputs: {
        angle: new Port("number", 0),
    },
    update({ node }) {
        const value = node.get("value");
        node.output("angle", Math.asin(value));
    },
    doc: `Outputs the inverse sine of the input value as an angle in radians or NaN if the value is outside the range [-1, 1].`
});

defNode({
    id: "atan",
    inputs: {
        value: new Port("number", 0),
    },
    outputs: {
        angle: new Port("number", 0),
    },
    update({ node }) {
        const value = node.get("value");
        node.output("angle", Math.atan(value));
    },
    doc: `Outputs the inverse tangent of the input value as an angle in radians.`
});

defNode({
    id: "radians->degrees",
    inputs: {
        radians: new Port("number", 0),
    },
    outputs: {
        degrees: new Port("number", 0),
    },
    update({ node }) {  
        const radians = node.get("radians");
        node.output("degrees", radians * (180 / Math.PI));
    },
    doc: `Converts radians to degrees.`
});

defNode({
    id: "degrees->radians",
    inputs: {
        degrees: new Port("number", 0),
    },
    outputs: {
        radians: new Port("number", 0),
    },
    update({ node }) {  
        const degrees = node.get("degrees");
        node.output("radians", degrees * (Math.PI / 180));
    },
    doc: `Converts degrees to radians.`
});
