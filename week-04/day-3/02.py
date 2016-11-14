
#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# create a 300x300 canvas.
# draw a box that has different colored lines on each edge.

from Tkinter import *
root = Tk()

canvas = Canvas(root, width=300, height=300)
canvas.pack()
canvas.create_line(20, 20, 100, 20, fill = 'red')
canvas.create_line(100, 20, 100, 100, fill = 'blue')
canvas.create_line(100, 100, 20, 100, fill = 'green')
canvas.create_line(20, 20, 20, 100, fill = 'purple')


root.mainloop()
