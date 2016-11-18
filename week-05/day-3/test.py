import unittest
from e1 import divides_ten
from e2 import number_of_lines
from e3 import Person

class TestExeption(unittest.TestCase):

    def test_zero(self):
        self.assertEqual(divides_ten(0), "fail")

class TestNumber(unittest.TestCase):

    def test_no_file(self):
        self.assertEqual(number_of_lines('text.txt'), 0)

class TestBirt(unittest.TestCase):

    def test_birts_day_0(self):
        new_person = Person("Név",0)
        self.assertEqual(new_person.name, "Név")
        self.assertEqual(new_person.birth_date, 0)

    def test_birts_day_negative1(self):
        self.assertRaises(ValueError, Person, "Lali", -1)

    def test_birts_day_2017(self):
        self.assertRaises(ValueError, Person, "Lali", 2017)



if __name__ == '__main__':
    unittest.main()
