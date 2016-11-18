import os
import text

class Display:
    def __init__(self):

        os.system('cls' if os.name == 'nt' else 'clear')

    def print_intro(self):
        print(text.intro['todo_intro'])

    def show_list(self, tasks):
        os.system('cls' if os.name == 'nt' else 'clear')
        for i,t in enumerate(tasks):
            print(str(i+1) + " - " + t[:-1])








# ide jön a lista kiprintelése
