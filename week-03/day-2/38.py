numbers = [7, 5, 8, -1, 2]
# Write a function that returns the minimal element
# in a list (your own min function)

def find_min(list):
    mini = list[0]
    for x in list:
        if x < mini:
            mini = x
    return mini



print find_min(numbers)
