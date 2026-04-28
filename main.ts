let Tool = 0
input.onGesture(Gesture.Shake, function () {
    Tool = randint(0, 2)
    if (Tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (Tool == 1) {
        basic.showIcon(IconNames.Square)
    }
    if (Tool == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
