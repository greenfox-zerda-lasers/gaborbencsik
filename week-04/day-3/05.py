#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

from tkinter import *
root = Tk()

canvas = Canvas(root, width=300, height=300)
canvas.pack()

def line_drawing(x,y):
    canvas.create_line(x, y, x+50, y, fill = 'green')

line_drawing(50, 50)
line_drawing(120, 100)
line_drawing(200, 200)


root.mainloop()
