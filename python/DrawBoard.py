#!/usr/bin/env python

import serial, time, sys

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
	unformat=raw_input('Paste input string:')
	mode=int(unformat)
	while True:
		try:
			s.write("$$$F"+unformat+"\r")
			time.sleep(10)
		except KeyboardInterrupt:
			s.write("$$$ALL,OFF\r")
			print "Stopping"
			sys.exit()
except ValueError:
    print "Invalid command"
