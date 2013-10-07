#!/usr/bin/env python


import serial, time


s = serial.Serial()
s.baudrate = 9600
s.timeout = 0
s.port = "/dev/ttyAMA0"

try:
    s.open()
except serial.SerialException, e:
    sys.stderr.write("could not open port %r: %s\n" % (port, e))
    sys.exit(1)

s.write("$$$ALL,OFF\r")

try:
    mode=int(raw_input('Paste input string:'))
    s.write("$$$F"+mode+"\r")
except ValueError:
    print "Invalid command"

