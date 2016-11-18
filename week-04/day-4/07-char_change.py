#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3


# 7. Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

string = "cccxxcxctyhgfd"

def char_change(text):
    if len(text) == 0:
        return ""
    else:
        if text[0] == "x":
            return "" + char_change(text[1:])
        else:
            return text[0] + char_change(text[1:])


print(char_change(string))
