import { Port } from "../../common/nodeDef";
import { Point } from "../../common/otherTypes";
import { defNode } from "../all";

defNode({
    id: "gamepad",
    category: "Device",
    inputs: {
        index: new Port("number", 0),
        "rumble-left": new Port("number", 0),
        "rumble-right": new Port("number", 0),
        "rumble-lt": new Port("number", 0),
        "rumble-rt": new Port("number", 0),
    },
    outputs: {
        buttons: new Port("number", [], ["bus"]),
        axes: new Port("number", [], ["bus"]),
        connected: new Port("boolean", false),
        north: new Port("number", 0),
        south: new Port("number", 0),
        east: new Port("number", 0),
        west: new Port("number", 0),
        "dpad-up": new Port("number", 0),
        "dpad-down": new Port("number", 0),
        "dpad-left": new Port("number", 0),
        "dpad-right": new Port("number", 0),
        start: new Port("number", 0),
        select: new Port("number", 0),
        home: new Port("number", 0),
        "left-stick-press": new Port("number", 0),
        "right-stick-press": new Port("number", 0),
        "left-shoulder": new Port("number", 0),
        "right-shoulder": new Port("number", 0),
        "left-trigger": new Port("number", 0),
        "right-trigger": new Port("number", 0),
        "left-stick": new Port("point", new Point(0, 0)),
        "right-stick": new Port("point", new Point(0, 0)),
    },
    doc: `Utilizes the [web gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API)
    to access gamepad data. The gamepad index is the index of the gamepad in the list of connected gamepads.
    The rumble inputs are used to control the rumble of the gamepad.
    The buttons and axes outputs are arrays of button and axis values which can be used to access buttons and axes
    when the gamepad is a non-standard layout.`,
    async tick({ node, dt }) {
        const dtMillis = 1000 * Math.max(dt, 5);
        const gamepad = navigator.getGamepads()[node.get("index")];
        node.output("connected", !!gamepad);
        if (!gamepad) return;

        // update inputs
        node.output("axes", gamepad.axes);
        node.output("buttons", gamepad.buttons.map((b) => b.value));
        for (const [name, index] of Object.entries(MAPPING.buttons)) {
            const value = gamepad.buttons[index]?.value;
            if (value === undefined) continue;
            node.output(name as keyof typeof MAPPING.buttons, value);
        }
        for (const [name, index] of Object.entries(MAPPING.sticks)) {
            const x = gamepad.axes[index.x];
            const y = gamepad.axes[index.y];
            if (x === undefined || y === undefined) continue;
            node.output(name as keyof typeof MAPPING.sticks, new Point(x, y));
        }
        // update outputs (rumble)
        const rumbleMotors: GamepadHapticActuator[] =
            // @ts-ignore
            // this is too new for typescript lol
            gamepad.hapticActuators
            ?? [];
        if (gamepad.vibrationActuator) rumbleMotors.push(gamepad.vibrationActuator);
        await Promise.all([
            ...rumbleMotors.map(motor => {
                try {
                    motor.playEffect("dual-rumble", {
                        strongMagnitude: node.get("rumble-left"),
                        weakMagnitude: node.get("rumble-right"),
                        duration: dtMillis
                    });
                } catch (e) { }
            }),
            ...rumbleMotors.map(motor => {
                try {
                    motor.playEffect("trigger-rumble", {
                        leftTrigger: node.get("rumble-lt"),
                        rightTrigger: node.get("rumble-rt"),
                        duration: dtMillis
                    });
                } catch (e) { }
            }),
        ]);
    }
});

const MAPPING = {
    "buttons": {
        south: 0,
        east: 1,
        west: 2,
        north: 3,
        "left-shoulder": 4,
        "right-shoulder": 5,
        "left-trigger": 6,
        "right-trigger": 7,
        select: 8,
        start: 9,
        "left-stick": 10,
        "right-stick": 11,
        "dpad-up": 12,
        "dpad-down": 13,
        "dpad-left": 14,
        "dpad-right": 15,
        home: 16
    },
    "sticks": {
        "left-stick": { "x": 0, "y": 1 },
        "right-stick": { "x": 2, "y": 3 }
    }
};
