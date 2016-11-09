# Create a method that decrypts texts/reversed_zen_order.txt
def decrypt(file_name):
    file_name = open('texts/reversed_zen_order.txt')
    rows = file_name.readlines()
    result = ""

    for line in range(len(rows)-1,-1,-1):
        result += rows[line]

    file_name.close()
    return result


print (decrypt('texts/reversed_zen_order.txt'))
