numbers = [3, 4, 5, 6, 7]
# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens

def filter(list):
    new_list = []
    for x in list:
        if x % 2 == 0:
            new_list.append(x)
    return new_list
    
print filter(numbers)
