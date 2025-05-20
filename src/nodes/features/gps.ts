import { Port } from "../../common/nodeDef";
import { Point } from "../../common/otherTypes";
import { defNode } from "../all";

defNode({
    id: "gps",
    category: "Device",
    inputs: {},
    outputs: {
        pos: new Port("point", Point.EMPTY),
        altitude: new Port("number", 0),
        heading: new Port("number", 0),
        speed: new Port("number", 0),
    },
    doc: `Watches your device's GPS position and outputs position and movement data.

    The point that \`gps\` sends for :pos is of the form \`{x: longitude, y: latitude}\`.

    Altitude, heading, and speed may not be available or may be totally incorrect depending on your device.
    (Mine always returns 0 for altitude even though I am most certainly not at sea level.)`,
    setup({ app, node }) {
        navigator.geolocation.watchPosition(arg => {
            const coords = arg.coords;
            console.log(coords);
            node.output("pos", new Point(coords.longitude, coords.latitude));
            if (coords.altitude !== null) node.output("altitude", coords.altitude);
            if (coords.heading !== null) node.output("heading", coords.heading);
            if (coords.speed !== null) node.output("speed", coords.speed);
        }, err => {
            console.error(err);
            switch (err.code) {
                case GeolocationPositionError.PERMISSION_DENIED:
                    app.error(err.message ?? "Permission denied to access geolocation data");
                    break;
                case GeolocationPositionError.POSITION_UNAVAILABLE:
                    app.warn(err.message ?? "Error getting geolocation data");
                    break;
                case GeolocationPositionError.TIMEOUT:
                    app.warn(err.message ?? "Timed out trying to get geolocation data");
                    break;
            }
        });
    }
});
