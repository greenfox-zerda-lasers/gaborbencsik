#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

import random
from tkinter import *
root = Tk()

size = 300
canvas = Canvas(root, width=size, height=size)
canvas.pack()
colors = ["blue", "red", "yellow", "green", "white", "violet", "orange"]

def square_drawing(x, fill_color):
    canvas.create_rectangle(size/2 - x/2, size/2 - x/2, size/2 + x/2, size/2 + x/2, fill = random.choice(colors))

square_drawing(10,random.choice(colors))

root.mainloop()
