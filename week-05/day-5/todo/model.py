class Data:

    def __init__(self, todo_file):
        self.todo_file = todo_file
        self.opener = []

    def read_listfile(self):
        f = open(self.todo_file)
        self.opener = f.readlines()
        for i in range(len(self.opener)):
            self.opener[i] = self.opener[i].split(";")
        f.close()
        return self.opener

    def add_task(self,new_task): # kell default state
        f = open(self.todo_file, "a")
        f.writelines(new_task + "\n")
        f.close()

    def remove_task(self,remove_row): # átírni lista alapján
        f = open(self.todo_file, "r")
        lines = f.readlines()
        f.close()
        f = open(self.todo_file, "w")
        for i, t in enumerate(lines, start=1):
            if i != int(remove_row):
                f.write(t)
        f.close()

lista = Data("todo_list.txt")
print(lista.read_listfile())
