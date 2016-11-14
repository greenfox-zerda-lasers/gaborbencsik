#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

from tkinter import *
root = Tk()

size = 300
canvas = Canvas(root, width=size, height=size)
canvas.pack()
offset = 0

def square_drawing(x):
    global offset
    for i in range(20):
        canvas.create_rectangle(x + offset,x + offset,2*x + offset,2*x + offset, fill = "purple")
        offset += x

square_drawing(10)
root.mainloop()
