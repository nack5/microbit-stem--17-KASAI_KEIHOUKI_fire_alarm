led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        music.stopMelody(MelodyStopOptions.All)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Forever)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
    }
})
