# Create an "elevator" class
# The class should track the following things:
#  - elevator position (0-11)
#  - elevator direction (NO)
#  - people in the elevator (count) (>=0)
#  - add people (+=) (max)
#  - remove people (-=) (min)
#
# Please remeber that negative amount of people would be troubling

class Elevator:
    data = {}

    def __init__(self):
        self.data = {
            "position": 0,
            "people_in": 0,
            "top_floor": 11, # ----> Hogyan kerül ide?
        }

    def go_up(self):
        self.data["position"] += 1
        return self.data

    def go_down(self):
        self.data["position"] -= 1
        return self.data

    def add_people(self):
        self.data["people_in"] += 1
        return self.data

    def remove_people(self):
        self.data["people_in"] -= 1
        return self.data
