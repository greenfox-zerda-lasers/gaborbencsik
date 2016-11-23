from tkinter import *

class AppView:
	def __init__(self,size):
		self.size = size
		self.root = Tk()
		self.canvas = Canvas(self.root, width=self.size, height=self.size)
		self.canvas.pack()
		self.canvas.focus_set()

	def clear(self):
		# This is a very bad idea
		# Read: http://stackoverflow.com/questions/15839491/how-to-clear-tkinter-canvas
		self.canvas.create_rectangle(0, 0, self.size, self.size, fill="black")

	def draw(self,x,y):
		self.clear()
		self.canvas.create_rectangle(x - 75, y - 40, x + 75, y + 40, fill="blue")

	def show(self):
		self.canvas.mainloop()

##########################################################

class App: #controller
	def __init__(self):
		self.view = AppView(600)
		self.view.canvas.bind('<Button-1>', self.listen)

	def start(self):
		self.view.show()

	def listen(self, event):
		self.view.draw( event.x, event.y )

app = App()
app.start()
