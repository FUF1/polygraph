let RawPulse = 0
basic.forever(function () {
    RawPulse = pins.analogReadPin(AnalogPin.P2)
    led.plotBarGraph(
    RawPulse,
    500
    )
})
