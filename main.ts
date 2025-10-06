basic.showString("Hit the ball!")
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        # # # # .
        # # # # .
        # # # # .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        # # # . .
        # # # . .
        # # # . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # . . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
}
