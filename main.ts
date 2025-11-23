function fallingfromtheskygame () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    led.plot(fallfromtheskygamerandomnumberbetween1and5, 0)
    basic.pause(400)
    led.plot(fallfromtheskygamerandomnumberbetween1and5, 1)
    basic.pause(400)
    led.plot(fallfromtheskygamerandomnumberbetween1and5, 2)
    basic.pause(400)
    led.plot(fallfromtheskygamerandomnumberbetween1and5, 3)
    basic.pause(400)
    led.plot(fallfromtheskygamerandomnumberbetween1and5, 4)
    basic.pause(100)
}
function abalert () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.clearScreen()
}
function loading () {
    basic.pause(100)
    music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . # . .
        # . # . #
        . # . # .
        # . # . #
        . . # . .
        `)
    basic.pause(100)
    music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # . # .
        . . # . .
        # # . # #
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        # . # . #
        . # . # .
        # . # . #
        . . . . .
        `)
    basic.pause(100)
    music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            . . # . .
            . # . # .
            `)
        basic.pause(100)
        music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        music.play(music.stringPlayable("- A C G E B C5 D ", 300), music.PlaybackMode.InBackground)
    }
    basic.showLeds(`
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
function menu () {
    abalert()
    fallfromtheskygamerandomnumberbetween1and5 = randint(1, 5)
    fallingfromtheskygame()
}
input.onGesture(Gesture.TiltLeft, function () {
    if (led.point(0, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `)
        basic.pause(400)
    }
    if (led.point(1, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.pause(400)
    }
    if (led.point(2, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.pause(400)
    }
    if (led.point(3, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            `)
        basic.pause(400)
    }
    if (led.point(4, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.pause(400)
    }
    if (led.point(5, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.pause(400)
    }
})
input.onButtonPressed(Button.AB, function () {
    menu()
})
input.onGesture(Gesture.TiltRight, function () {
    if (led.point(0, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `)
    }
    if (led.point(1, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    }
    if (led.point(2, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            `)
    }
    if (led.point(3, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    }
    if (led.point(4, 0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    }
})
let fallfromtheskygamerandomnumberbetween1and5 = 0
loading()
menu()
