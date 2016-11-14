#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

import time
from tkinter import *
root = Tk()

size = 600
canvas = Canvas(root, bg="yellow", width=size, height=size)
canvas.pack()
scale = 1/3

def r_f(n, x, y, size, color):
    if n == 0:
        return
    time.sleep(.001)
    canvas.create_rectangle(x, y, x+size, y+size, fill=color)

    r_f(n-1, x+size/3, y, size/3, "blue") # top
    r_f(n-1, x, y+size/3, size/3, "red") #left
    r_f(n-1, x+size/3, y+2*size/3, size/3, "green") #bottom
    r_f(n-1, x+2*size/3, y+size/3, size/3, "purple") # right
    canvas.update()

r_f(6, 0, 0, 600, "yellow")
root.mainloop()
