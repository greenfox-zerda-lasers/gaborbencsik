#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

from tkinter import *
root = Tk()

canvas = Canvas(root, width=300, height=300)
canvas.pack()

def line_drawing(x,y):
    canvas.create_line(x, y, 150, 150, fill = 'green')

line_drawing(0,0)
line_drawing(200,0)
line_drawing(0,200)


root.mainloop()
