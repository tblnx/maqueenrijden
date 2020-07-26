def on_press_power():
    pass
maqueenIR.on_press_event(RemoteButton.POWER, on_press_power)

def on_ir_callbackuser(message):
    global code
    code = message
    if code == vooruit:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, snelheid)
    if code == stop:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 0)
    if code == rechts:
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 20)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    if code == links:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 0)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, snelheid)
maqueen.IR_callbackUser(on_ir_callbackuser)

code = 0
snelheid = 0
links = 0
rechts = 0
stop = 0
vooruit = 0
vooruit = 155
stop = 220
rechts = 159
links = 151
snelheid = 20
harder = 146

def on_forever():
    pass
basic.forever(on_forever)
