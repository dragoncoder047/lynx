import { Feature } from '../../common/feature.js';
import { Port } from '../../common/port.js';
import { defFeature, defNode } from '../all.js';
import { Point } from '../../common/otherTypes.js';

defFeature("geolocation", new Feature(async () => {
    const status = await navigator.permissions.query({ name: "geolocation" });
    if (status === "denied")
        throw new RangeError("This app need sto know your geolocation, but you denied Lynx permission to access it. Check your browser settings and try again.");
    if (status == "prompt")
        // trigger the prompt
        navigator.geolocation.getCurrentPosition();
}, {
    doc: "Accesses the device's gurrent GPS location and makes position updates available to the app. If you haven't already granted permission, you will be prompted to let Lynx access your geolocation when the app starts.",
    watch(cbOK, cbErr) {
        // first to start
        navigator.geolocation.getCurrentPosition(cbOK, cbErr, { enableHighAccuracy: true });
        // further changes
        navigator.geolocation.watchPosition(cbOK, cbErr, { enableHighAccuracy: true });
    }
}));

defNode({
    id: "gps",
    inputs: [],
    features: ["geolocation"],
    argTypes: [],
    outputs: [
        new Port("pos", "point"),
        new Port("altitude", "number"),
        new Port("heading", "number"),
        new Port("speed", "number"),
    ],
    doc: `Watches your device's GPS position and outputs position and movement data.
    <br>The point that <code>gps</code> sends is of the form <code>{x: longitude, y: latitude}</code>.
    <br>Altitude, heading, and speed may not be available depending on your device.`,
    setup({ app, node, features }) {
        features.geolocation.watch(({ coords }) => {
            node.output("pos", new Point(coords.longitude, coords.latitude));
            if (coords.altitude !== null) node.output("altitude", coords.altitude);
            if (coords.heading !== null) node.output("heading", coords.heading);
            if (coords.speed !== null) node.output("speed", coords.speed);
        }, err => {
            console.error(err);
            switch (err.code) {
                case 1:
                    app.error("Permission denied when getting geolocation data.");
                    break;
                case 2:
                    app.warn("Geolocation is not available");
                    break;
                case 3:
                    app.warn("Timed out trying to get geolocation");
                    break;
            }
        });
    }
});
