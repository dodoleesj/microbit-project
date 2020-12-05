input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 90)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.West)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 90)
})
basic.showIcon(IconNames.Yes)
pins.servoWritePin(AnalogPin.P0, 90)
