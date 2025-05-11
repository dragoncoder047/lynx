import { LynxFlow } from "../common/flow.js";
import { autoload } from '../common/autoload.js';
import { get, make, toError } from '../common/html.js';
import { isEmbedded, LynxMultiError } from '../common/utils.js';
import { loadAllNodes } from '../nodes/all.js';

if (isEmbedded()) {
    // get("title").style.display = "none";
    get("re-edit").style.display = "none";
}

get("re-edit").addEventListener("click", async () => {
    location = "../editor" + location.search + location.hash;
});

await lips.bootstrap();

const app = new LynxFlow(get("app"), get("title"), get("log"), get("connect-area"));

await loadAllNodes(app);

const noEl = get("nothingToSeeHere");
noEl.remove();
noEl.style.cssText = "";

const appDef = await autoload(app, noEl);

console.log("Loaded app!", appDef);

try {
    const nodes = await app.setup(appDef);
    if (nodes.length > 0) {
        app.run(nodes).catch(err => {
            console.error(err);
            app.error(err);
        });
    } else {
        app.addUI("No nodes...");
        app.addUI(make("br"));
        app.addUI(make("p", {}, ["Try an ", make("a", { href: "../examples" }, ["example"]), " to get started"]));
    }
} catch (e) {
    if (e instanceof LynxMultiError) {
        for (var ee of e.subErrors) {
            console.error(ee);
            app.addUI(toError("Init error: ", ee));
        }
    }
    else {
        console.error(e);
        app.addUI(toError("Init error: ", e));
    }
}
