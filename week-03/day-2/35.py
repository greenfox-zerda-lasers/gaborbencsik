# create a function that returns it's input factorial

def factor(input):
    result = 1
    for x in range(1,input +1):
        result *= x
    return result

print (factor(5))
