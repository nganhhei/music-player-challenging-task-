input.onButtonPressed(Button.A, function () {
	
})
for (let index = 0; index <= 3; index++) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playMelody("- - - - - - - - ", 120)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.changeTempoBy(20)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.setVolume(0)
        music.stopMelody(MelodyStopOptions.All)
        music.stopAllSounds()
    }
})
