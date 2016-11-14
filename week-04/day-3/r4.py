#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

from tkinter import *
root = Tk()

size = 300
canvas = Canvas(root, width=size, height=size)
canvas.pack()
offset = 0
multiplier = 20

def square_drawing(x):
    global offset
    global multiplier
    for i in range(7):
        canvas.create_rectangle(offset,offset, i* x+ offset,i * x + offset, fill = "purple")
        offset += x *i

square_drawing(10)

root.mainloop()
