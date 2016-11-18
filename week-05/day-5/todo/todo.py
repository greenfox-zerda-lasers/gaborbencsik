import model
import view
import sys

class App:
    def __init__(self):
        self.model = model.Data("todo_list.txt")
        self.view = view.Display()
        self.is_running = True
        
    def usage(self):
        if len(sys.argv) == 1:
            self.view.print_intro()
        elif sys.argv[1] == "-l":
            self.list_tasks()
        elif sys.argv[1] == "-a":
            self.add_task()
        elif sys.argv[1] == "-r":
            self.remove_task()
        elif sys.argv[1] == "-c":
            self.complete_task()

    def list_tasks(self):
        tasks = self.model.read_listfile()
        self.view.show_list(tasks)

    def add_task(self):
        self.model.add_task(sys.argv[2])

    def remove_task(self):
        self.model.remove_task(sys.argv[2])

    def complete_task(self):
        pass


# ide jön a "-l" tipusu dolgok kezelése, hogy azokra mit csináljon.

Run_app = App()
Run_app.usage()
