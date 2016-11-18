class Data:

    def __init__(self, todo_file):
        self.todo_file = todo_file
        self.opener = []

    def read_listfile(self):
        f = open(self.todo_file)
        self.opener = f.readlines()
        f.close()
        return self.opener

    def add_task(self,new_task):
        f = open(self.todo_file, "a")
        f.writelines(new_task + "\n")
        f.close()

    def remove_task(self,remove_row): # odaadom neki a 2. indexü elemet
        f = open(self.todo_file, "r")
        lines = f.readlines()
        f.close()
        f = open(self.todo_file, "w")
        for i, t in enumerate(lines, start=1):
            if i != int(remove_row):
                f.write(t)
        f.close()
