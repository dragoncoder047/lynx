import * as ace from "ace-builds";
import { bind, get, make } from "vanilla";
import { autoloadString } from "../common/autoload";
import { compress } from "../common/compress";
import { AUTOSAVE_KEY, LOCAL_SAVE_KEY } from "../common/constants";
import { bytesToBase64 } from "../common/utils";
import { EXAMPLES } from "../examples";
import { lint } from "./lint";

populateProjects();

ace.config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1/src-noconflict/");

const editor = ace.edit("editor", {
    // theme: "ace/theme/clouds_midnight",
    mode: "ace/mode/scheme",
});
editor.setTheme({
    cssClass: "ace-lynx",
    isDark: true
});
editor.commands.removeCommand("showSettingsMenu", false);
editor.session.setOption("wrap", "free");
const changeText: ((text: string) => void) & { isRunning: boolean } = function (text: string) {
    changeText.isRunning = true;
    try {
        editor.setValue(text, -1);
    } finally {
        changeText.isRunning = false;
    }
} as any;
editor.on("change", async () => {
    if (!changeText.isRunning) {
        localStorage[AUTOSAVE_KEY] = await getCompressed();
        changeURL("", "");
    }
    // do linting
    await lint(editor.getValue(), editor.getSession());
});
changeText(await autoloadString());


const runIframe = get("#loader")! as HTMLIFrameElement;

bind("#browse", "click", () => {
    open(import.meta.resolve("../examples"), "_blank");
});

bind("#run", "click", async () => {
    runIframe.src = "../runner#" + await getCompressed();
});

bind("#save-url", "click", async () => {
    changeURL("", "#" + await getCompressed());
});

bind("#help", "click", () => {
    open("../docs", "_blank");
});

bind("#open-full", "click", async () => {
    window.location = "../runner#" + await getCompressed() as any;
});

bind("#save", "click", async () => {
    const name = prompt("Name for app:");
    if (name === null) return;
    const store = JSON.parse(localStorage[LOCAL_SAVE_KEY]);
    store[name] = await getCompressed();
    localStorage[LOCAL_SAVE_KEY] = JSON.stringify(store);
    changeURL("?saved=" + name, "");
    populateProjects();
});

bind("#share", "click", async () => {
    await navigator.share({
        url: new URL("../runner#" + await getCompressed(), location.href) as any,
        text: editor.getValue(),
        title: "Lynx App",
        // files: [new File([editor.getValue()], "app" + LYNX_FILE_EXT)]
    });
});

bind("#projects", "change", async () => {
    const proj = get("#projects") as HTMLSelectElement;
    const which = proj.value;
    proj.value = "";
    if (!which) return;
    const { saved, example } = JSON.parse(which);
    console.log(saved, example);
    changeURL(saved ? "?saved=" + saved : "?example=" + example, "");
    changeText(await autoloadString());
});

async function getCompressed() {
    return bytesToBase64(await compress(editor.getValue()));
}

function populateProjects() {
    const el = get("#projects")!;
    el.innerHTML = "";
    el.append(make("option",
        { value: "", selected: "true" },
        "--select app--"));
    const groups = [];
    // do saved examples
    localStorage[LOCAL_SAVE_KEY] ??= "{}";
    const stored = Object.keys(JSON.parse(localStorage[LOCAL_SAVE_KEY])).sort();
    if (stored.length > 0)
        groups.push(
            make(
                "optgroup",
                { label: "Local Saves" },
                ...stored.map(slot =>
                    make("option",
                        { value: JSON.stringify({ saved: slot }) },
                        slot),
                )));
    // do builtin examples
    const gc = Object.groupBy(EXAMPLES, x => x.category);
    for (var category of Object.keys(gc).sort()) {
        const examples = gc[category]!;
        groups.push(
            make(
                "optgroup",
                { label: "Examples " + category },
                ...examples.map(ex =>
                    make("option",
                        { value: JSON.stringify({ example: ex.id }) },
                        ex.title ?? ex.id),
                )));
    }
    el.append(...groups);
}

function changeURL(search: string, hash: string) {
    const url = new URL(window.location.href);
    url.search = search;
    url.hash = hash;
    history.replaceState(null, "", url);
}
