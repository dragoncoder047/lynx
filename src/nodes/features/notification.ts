import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "notification",
    category: "Device",
    inputs: {
        title: new Port("string", "Notification"),
        body: new Port("string", ""),
        icon: new Port("string", ""),
        trigger: new Port("signal", undefined),
    },
    outputs: {},
    doc: `Sends a notification using the [Web Notification API](https://developer.mozilla.org/docs/Web/API/notification)
    when :trigger is received.`,
    update({ node, app, changes }) {
        if (changes.trigger) {
            if (!("Notification" in window)) {
                app.error("Web Notification API not supported");
                return;
            }
            if (Notification.permission === "granted") {
                // having the invocation of the constructor actually do the sending is strange
                // i would expect a .send() method but whatever
                new Notification(node.get("title"), {
                    body: node.get("body"),
                    icon: node.get("icon") || undefined,
                });
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then(() => node.send("trigger", undefined, undefined));
            } else {
                app.error("Notification permission denied");
            }
        }
    },
});
