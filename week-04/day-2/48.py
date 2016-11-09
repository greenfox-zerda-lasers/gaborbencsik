# Create a student Class
# that has a method `add_grade`, that takes a grade from 1 to 5
# an other method `get_average`, that returns the average of the
# grades

class Student():

    grades = []

    def add_grade(self, grade):
        if 0 < grade <= 5:
            self.grades.append(grade)

    def get_avarage(self):
        return sum(self.grades) / len(self.grades)

pistike = Student()
pistike.add_grade(5)
pistike.add_grade(4)
pistike.add_grade(1)
pistike.add_grade(5)
pistike.add_grade(4)

print (pistike.get_avarage())
