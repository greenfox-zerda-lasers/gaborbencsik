#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# divide the canvas into 4 parts and repeat the pattern.
# reproduce this: [https://github.com/greenfox-velox/velox-syllabus/blob/master/week-04/3-graphics/workshop/r2.png]
# can you make the colors change? make every line a different color.

import random
from tkinter import *
root = Tk()

size = 300
canvas = Canvas(root, width=size, height=size)
canvas.pack()
colors = ["blue", "red", "yellow", "green", "tomato", "white", "black", "violet", "orange", "purple"]

def draw_lines():
    for i in range(0, size, 5):
        canvas.create_line(0, size/2-i, size/2-i, size/2, fill=random.choice(colors))
        canvas.create_line(0+i, size/2, size/2, 0+i, fill=random.choice(colors))

draw_lines()
root.mainloop()

# canvas.create_line(0, size-i, size-i, size, fill=random.choice(colors))
# canvas.create_line(0+i, 0, size, 0+i, fill=random.choice(colors))
