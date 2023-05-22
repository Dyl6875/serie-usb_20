radio.setGroup(107)
basic.forever(function () {
    radio.sendNumber(input.runningTime())
})
