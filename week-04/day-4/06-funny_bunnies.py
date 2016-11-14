#!/Library/Frameworks/Python.framework/Versions/3.5/bin/python3

# 6. We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
# (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
# have 3 ears, because they each have a raised foot. Recursively return the
# number of "ears" in the bunny line 1, 2, ... n (without loops or
# multiplication).

def funny_bunnies(n):
    if n <= 0:
        return 0
    elif n % 2 == 0:
        return 3 + funny_bunnies(n-1)
    else:
        return 2 + funny_bunnies(n-1)

print (funny_bunnies(3))
