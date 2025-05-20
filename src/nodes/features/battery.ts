import { Port } from "../../common/nodeDef";
import { defNode } from "../all";

defNode({
    id: "battery",
    category: "Device",
    inputs: {},
    outputs: {
        level: new Port("number", 0),
        charging: new Port("boolean", false),
    },
    doc: `Utilizes the [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)
    to access battery data. The level output is a number between 0 and 1 representing the battery level.
    The charging output is a boolean indicating if the battery is charging.`,
    async setup({ node, app }) {
        if (!("getBattery" in navigator)) {
            app.error("Battery API not supported");
            return;
        }
        const battery = await (navigator.getBattery as any)();
        battery.addEventListener("levelchange", () => {
            node.output("level", battery.level);
        });
        battery.addEventListener("chargingchange", () => {
            node.output("charging", battery.charging);
        });
        node.output("level", battery.level);
        node.output("charging", battery.charging);
    },
});
