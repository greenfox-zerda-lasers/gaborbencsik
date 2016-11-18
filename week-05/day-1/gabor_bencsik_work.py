#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

def anagramm(string1,string2):
    if type(string1) == int or type(string2) == int:
        raise ValueError
    string1 = char_change(string1)
    string2 = char_change(string2)
    a = ''.join(sorted(string1.lower()))
    b = ''.join(sorted(string2.lower()))
    return a == b

def char_change(text):
    if len(text) == 0:
        return ""
    else:
        if text[0] == " ":
            return "" + char_change(text[1:])
        else:
            return text[0] + char_change(text[1:])


def count_letters(text):
    if type(text) == int:
        raise ValueError
    text = text.lower()
    result = {}
    text = char_change(text)
    for i in text:
        if i.isalpha():
            if i in result:
                result[i] += 1
            else:
                result[i] = 1
    return result
