import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    category: "Logic",
    id: "d-latch",
    template: { T: ["any"] },
    inputs: {
        d: new Port("T", undefined),
        enable: new Port("boolean", false),
    },
    outputs: {
        q: new Port("T", undefined),
    },
    doc: `D latch (transparent latch). When \`:enable\` is true,
    \`:q\` follows \`:d\`. When \`:enable\` is false, \`:q\` holds its value.`,
    update({ node }) {
        if (node.get("enable")) {
            const newQ = node.get("d");
            const oldQ = node.outputCurrentValues.q;
            if (oldQ !== newQ)
                node.output("q", newQ);
        }
    }
});

defNode({
    category: "Logic",
    id: "d-flipflop",
    template: { T: ["any"] },
    inputs: {
        d: new Port("T", undefined, ["silent"]),
        clock: new Port("signal", undefined),
    },
    outputs: {
        q: new Port("T", false),
    },
    doc: `D flip-flop. When updated by \`:clock\`, \`:q\` is set to \`:d\` and triggers
    an update if the value changed.

    This is in contrast to the [\`value\`](#node-value) node which always triggers an
    output update when its \`:trigger\` input updates even if the value did not change,
    and also updates automatically (pass-through) when the value does change even if it
    is not clocked by the \`trigger\`.`,
    update({ node }) {
        const newQ = node.get("d");
        const oldQ = node.outputCurrentValues.q;
        if (oldQ !== newQ)
            node.output("q", newQ);
    }
});

defNode({
    id: "sr-latch",
    category: "Logic",
    inputs: {
        s: new Port("boolean", false),
        r: new Port("boolean", false),
        enable: new Port("boolean", true),
    },
    outputs: {
        q: new Port("boolean", false),
    },
    doc: `Set-reset latch. When \`:enable\` is true,
    \`:q\` is set if \`:s\` is true or cleared if \`:r\` is true.
    If both are true at the same time, \`:s\` takes precedence.
    If \`:enable\` is false, \`:q\` holds its value.`,
    update({ node }) {
        if (node.get("enable")) {
            var value = node.outputCurrentValues.q;
            if (node.get("s")) {
                value = true;
            } else if (node.get("r")) {
                value = false;
            }
            node.output("q", value);
        }
    }
});

defNode({
    category: "Logic",
    id: "jk-flipflop",
    inputs: {
        j: new Port("boolean", false, ["silent"]),
        k: new Port("boolean", false, ["silent"]),
        clock: new Port("signal", undefined),
    },
    outputs: {
        q: new Port("boolean", false),
    },
    stateKeys: ["q"],
    doc: `JK flip-flop. When updated by \`:clock\`, \`:q\` is set if \`:j\` is true or
    cleared if \`:k\` is true. If both are true at the same time, \`:q\` toggles.`,
    setup({ node }) {
        node.state.q = false;
        node.output("q", false);
    },
    update({ node }) {
        // q* = jq' + k'q
        node.state.q = (node.get("j") && !node.state.q) || (!node.get("k") && node.state.q);
        node.output("q", node.state.q);
    }
});
