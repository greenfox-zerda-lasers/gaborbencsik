import random

class Character:

    tilemap = [
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]

    def __init__(self):

        self.hero_position = [0, 0, "down"] # x= vizszint y=függö
        self.skeleton_list = []

    def movement_validation(self, new_position):
        if new_position[1] < 0 or new_position[1] > len(self.tilemap):
            return False

        if new_position[0] < 0 or new_position[0] > len(self.tilemap)-1:
            return False
        # print(new_position)

        if self.tilemap[new_position[0]][new_position[1]] == 0:
            return False

        return True

    def move_down(self):
        self.hero_position[1] += 1
        self.hero_position[2] = "down"

    def move_up(self):
        self.hero_position[1] -= 1
        self.hero_position[2] = "up"

    def move_left(self):
        self.hero_position[0] -= 1
        self.hero_position[2] = "left"

    def move_right(self):
        self.hero_position[0] += 1
        self.hero_position[2] = "right"

class Skeleton:

    def __init__(self, position):
        self.position = position
        self.tilemap = Character.tilemap

    def movement_validation(self, new_position):
        if new_position[1] < 0 or new_position[1] > len(self.tilemap):
            return False

        if new_position[0] < 0 or new_position[0] > len(self.tilemap)-1:
            return False

        if self.tilemap[new_position[0]][new_position[1]] == 0:
            return False

        return new_position

    def move_skeleton_down(self):
        self.position[1] += 1

    def move_skeleton_up(self):
        self.position[1] -= 1

    def move_skeleton_left(self):
        self.position[0] -= 1

    def move_skeleton_right(self):
        self.position[0] += 1
