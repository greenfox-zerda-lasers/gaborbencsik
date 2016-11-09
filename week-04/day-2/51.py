# Create a Rectangle class
# That stores its size and its coordinates
# it should have a method called is_over, that takes an other Rectangle and
# returns True if the two rectangles are overlaping and returns False otherwise

class Rectangle():

    def __init__(self, x, y, width, height):
        self.x = x
        self.y = y
        self.width = width
        self.height = height

    def is_over(self, other):
        result: False
        print (other.x, other.y, other.width, other.height)
        if other.x >= self.x and other.x <= self.x




rectangle1 = Rectangle(0,0,50,100)
rectangle2 = Rectangle(10,10,30,110)

rectangle1.is_over(rectangle2)
