# create a Class called FileLines
# lines = FileLines('alma.txt')
# lines.get_last() <- returns the last line of the file
# lines.get_first() <- returns the fitst line of the file
# lines.get_nth(2) <- returns the nth line given in the argument

class FileLines():

    def __init__(self, file1):
        self.file1 = file1
        f = open(file1)
        self.opener = f.readlines()
        f.close()

    def get_last(self):
        return self.opener(-1)

    def get_first(self):
        return self.opener(0)

    def get_nth(sefl, number):
        return self.opener[number]

lines = FileLines('alma.txt')
print (lines.get_last())
print (lines.get_first())
print (lines.get_nth(2))
