function Rijden () {
    let message = 0
    code = message
    if (code == vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, snelheid)
    }
    if (code == stop) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
    if (code == rechts) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (code == links) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, snelheid)
    }
}
function toonSignalen (code: number) {
    basic.showString("" + (code))
}
maqueenIR.onPressEvent(RemoteButton.Power, function () {
	
})
maqueen.IR_callbackUser(function (message) {
    code = message
    toonSignalen(code)
})
let code = 0
let snelheid = 0
let links = 0
let rechts = 0
let stop = 0
let vooruit = 0
vooruit = 155
stop = 220
rechts = 159
links = 151
snelheid = 20
let harder = 146
basic.forever(function () {
	
})
