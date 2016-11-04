# union([4,5,7], [4,1,7])
# expected output: [1,4,5,7]

def union(list1, list2):
    new_list = list1
    for x in list1:
        if list2[x] != list1[x]:
            
