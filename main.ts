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
    basic.pause(500)
    music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . # . .
        # . # . #
        . # . # .
        # . # . #
        . . # . .
        `)
    basic.pause(500)
    music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # . # .
        . . # . .
        # # . # #
        . . # . .
        . # . # .
        `)
    basic.pause(500)
    music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        # . # . #
        . # . # .
        # . # . #
        . . . . .
        `)
    basic.pause(500)
    music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            . . # . .
            . # . # .
            `)
        basic.pause(500)
        music.play(music.stringPlayable("- A C G E B C5 D ", 1000), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . # . # .
            . . # . .
            `)
        basic.pause(500)
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
    fallingfromtheskygame1()
}
function fallingfromtheskygame1 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    led.plot(1, fallfromtheskygamerandomnumberbetween1and5)
    led.plot(2, fallfromtheskygamerandomnumberbetween1and5)
    led.plot(3, fallfromtheskygamerandomnumberbetween1and5)
    led.plot(4, fallfromtheskygamerandomnumberbetween1and5)
    if (led.point(5, fallfromtheskygamerandomnumberbetween1and5)) {
        led.unplot(4, fallfromtheskygamerandomnumberbetween1and5)
    }
}
let fallfromtheskygamerandomnumberbetween1and5 = 0
fallfromtheskygamerandomnumberbetween1and5 = randint(1, 5)
loading()
menu()
