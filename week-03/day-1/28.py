aa = [1, 2, 3]
out = 0
# if the aa list contains one element set the out to 1
# if the aa list contains two element set the out to 2
# if the aa list contains more than 2 set the out to 10
# if the aa contains no elements it should set to -1

if len(aa) == 1:
    print out + 1
elif len(aa) == 2:
    print out + 2
elif len(aa) > 2:
    print out + 10
else:
    print out -1
