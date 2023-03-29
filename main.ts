let Pulse = 0
let GSR = 0
let Breathing = 0
music.playTone(262, music.beat(BeatFraction.Whole))
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate9600)
basic.forever(function () {
    Pulse = pins.analogReadPin(AnalogPin.P0)
    GSR = pins.analogReadPin(AnalogPin.P1)
    Breathing = pins.analogReadPin(AnalogPin.P2)
    dataStreamer.writeNumberArray([
    Pulse,
    GSR,
    Breathing
    ])
    serial.writeNumbers([
    Pulse,
    GSR,
    Breathing
    ])
})
