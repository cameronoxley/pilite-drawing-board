pilite-drawing-board
====================

Web based drawing board for the Raspberry Pi PiLite LED Board.

**Note: make sure you have setup Raspberry Pi to connect with the PiLite before running any of the examples below.**

###Design a picture using the webpage:
Open *index.html*, draw a picture by clicking or dragging over the grid.
To select multiple blocks, you will need to hold the multi-select button on your keyboard. (*alt* on Windows, *cmd* on Mac)

Once you've finished your drawing you will see an output string at the bottom of the page: e.g.

000000000001110000011111000011111100001111110000111111000111111001111110011111100011111000001110000000000000000000000000000000

Simply copy and paste the output string into one of the methods below to view it on the PiLite.

####Using the Python script:

Design a picture using the webpage as described above.

Run `python ./DrawBoard`
Paste the output binary string once prompted.

####Using Minicom:

Design a picture using the webpage as described above.

Run minicom through the terminal on the device: e.g.

`minicom -b 9600 -o -D /dev/ttyAMA0`

Type: `$$$` in the minicom terminal to go to command mode, it should display **OK** on the terminal screen.

Type: `F`

Paste the output binary string into minicom and press carriage return.

Your picture should now be displayed on the PiLite LED Board.

To clear the text, press carriage return.