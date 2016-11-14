#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

import random
from tkinter import *
root = Tk()

size = 300
canvas = Canvas(root, width=size, height=size)
canvas.pack()
colors = ["blue", "red", "yellow", "green", "tomato", "white", "black", "violet", "orange", "purple"]

def draw_line(x,y):
    for i in range(0, size, 10):
        for j in range (0, size, 10):
            canvas.create_line(x+i, x+j, size-i, size-j, fill = random.choice(colors))



draw_line(0,0)
root.mainloop()
