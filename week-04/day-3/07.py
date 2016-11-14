#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# fill it with four different size and color rectangles.

import random
from tkinter import *
root = Tk()

canvas = Canvas(root, width=300, height=300)
canvas.pack()
colors = ["blue", "red", "yellow", "green", "tomato", "white", "black", "violet", "orange", "purple"]


canvas.create_rectangle(10, 10, 20, 20, fill=random.choice(colors))
canvas.create_rectangle(40, 70, 90, 110, fill=random.choice(colors))
canvas.create_rectangle(130, 80, 100, 160, fill=random.choice(colors))
canvas.create_rectangle(200, 200, 300, 300, fill=random.choice(colors))

root.mainloop()
