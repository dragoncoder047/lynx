import * as ace from "ace-builds";
import { LynxFlow } from "../common/flow";
import { parseWithMetadata } from "../common/utils";
import { LynxError, LynxMultiError, onlyWorstErrors } from "../common/errors";
import { loadAllNodes } from "../nodes/all";
import { LynxNode } from "../common/node";

export async function lint(source: string, editSession: ace.EditSession) {
    const app = new LynxFlow(null, null, null, null);
    await loadAllNodes(app);
    const errors = [];
    var nodes;
    try {
        nodes = app.build(await parseWithMetadata(source));
    } catch (e: any) {
        if (e.__code__) {
            console.log("LIPS Error on line", e.__line__, e.message, e.__offset__);
            errors.push(new LynxError(e.message, Infinity, (e.__line__ || 0) + 1, e.__col__ || 0));
        }
        else if (e instanceof LynxError) errors.push(e);
        else if (e instanceof LynxMultiError) errors.push(...e.subErrors);
        else throw e;
    }
    showLint(editSession, errors);
    highlightNodes(editSession, nodes!);
}

function showLint(editSession: ace.EditSession, errors: LynxError[]) {
    // find only highest priority errors
    const onlySev = onlyWorstErrors(errors);
    // show lint errors
    editSession.clearAnnotations();
    editSession.setAnnotations(onlySev.map(err => {
        return {
            row: err.line - 1,
            column: err.col,
            text: err.message ?? `${err.line}:${err.col}(${err.len}) ${err.message}`,
            type: "error",
        };
    }));
    const markers = editSession.getMarkers();
    for (var id of Object.keys(markers)) {
        editSession.removeMarker(+id);
    }
    const seenMarkers = new Set<string>;
    for (var err of onlySev) {
        const marker = new ace.Range(err.line - 1, err.col, err.line - 1, err.col + Math.max(1, err.len));
        if (seenMarkers.has(marker.toString())) continue;
        seenMarkers.add(marker.toString());
        editSession.addMarker(marker, "lint-error", "line");
    }
}

function highlightNodes(editSession: ace.EditSession, nodes: LynxNode[]) {

}
