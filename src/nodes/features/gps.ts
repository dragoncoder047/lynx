import { Feature } from "../../common/feature";
import { Port } from "../../common/nodeDef";
import { defFeature, defNode } from "../all";
import { Point } from "../../common/otherTypes";

defFeature("geolocation", new Feature(async () => {
    const result = await navigator.permissions.query({ name: "geolocation" });
    if (result.name === "denied")
        throw new RangeError("This app need sto know your geolocation, but you denied Lynx permission to access it. Check your browser settings and try again.");
    if (result.name == "prompt")
        // trigger the prompt
        navigator.geolocation.getCurrentPosition(() => { }, () => { }, { enableHighAccuracy: true });
}, {
    doc: `Accesses the device's current GPS location and makes position updates available to the app.
    If you haven't already granted permission, you will be prompted to let Lynx access your geolocation when the app starts.`,
    watch(cbOK: PositionCallback, cbErr: PositionErrorCallback) {
        // first to start
        navigator.geolocation.getCurrentPosition(cbOK, cbErr, { enableHighAccuracy: true });
        // further changes
        navigator.geolocation.watchPosition(cbOK, cbErr, { enableHighAccuracy: true });
    }
}));

defNode({
    id: "gps",
    inputs: {},
    features: ["geolocation"],
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
    setup({ app, node, features }) {
        features.geolocation!.watch((arg: GeolocationPosition) => {
            const coords = arg.coords;
            console.log(coords);
            node.output("pos", new Point(coords.longitude, coords.latitude));
            if (coords.altitude !== null) node.output("altitude", coords.altitude);
            if (coords.heading !== null) node.output("heading", coords.heading);
            if (coords.speed !== null) node.output("speed", coords.speed);
        }, (err: GeolocationPositionError) => {
            console.error(err);
            switch (err.code) {
                case GeolocationPositionError.PERMISSION_DENIED:
                    app.error("Permission denied when getting geolocation data.");
                    break;
                case GeolocationPositionError.POSITION_UNAVAILABLE:
                    app.warn("Geolocation is not available");
                    break;
                case GeolocationPositionError.TIMEOUT:
                    app.warn("Timed out trying to get geolocation");
                    break;
            }
        });
    }
});
