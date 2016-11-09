# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file_name):
    file_name = open('texts/duplicated_chars.txt', 'r')
    rows = file_name.readlines()
    result = ""

    for line in rows:
        for index, character in enumerate(line):       # enumerate = range(len(line))
            if index % 2 == 0:
                result += character

    file_name.close()

    return result
# file_name[::2]

print (decrypt('texts/duplicated_chars.txt'))
