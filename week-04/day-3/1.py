#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3
from tkinter import *
root = Tk()

canvas = Canvas(root, width = 500, height = 500)
redline = canvas.create_line(50, 50, 100, 100, fill = "red")
greenline = canvas.create_line(0,0,110,200, fill = "green")
canvas.pack()
root.mainloop()
