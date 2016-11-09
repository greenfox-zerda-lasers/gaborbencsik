#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 black canvas.
# draw a red horizontal line to its middle.
# draw a green vertical line to its middle.

from tkinter import *
root = Tk()

canvas = Canvas(root, width=300, height=300)
line = canvas

root.mainloop()
