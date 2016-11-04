numbers = [4, 5, 6, 7, 8, 9, 10]
# write your own sum function

def sum_it(num):
    a = num[0]
    for x in range(1, len(num)):
        a += num[x]
    return a


print sum_it(numbers)

#

def summit(mylist):
    summ = 0
    for x in mylist:
        summ += x
    return summ

print summit(numbers)
