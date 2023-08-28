TM1650.on()
let score = 0
TM1650.showNumber(score)
basic.forever(function () {
    if (ModuleWorld_Digital.IR(ModuleWorld_Digital.mwDigitalNum.P2P3, ModuleWorld_Digital.enObstacle.Obstacle)) {
        score = score + 1
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
        TM1650.showNumber(score)
        basic.pause(100)
    }
})
