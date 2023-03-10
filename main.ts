radio.onReceivedNumber(function (receivedNumber) {
    ball = game.createSprite(receivedNumber, 0)
    for (let index = 0; index < 4; index++) {
        ball.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (ball.isTouching(player)) {
        game.gameOver()
    }
    game.addScore(1)
    num_balls += 1
    ball.delete()
})
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (num_balls > 0) {
        radio.sendNumber(player.get(LedSpriteProperty.X))
        num_balls += -1
    }
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    channel += 1
    basic.showNumber(channel)
    radio.setGroup(channel)
})
let ball: game.LedSprite = null
let num_balls = 0
let channel = 0
let player: game.LedSprite = null
radio.setGroup(1)
player = game.createSprite(2, 4)
channel = 1
num_balls = 3
basic.forever(function () {
	
})
