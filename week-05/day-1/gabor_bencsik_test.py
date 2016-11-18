#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

from gabor_bencsik_work import anagramm, count_letters
import unittest

class TestAnagramm(unittest.TestCase):
    def test_anagramm(self):
        self.assertTrue(anagramm("Alma", "Lama"))

    def test_empty_anagramm(self):
        self.assertTrue(anagramm("", ""))

    def test_no_anagramm(self):
        self.assertFalse(anagramm("Alma", "Alaam"))

    def test_only_number_anagramm(self):
        self.assertTrue(anagramm("1234", "3241"))

    def test_string_number_anagramm(self):
        self.assertTrue(anagramm("alma123", "12lama3"))

    def test_withspace_anagramm(self):
        self.assertTrue(anagramm("alma", "la ma"))

    def test_not_string_anagramm(self):
        self.assertRaises(ValueError, anagramm, 1234, 3412)
        # ha meghívja aa function-t, akkor error-t dob-e

class TestCountLetters(unittest.TestCase):

    def test_count_letters(self):
        self.assertEqual(count_letters("aaabccdee"), {"a":3, "b": 1, "c": 2, "d":1, "e":2})

    def test_upper_lower(self):
        self.assertEqual(count_letters("AAabCcdEe"), {"a":3, "b": 1, "c": 2, "d":1, "e":2})

    def test_withspace(self):
        self.assertEqual(count_letters("AAa bCc dEe"), {"a":3, "b": 1, "c": 2, "d":1, "e":2})

    def test_invalid_char(self):
        self.assertEqual(count_letters(",.;''/|=+-"), {})

    def test_not_string(self):
        self.assertRaises(ValueError, count_letters, 12345)

if __name__ == '__main__':
    unittest.main(exit=False)
