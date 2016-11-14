#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# fill it with a checkerboard pattern.

from tkinter import *
root = Tk()

size = 700
canvas = Canvas(root, width=size, height=size)
canvas.pack()

def square_drawing(x):
    for i in range(x):
        for j in range(x):
            if i % 2 == 0 and j % 2 != 0 or i % 2 != 0 and j % 2 == 0:
                canvas.create_rectangle(i * size//x, j * size//x, i * size//x + size//x, j * size//x + size//x, fill= "black")


square_drawing(100)
root.mainloop()
