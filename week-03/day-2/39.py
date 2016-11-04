names = ['Zakarias', 'Hans', 'Otto', 'Ole']
# create a function that returns the shortest string
# from a list

def shortest_item(list):
    short = len(list[0])
    for x in list:
        if len(x) < short:
            short = x
    return short




print shortest_item(names)
