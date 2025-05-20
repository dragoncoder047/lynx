import { Port } from "../../common/nodeDef";
import { Point } from "../../common/otherTypes";
import { defNode } from "../all";

defNode({
    id: "distance",
    category: "Geometry",
    inputs: {
        a: new Port("point", new Point(0, 0)),
        b: new Port("point", new Point(0, 0)),
    },
    outputs: {
        distance: new Port("number", 0),
    },
    doc: `Calculates the distance between two points.`,
    update({ node }) {
        const a = node.get("a");
        const b = node.get("b");
        const distance = Math.hypot(b.x - a.x, b.y - a.y);
        node.output("distance", distance);
    }
});

defNode({
    id: "centroid",
    category: "Geometry",
    inputs: {
        points: new Port("point", [], ["bus"]),
    },
    outputs: {
        centroid: new Port("point", new Point(0, 0)),
    },
    doc: `Calculates the centroid of a set of points. If there are only two points, it returns the midpoint.`,
    update({ node }) {
        const points = node.get("points") as Point[];
        if (points.length === 0) {
            node.output("centroid", new Point(0, 0));
            return;
        }
        const sum = points.reduce((acc, point) => {
            acc.x += point.x;
            acc.y += point.y;
            return acc;
        }, new Point(0, 0));
        const centroid = new Point(sum.x / points.length, sum.y / points.length);
        node.output("centroid", centroid);
    }
});

defNode({
    id: "xy->point",
    category: "Geometry",
    inputs: {
        x: new Port("number", 0),
        y: new Port("number", 0),
    },
    outputs: {
        point: new Port("point", new Point(0, 0)),
    },
    doc: `Converts x and y coordinates to a point.`,
    update({ node }) {
        node.output("point", new Point(node.get("x"), node.get("y")));
    }
});

defNode({
    id: "point->xy",
    category: "Geometry",
    inputs: {
        point: new Port("point", new Point(0, 0)),
    },
    outputs: {
        x: new Port("number", 0),
        y: new Port("number", 0),
    },
    doc: `Converts a point to x and y coordinates.`,
    update({ node }) {
        const point = node.get("point");
        node.output("x", point.x);
        node.output("y", point.y);
    }
});