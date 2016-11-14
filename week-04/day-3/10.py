#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# create a loop that draws 20 squares with that function.

import random
from tkinter import *
root = Tk()

size = 300
canvas = Canvas(root, width=size, height=size)
canvas.pack()
colors = ["blue", "red", "yellow", "green", "tomato", "white", "black", "violet", "orange", "purple"]


def square_drawing(x):
    canvas.create_rectangle(size/2 - x/2, size/2 - x/2, size/2 + x/2, size/2 + x/2, fill = random.choice(colors))

for square in range(300,0,-20):
    square_drawing(square)
root.mainloop()
