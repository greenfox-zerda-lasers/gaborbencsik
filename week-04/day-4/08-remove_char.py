#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# 8. Given a string, compute recursively a new string where all the 'x' chars have been removed.

string = "ccbcxbxcxbctyhgfd"

def char_remove(text):
    print(text)
    if len(text) == 0:
        return ""
    else:
        if text[0] == "x":
            return "" + char_remove(text[1:])
        else:
            return text[0] + char_remove(text[1:])


print(char_remove(string))
