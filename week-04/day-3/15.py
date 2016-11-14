#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# create a function that takes 1 parameter:
# a list of [x, y] points
# and connects them with green lines.
# connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
# connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
# [120, 100], [85, 130], [50, 100]]

from tkinter import *
root = Tk()

size = 300
canvas = Canvas(root, width=size, height=size)
canvas.pack()



root.mainloop()
