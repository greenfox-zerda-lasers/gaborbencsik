# Create an elevator controller class
# It should take an user input by listening to user input
# List of commands:
#
#  - Move elevator up
#  - Move elevator down
#  - Add people
#  - Remove people
#
#  Features to implement:
#   - Always draw the state of the elevator as depicted in "art.txt"
#   - [ x ] is the elevator. X means it has at least 1 person inside
#   - Moving floors should take time (sleep)
#   - don't move beyond limits
#
# Create the class with MVC pattern in mind. It should get and store data in the model object
# and it should pass the data to the view objects

import model_el
import view_el

class Controller:

    def __init__(self):
        self.model = model_el.Elevator()
        self.view = view_el.DisplayElevator()
        self.is_running = True
        self.floor_nr()


    def get_command(self):
        command = input(self.view.game["give_command"])
        if len(command) == 1 and command.isalpha():
            return command
        else:
            False

    def floor_nr(self):
        floor = int(input(self.view.game["floor"]))
        if floor < 20 and floor > 1:
            self.model.data["top_floor"] # ---> Nem megy oda.
        else:
            False

    def game_play(self):
        while self.is_running:
            self.view.display(self.model.data)
            self.view.print_text("intro")
            self.movement()


    def movement(self):
        move = self.get_command()
        if move == "w":
            self.model.go_up()
        elif move == "s":
            self.model.go_down()
        elif move == "a":
            self.model.add_people()
        elif move == "d":
            self.model.remove_people()
        elif move == "q":
            exit()







Test_elevator = Controller()
Test_elevator.game_play()
