#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# 1. write a recursive function
# that takes one parameter: n
# and counts down from n

def recursive(n):
    if n >= 0:
        print (n)
        recursive(n-1)

recursive(5)
