import view
import model

class Gameloop:

    def __init__(self):
        self.model = model.Character()
        self.view = view.GameMap()
        self.view.draw_map(self.model.tilemap)
        self.view.draw_hero(self.model.hero_position)
        self.view.draw_skeleton_group(self.model.skeleton_list)
        self.view.draw_boss()
        self.view.canvas.bind('<Down>', self.character_movement)
        self.view.canvas.bind('<Up>', self.character_movement)
        self.view.canvas.bind('<Left>', self.character_movement)
        self.view.canvas.bind('<Right>', self.character_movement)
        self.view.mainloop()

    def mainloop(self):
        pass

    def character_movement(self, event):
        self.move_enemy()

        if event.keysym == 'Down':
            self.move_down()
        elif event.keysym == 'Up':
            self.move_up()
        elif event.keysym == 'Left':
            self.move_left()
        elif event.keysym == 'Right':
            self.move_right()

    def move_down(self):
        position = self.model.hero_position[:]
        position[1] += 1
        self.model.hero_position[2] = 'down'
        if self.model.movement_validation(position):
            self.model.move_down() #model függvénye
        self.view.draw_hero(self.model.hero_position) #view függvénye


    def move_up(self):
        position = self.model.hero_position[:]
        position[1] -= 1
        self.model.hero_position[2] = 'up'
        if self.model.movement_validation(position):
            self.model.move_up() #model függvénye
        self.view.draw_hero(self.model.hero_position) #view függvénye

    def move_left(self):
        position = self.model.hero_position[:]
        position[0] -= 1
        self.model.hero_position[2] = 'left'
        if self.model.movement_validation(position):
            self.model.move_left() #model függvénye
        self.view.draw_hero(self.model.hero_position) #view függvénye

    def move_right(self):
        position = self.model.hero_position[:]
        position[0] += 1
        self.model.hero_position[2] = 'right'
        if self.model.movement_validation(position):
            self.model.move_right() #model függvénye
        self.view.draw_hero(self.model.hero_position) #view függvénye

    def move_enemy(self):
        # if self.model.movement_validation()
        # for items in self.model.skeleton_list:
        #     self.model.skeleton_list[0] += 1
        pass

map_loop = Gameloop()
