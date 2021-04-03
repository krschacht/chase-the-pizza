sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    donut.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(5)
})
let donut: Sprite = null
scene.setBackgroundColor(7)
let xman = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 . 2 2 2 2 2 . . 
    . . 2 2 2 f f 2 2 2 f f 3 2 . . 
    . 2 2 3 3 f f f f f f 3 3 2 2 . 
    . 2 f f 3 3 f f f f 3 3 f f 2 . 
    . 2 f f f 3 3 f f 3 f f f f 2 . 
    . 2 f f f f 3 f 3 f f f f f 2 . 
    . 2 f f f f f 3 f f f f f f 2 . 
    . 2 f f f f 3 f 3 f f f f f 2 . 
    . 2 f f f 3 f f 3 3 f f f f 2 . 
    . 2 f f 3 f f f f f 3 f f f 2 . 
    . 2 f 3 f f f f f f 3 3 f 2 2 . 
    . 2 3 f f f f f f f f 3 3 2 . . 
    . 2 2 f f f f f f f f f 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(xman)
donut = sprites.create(img`
    . . . . . . . . 8 8 8 . . . . . 
    . . . . . . 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 8 . . . 
    . . . . 8 8 8 . . . 8 8 8 8 . . 
    . . . . 8 8 . . . . . 8 8 8 . . 
    . . . 8 8 . . . . . . . 8 8 . . 
    . . . 8 . . . . . . . . 8 8 . . 
    . . 8 8 . . . . . . . . 8 . . . 
    . . 8 8 . . . . . . . 8 8 . . . 
    . . 8 8 8 . . . . . 8 8 . . . . 
    . . 8 8 8 . . . . 8 8 8 . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
