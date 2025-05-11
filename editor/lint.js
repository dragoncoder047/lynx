import { LynxFlow } from '../common/flow.js';
import { LynxError, LynxMultiError, parseWithMetadata } from '../common/utils.js';
import { loadAllNodes } from '../nodes/all.js';

/**
 * @param {string} source
 * @param {ace.EditSession} editSession
 */
export async function magic(source, editSession) {
    const app = new LynxFlow;
    await loadAllNodes(app);
    const errors = [];
    var nodes;
    try {
        nodes = app.build(await parseWithMetadata(source));
    } catch (e) {
        if (e.__code__) {
            console.log("LIPS Error on line", e.__line__, e.message, e.__offset__);
            errors.push(new LynxError(e.message, Infinity, (e.__line__ || 0) + 1, e.__col__ || 0));
        }
        else if (e instanceof LynxError) errors.push(e);
        else if (e instanceof LynxMultiError) errors.push(...e.subErrors);
        else throw e;
    }
    showLint(editSession, errors);
    highlightNodes(editSession, nodes);
}

/**
 * @param {ace.EditSession} editSession
 * @param {LynxError[]} errors
 */
function showLint(editSession, errors) {
    // find only highest priority errors
    const maxSev = Math.max(...errors.map(e => e.severity ?? 0));
    const onlySev = errors || errors.filter(e => (e.severity ?? 0) === maxSev);
    // show lint errors
    editSession.clearAnnotations();
    editSession.setAnnotations(onlySev.map(e => {
        return {
            row: e.line - 1,
            col: e.col,
            text: e.message || `${e.line}:${e.col} ${e.message}`,
            type: "error"
        };
    }));
    // TODO: this doesn't work
    editSession.state.diagnosticMarkers.setMarkers(onlySev.map(e => {
        return {
            range: new ace.Range(e.line - 1, e.col, e.line - 1, e.col + e.len),
            tooltipText: e.message,
            className: "lint-error"
        };
    }));
}

/**
 * @param {ace.EditSession} editSession
 * @param {LynxNode[]} nodes
 */
function highlightNodes(editSession, nodes) {

}
