# Create a student Class
# that has a method `add_grade`, that takes a grade from 1 to 5
# an other method `get_average`, that returns the average of the
# grades

class Student():
    grade = 0
    grades = []
    avarage = 0

    def add_grade(self, grade):
        self.grade = grade
        self.grades.append(self.grade)

    def get_average(self):
        avarage = sum(self.grades) / len(self.grades)
        print (avarage)

pista = Student()
pista.add_grade(3)
pista.add_grade(4)
pista.add_grade(5)
pista.get_average()
