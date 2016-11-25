import view
import model
import random

class Gameloop:

    def __init__(self):
        self.model = model.Character()
        self.skeleton_list = [model.Skeleton([1, 1]), model.Skeleton([0, 8]), model.Skeleton([8, 10])]
        print(self.skeleton_list[0].position)
        self.view = view.GameMap()
        self.view.draw_map(self.model.tilemap)
        self.view.draw_hero(self.model.hero_position)
        self.view.draw_skeleton_group(self.skeleton_list)
        self.view.draw_boss(self.model.boss_position)
        self.view.canvas.bind('<Down>', self.character_movement)
        self.view.canvas.bind('<Up>', self.character_movement)
        self.view.canvas.bind('<Left>', self.character_movement)
        self.view.canvas.bind('<Right>', self.character_movement)
        self.view.root.bind('<Space>',)
        self.move_count = 0
        self.count_move()
        self.view.mainloop()

    def mainloop(self):
        pass

    def character_movement(self, event):
        if event.keysym == 'Down':
            self.move_down()
        elif event.keysym == 'Up':
            self.move_up()
        elif event.keysym == 'Left':
            self.move_left()
        elif event.keysym == 'Right':
            self.move_right()

        self.move_count +=1
        self.count_move()

    def count_move(self):
        if self.move_count % 2 == 0:
            self.move_enemy()
            self.move_boss()

    def move_down(self):
        position = self.model.hero_position[:]
        position[1] += 1
        self.model.hero_position[2] = 'down'
        if self.model.movement_validation(position):
            self.model.move_down()
        self.view.draw_hero(self.model.hero_position)

    def move_up(self):
        position = self.model.hero_position[:]
        position[1] -= 1
        self.model.hero_position[2] = 'up'
        if self.model.movement_validation(position):
            self.model.move_up()
        self.view.draw_hero(self.model.hero_position)

    def move_left(self):
        position = self.model.hero_position[:]
        position[0] -= 1
        self.model.hero_position[2] = 'left'
        if self.model.movement_validation(position):
            self.model.move_left()
        self.view.draw_hero(self.model.hero_position)

    def move_right(self):
        position = self.model.hero_position[:]
        position[0] += 1
        self.model.hero_position[2] = 'right'
        if self.model.movement_validation(position):
            self.model.move_right()
        self.view.draw_hero(self.model.hero_position)

    def move_enemy(self): #skeleton
        direction = random.choice(["down", "up", "left", "right"])
        for skeleton in self.skeleton_list:
            if direction == "down":
                self.move_skeleton_down(skeleton)
            elif direction == "up":
                self.move_skeleton_up(skeleton)
            elif direction == "left":
                self.move_skeleton_left(skeleton)
            elif direction == "right":
                self.move_skeleton_right(skeleton)
        self.view.draw_skeleton_group(self.skeleton_list)

    def move_skeleton_down(self, skeleton):
        current_position = skeleton.position
        if skeleton.movement_validation([current_position[0],current_position[1]+1]):
            skeleton.move_skeleton_down()

    def move_skeleton_up(self, skeleton):
        current_position = skeleton.position
        if skeleton.movement_validation([current_position[0],current_position[1]-1]):
            skeleton.move_skeleton_up()

    def move_skeleton_left(self, skeleton):
        current_position = skeleton.position
        if skeleton.movement_validation([current_position[0]-1,current_position[1]]):
            skeleton.move_skeleton_left()

    def move_skeleton_right(self, skeleton):
        current_position = skeleton.position
        if skeleton.movement_validation([current_position[0]+1,current_position[1]]):
            skeleton.move_skeleton_right()

#       BOSS MOVEMENT

    def move_boss(self):
        direction = random.choice(["down", "up", "left", "right"])
        print('irany:' + direction)
        if direction == "down":
            self.model.move_down_boss()
        elif direction == "up":
            self.model.move_up_boss()
        elif direction == "left":
            self.model.move_left_boss()
        elif direction == "right":
            self.model.move_right_boss()
        self.view.draw_skeleton_group(self.skeleton_list)

    def move_boss_down(self):
        current_position = self.model.boss_position[:]
        if self.model.movement_validation([current_position[0],current_position[1]+1]):
            self.model.move_down_boss()
            print('csuhaj')
        self.view.draw_boss(self.model.boss_position)
        print('boss_position ' + self.model.boss_position)

    def move_boss_up(self):
        current_position = self.model.boss_position[:]
        if self.model.movement_validation([current_position[0],current_position[1]-1]):
            self.model.move_up_boss()
            print('csuhaj')
        self.view.draw_boss(self.model.boss_position)
        print('boss_position ' + self.model.boss_position)

    def move_boss_left(self):
        current_position = self.model.boss_position[:]
        if self.model.movement_validation([current_position[0]-1,current_position[1]]):
            self.model.move_left_boss()
        self.view.draw_boss(self.model.boss_position)
        print('boss_position ' + self.model.boss_position)

    def move_boss_right(self):
        current_position = self.model.boss_position[:]
        if self.model.movement_validation([current_position[0]+1,current_position[1]]):
            self.model.move_right_boss()
        self.view.draw_boss(self.model.boss_position)
        print('boss_position ' + self.model.boss_position)

map_loop = Gameloop()
