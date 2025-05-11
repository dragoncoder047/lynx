import { autoloadString } from '../common/autoload.js';
import { compress } from '../common/compress.js';
import { AUTOSAVE_KEY, LOCAL_SAVE_KEY, LYNX_FILE_EXT } from '../common/constants.js';
import { get, make } from '../common/html.js';
import { bytesToBase64 } from '../common/utils.js';
import { EXAMPLES } from '../examples/examples.js';
import { magic } from './lint.js';

populateProjects();

const editor = ace.edit("editor", {
    theme: "ace/theme/clouds_midnight",
    mode: "ace/mode/scheme"
});
editor.session.setOption("wrap", "free");
function changeText(text) {
    changeText.isRunning = true;
    try {
        editor.setValue(text, -1);
    } finally {
        changeText.isRunning = false;
    }
}
editor.on("change", async () => {
    if (!changeText.isRunning) {
        localStorage[AUTOSAVE_KEY] = await getCompressed();
        changeURL("", "");
    }
    // do linting
    await magic(editor.getValue(), editor.getSession());
});
changeText(await autoloadString());


const runIframe = get("loader");

get("browse").addEventListener("click", () => {
    open(import.meta.resolve("../examples"), "_blank");
});

get("run").addEventListener("click", async () => {
    runIframe.src = "../runner#" + await getCompressed();
});

get("save-url").addEventListener("click", async () => {
    changeURL("", "#" + await getCompressed());
});

get("help").addEventListener("click", () => {
    open("../docs", "_blank");
});

get("open-full").addEventListener("click", async () => {
    location = "../runner#" + await getCompressed();
});

get("save").addEventListener("click", async () => {
    const name = prompt("Name for app:");
    if (name === null) return;
    const store = JSON.parse(localStorage[LOCAL_SAVE_KEY]);
    store[name] = await getCompressed();
    localStorage[LOCAL_SAVE_KEY] = JSON.stringify(store);
    changeURL("?saved=" + name, "");
    populateProjects();
});

get("share").addEventListener("click", async () => {
    await navigator.share({
        url: new URL("../runner#" + await getCompressed(), location),
        text: editor.getValue(),
        title: "Lynx App",
        files: [new File([editor.getValue()], "app" + LYNX_FILE_EXT)]
    });
});

get("projects").addEventListener("change", async () => {
    const which = get("projects").value;
    get("projects").value = "";
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
    const el = get("projects");
    el.innerHTML = "";
    el.append(make("option",
        { value: "", selected: true },
        ["--select app--"]));
    const groups = [];
    // do saved examples
    localStorage[LOCAL_SAVE_KEY] ??= "{}";
    const stored = Object.keys(JSON.parse(localStorage[LOCAL_SAVE_KEY])).sort();
    if (stored.length > 0)
        groups.push(
            make(
                "optgroup",
                { label: "Local Saves" },
                stored.map(slot =>
                    make("option",
                        { value: JSON.stringify({ saved: slot }) },
                        [slot]),
                )));
    // do builtin examples
    const gc = Object.groupBy(EXAMPLES, x => x.category);
    for (var category of Object.keys(gc).sort()) {
        const examples = gc[category];
        groups.push(
            make(
                "optgroup",
                { label: "Examples " + category },
                examples.map(ex =>
                    make("option",
                        { value: JSON.stringify({ example: ex.id }) },
                        [ex.title ?? ex.id]),
                )));
    }
    el.append(...groups);
}

function changeURL(search, hash) {
    const url = new URL(location);
    url.search = search;
    url.hash = hash;
    history.replaceState(null, "", url);
}
