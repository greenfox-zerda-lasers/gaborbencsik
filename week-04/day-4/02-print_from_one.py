# 2. write a recursive function
# that takes one parameter: n
# and adds numbers from 1 to n

def recursion(n):
    if n < 0:
        return 0
    return n + recursion(n - 1)

print (recursion(5))
