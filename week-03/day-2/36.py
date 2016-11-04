numbers = [3, 4, 5, 6, 7]
# write a function that reverses a list

def rev(list):
    new_list = []
    for i in range(len(list)-1, -1, -1):
        print(list[i])
        
    return new_list


print rev(numbers)
