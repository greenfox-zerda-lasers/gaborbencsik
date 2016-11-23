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
        self.create_skeletons()


    def movement_validation(self, new_position):
        if new_position[1] < 0 or new_position[1] > len(self.tilemap):
            return False

        if new_position[0] < 0 or new_position[0] > len(self.tilemap)-1:
            return False
        print(new_position)

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

    def create_skeletons(self):
        for i in range(random.randint(2,6)):
            skeleton = Skeleton()
            self.skeleton_list.append(skeleton)
            print(i)

            #Hogyan lehetne a skeletonokat dictionarybe beküldeni?

class Skeleton:

    def __init__(self):
        self.tilemap = Character.tilemap
        self.position = self.position_validation()

    def move_enemy(self):
        pass

    def position_validation(self):
        starting_position = [random.randint(0,9),random.randint(0,10)]
        print(starting_position)

        # Hogyan lehetne ezeket a listába hozzápárosítani a lista elemekhez dictionaryként?

        if self.tilemap[starting_position[0]][starting_position[1]] == 0:
            return self.position_validation()

        if self.position_validation == [0,0]:
            return self.position_validation()

        return starting_position
