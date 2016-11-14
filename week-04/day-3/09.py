#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from tkinter import *
root = Tk()

size = 300
canvas = Canvas(root, width=size, height=size)
canvas.pack()


def square_drawing(x):
    canvas.create_rectangle(size/2 - x/2, size/2 - x/2, size/2 + x/2, size/2 + x/2, fill="green")
    print (size/2-x)
    print (size/2)


square_drawing(120)
square_drawing(50)
square_drawing(20)


root.mainloop()
