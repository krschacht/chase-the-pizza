sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
scene.setBackgroundColor(7)
scene.setBackgroundImage(img`
    999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999
    999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeee222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999
    999999999999999999eeeeeeeeeeeeeeeeeeeeeeeee22222eeeeeeeeeeeeeeeeeeeeee222eeeeeeeeeeeeeeeeeeeeeeeeee22222eeeeeeeeeeeeeeeee22eeeeeeeeeeeeee22eee999999999999999999
    999999999999999999eeeeeeeeeeeeeeeeeeeeeeeee22222eeeeeeeeeeeeeeeeeeeee222222eeeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeeeeeeeee2222eeeeeeeeeeee2222ee999999999999999999
    999999999999999999eeeeee2222eeeeeeeeeeeeee222222eeeeeeeeeeeeeeeeeeeee222222eeeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeeeeeeee22222eeeeeeeeeee22222ee999999999999999999
    999999999999999999eeeeee22222eeeeeeeeeeeee22222eeeeeeeeeeeeeeeeeeeeee22222eeeeeeeeeeeeeeeeeeeeeeee22222eeeeeeeeeeeeeeee22222eeeeeeeeeee22222ee999999999999999999
    9999999999999999999999922222299999999999992222299999eeeeeeeeeeeeeeeeeee22eeeeeeeeeeeeeeeeeeeeeeeeee222eeeeeeeee9999999922222999999999992222299999999999999999999
    9999999999999999999999992222999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999992299999999999992229999999999999999999999
    9999999999999999999999999222999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
let Bear = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
Bear.setPosition(5, 110)
controller.moveSprite(Bear)
let Wolf = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
Wolf.setPosition(140, 110)
info.setLife(1)
Bear.setStayInScreen(true)
Wolf.setStayInScreen(true)
tiles.setTilemap(tilemap`level1`)
game.onUpdateInterval(200, function () {
    if (Bear.x > Wolf.x) {
        Wolf.x += 1
    } else {
        Wolf.x += -1
    }
})
