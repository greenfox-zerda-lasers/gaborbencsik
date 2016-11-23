from PIL import ImageTk
from tkinter import *

class GameMap:

    def __init__(self):
        self.size = 60
        self.max_width = 15
        self.max_height = 11
        self.root = Tk()
        self.floor = ImageTk.PhotoImage(file="./floor.gif")
        self.wall = ImageTk.PhotoImage(file="./wall.gif")
        self.hero_down = ImageTk.PhotoImage(file="./hero-down.gif")
        self.hero_up = ImageTk.PhotoImage(file="./hero-up.gif")
        self.hero_left = ImageTk.PhotoImage(file="./hero-left.gif")
        self.hero_right = ImageTk.PhotoImage(file="./hero-right.gif")
        self.super_hero = None
        self.skeleton = ImageTk.PhotoImage(file="./skeleton.gif")
        self.boss = ImageTk.PhotoImage(file="./boss.gif")
        self.super_boss = None
        self.canvas = Canvas(self.root, width= self.max_width * self.size, height= (self.max_height + 2) * self.size)
        self.stat_line = Label(self.root, text='Ide jön a stat')
        self.stat_line.pack(side='right')
        self.canvas.pack()
        self.canvas.focus_set()

    def draw_map(self, maplist):

        for x in range(len(maplist)):
            for y in range(len(maplist[x])):
                if maplist[x][y] == 1:
                    self.canvas.create_image(x * self.size, y * self.size, image = self.floor, anchor=NW)
                else:
                    self.canvas.create_image(x * self.size, y * self.size, image = self.wall, anchor=NW)

    def draw_hero(self, position):
        self.canvas.delete(self.super_hero)
        if position[2] == "down":
            self.super_hero = self.canvas.create_image(position[0]*self.size,position[1]*self.size, image = self.hero_down, anchor=NW)
        elif position[2] == "up":
            self.super_hero = self.canvas.create_image(position[0]*self.size,position[1]*self.size, image = self.hero_up, anchor=NW)
        elif position[2] == "left":
            self.super_hero = self.canvas.create_image(position[0]*self.size,position[1]*self.size, image = self.hero_left, anchor=NW)
        elif position[2] == "right":
            self.super_hero = self.canvas.create_image(position[0]*self.size,position[1]*self.size, image = self.hero_right, anchor=NW)

    def draw_skeleton_group(self, skeleton_list):
        for skeleton in skeleton_list:
            self.draw_skeleton(skeleton)
            print(skeleton)

    def draw_skeleton(self, skeleton):
        self.canvas.create_image(skeleton.position[0] * self.size, skeleton.position[1] * self.size, image = self.skeleton, anchor=NW)

    def draw_boss(self):
        self.canvas.delete(self.super_boss)
        self.super_boss = self.canvas.create_image(9 * self.size, 10 * self.size, image = self.boss, anchor=NW)

    def mainloop(self):
        self.root.mainloop()


class StatLabel:
    pass
