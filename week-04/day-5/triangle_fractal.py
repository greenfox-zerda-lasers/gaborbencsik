#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3
import time
from tkinter import *
root = Tk()

canvas_size = 500
canvas = Canvas(root, width=canvas_size, height=canvas_size)
canvas.pack()
height_ratio = 3**.5/2

def triangle(x, y, size, color):
    canvas.create_polygon(x, y, x+size, y, x+size/2, y+size*height_ratio, fill=color)

def draw_fractal(n, x, y, size, color):
    if n == 0:
        return
    else:
        triangle(x, y, size, color)
        draw_fractal(n-1, x, y, size/2, "blue") #left
        draw_fractal(n-1, x+size/2, y, size/2, "red") #right
        draw_fractal(n-1, x+size/4, y+size/2*height_ratio, size/2, "green") #bottom
draw_fractal(8, 0, 0, 500, "white")
root.mainloop()
