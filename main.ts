basic.forever(function () {
    serial.writeLine("Temps au tour")
    serial.writeLine("" + (input.runningTime()))
})
