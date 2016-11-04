# Linear Search
#
# Implement linear search method.

# linear_search([4,5,6], 6)
# expected output: 2

# linear_search([4,5,7], 6)
# expected output: -1

def linear_search(list, number):
    for x in range(len(list)):
        if list[x] == number:
            return x
    return -1

print linear_search([4,5,6], 6)
print linear_search([4,5,7], 6)
