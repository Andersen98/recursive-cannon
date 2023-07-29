import kaboom, { Vec2 } from "kaboom"
import "kaboom/global"
import { getJoystickInvertedAngle } from "./joystick-helper"
import { addButton } from "./gui-helper"

kaboom({
    background: [135, 62, 132],
})


// load assets
loadSprite("bean", "sprites/bean.png")

//debug joystick scene
add([
    anchor("left"),
    circle
])
scene("menu", () => {
    //from button demo https://kaboomjs.com/play?example=button
    // reset cursor to default on frame start for easier cursor management
    onUpdate(() => setCursor("default"))

    addButton("View Cannon", vec2(200, 100), () => { go("cannon") })
    addButton("Joystic Debug", vec2(200, 200), () => { go("debugJoystick") })
    addButton("Game", vec2(200, 300), () => { go("game") })
    addButton("Quit", vec2(200, 400), () => { quit() })



})
scene("game", () => {
    //exit path onKeyPress("q", () => { go("menu") })
    add([
        text("press q to return"),
        pos(24, 24),
    ])
    onKeyPress("q", () => { go("menu") })

    // add a character to screen
    const bean = add([
        // list of components
        sprite("bean"),
        pos(80, 130),
        area(),
        rotate(0),
        anchor("center"),
    ])

    // add a kaboom on mouse click
    onClick(() => {
        addKaboom(mousePos())
    })


    // burp on "b"
    onKeyPress("b", () => {
        burp()
    })
    onKeyPress("d", () => {
        go("debugJoystick")
    })

})
scene("debugJoystick", () => {
    //exit path
    onKeyPress("q", () => { go("menu") })
    add([
        text("press q to return"),
        pos(24, 24),
    ])


    add([
        text("LEFT STICK ANGLE"),
        pos(0.1 * width(), 200),
        anchor("botleft"),
    ])
    const angleText = add([
        text("0"),
        pos(0.1 * width(), height() - 200),
    ])
    const bean = add([
        sprite("bean"),
        rotate(0),
        pos(width() - 100, 100),
        anchor("center")
    ])
    onGamepadStick("left", (v) => {
        var angle = getJoystickInvertedAngle({ x_: v.x, y_: v.y });
        bean.rotateTo(-angle);
        angleText.text = String(angle);

    })
})
scene("cannon", () => {
    const CANNON_BASE_HEIGHT = 60
    const CANNON_BASE_WIDTH = 150
    const CANNON_BARREL_HEIGHT = 40
    const CANNON_BARREL_WIDTH = 120
    const CANNON_WHEEL_RADIUS = 30

    const cannonBase = add([
        rect(CANNON_BASE_WIDTH, CANNON_BASE_HEIGHT),
        color(255, 0, 00),
        area(),
        pos(0.5 * width(), 0.5 * height()),
        anchor("center")
    ])
    // Add multiple game objects
    for (let i = 0; i < 2; i++) {

        // generate a random point on screen
        // width() and height() gives the game dimension
        const x = (i - 0.5) * CANNON_BASE_WIDTH
        const y = 0.5 * CANNON_BASE_HEIGHT

        cannonBase.add([
            circle(CANNON_WHEEL_RADIUS),
            anchor("center"),
            pos(x, y),
        ])

    }

    const cannonBarrel = cannonBase.add([
        rect(CANNON_BARREL_WIDTH, CANNON_BARREL_HEIGHT),
        anchor("left"),
        color(25, 25, 25),
        pos(0, -0.5 * CANNON_BASE_HEIGHT),
        rotate(0),
    ])
    cannonBarrel.add([
        circle(0.5 * CANNON_BARREL_HEIGHT),
        color(50, 50, 50)

    ])

    cannonBarrel.onUpdate(() => {
        cannonBarrel.angle += 120 * dt()
    })
    onKeyPress("q", () => { go("menu") })
    add([
        text("press q to return"),
        pos(24, 24),
    ])
})
go("menu")