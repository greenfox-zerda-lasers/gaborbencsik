#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

from tkinter import *
root = Tk()

canvas = Canvas(root, width=300, height=300)
canvas.pack()

def square_drawing(x,y):
    canvas.create_rectangle(x, y, x+50, y+50, fill="green")

square_drawing(20,20)
square_drawing(80,30)
square_drawing(200,20)
root.mainloop()
