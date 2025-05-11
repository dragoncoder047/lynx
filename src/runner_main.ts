import { LynxFlow } from "./common/flow";
import { autoload } from "./common/autoload";
import { isEmbedded, LynxMultiError, onlyWorstErrors, toError } from "./common/utils";
import { loadAllNodes } from "./nodes/all";
import { bind, get, html, make } from "vanilla";

if (isEmbedded()) {
    // get("#title").style.display = "none";
    get("#re-edit")!.style.display = "none";
}

bind("#re-edit", "click", async () => {
    window.location = "../editor" + location.search + location.hash as any;
});

const app = new LynxFlow(get("#app")!, get("#title")!, get("#log")!, get("#connect-area")!);

await loadAllNodes(app);

const noEl = get("#nothingToSeeHere")!;
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
        app.addUI(html(`Try an <a href="../examples">example</a> to get started`));
    }
} catch (e: any) {
    if (e instanceof LynxMultiError) {
        for (var ee of onlyWorstErrors(e.subErrors)) {
            console.error(ee);
            app.addUI(toError("Init error: ", ee));
        }
    }
    else {
        console.error(e);
        app.addUI(toError("Init error: ", e));
    }
}
