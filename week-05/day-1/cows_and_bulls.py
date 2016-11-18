#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

from random import randint
class CowsBulls():
    guesses = []
    result = []

    def __init__(self):
        self.result = [randint(1,9), randint(0,9), randint(0,9), randint(0,9)]

    def guess_one(self):
        self.guesses = list(input("Guess a for digit number: "))

    def comparison(self):
        if self.result[0] == self.guesses[0]:
            return "Cow"
        
