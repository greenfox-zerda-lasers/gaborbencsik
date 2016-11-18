# Create a class the displays the Elevator art and navigation (list of commands)
import os

class DisplayElevator:

    def __init__(self):
        self.art = {
            "ground": "  .'_______________________________'.",
            "0": "    _||_||_[_{0}_]_||_||_______||_||_",
            "1": "    _||_||_______||_||_______||_||_",
            "floor_empty": "     || ||       || ||       || ||",
            "floor_ev": "     || || [_{0}_] || ||       || ||",
            "top":"  ___________________________________\n  '._______________________________.'"
        }
        self.game = {
            "intro": "\nHello Welcome to Gábor\'s the elevator simulation.\nYou can move the elevator up (w) and down (s) using your keyboard. It is also possible to let people into the elevator (a) and take them out (d):\n\nMove up: w\nMove down: s\nLet people in: a\nLet people out: d\n\nAt one occasion only one instruction can be given.",
            "give_command": "What do you want to do?",
            "floor": "How high must be the building?"
        }

    def display(self, data): # people_in(0 vagy !=0), position (0-11)
        os.system('cls' if os.name == 'nt' else 'clear')
        print(self.art["top"])

        for i in range(data["top_floor"], -1, -1):
            if i == data["position"] and data["position"] == 0:
                print(self.art["0"].format(self.people_in_elevator(data)))
            elif i == data["position"]:
                print(self.art["floor_ev"].format(self.people_in_elevator(data)))
            else:
                if data["position"] != 0 and i == 0:
                    print(self.art["1"])
                else:
                    print(self.art["floor_empty"])

        print(self.art["ground"])

    def people_in_elevator(self, data):
        if data["people_in"] <= 0:
            return "_"
        else:
            return "X"

    def print_text(self, key):
        print(self.game[key])

# Draw_building = DisplayElevator()

# replace() fájlnév, példánynév, függvénynév
