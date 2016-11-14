#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# 9. Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

string = "ccbcxbxcxbctyhgfd"

def separate(text):
    if len(text) ==0:
        return ""
    elif len(text) == 1:
        return text[0]
    else:
        return text[0] + "*" + separate(text[1:])


print(separate(string))
