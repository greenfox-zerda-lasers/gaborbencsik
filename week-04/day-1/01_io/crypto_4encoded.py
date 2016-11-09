# Create a method that decrypts texts/encoded_zen_lines.txt
def decrypt(file_name):
    file_name = open('texts/encoded_zen_lines.txt')
    rows = file_name.readlines()
    result = ""

    for line in rows:
        for character in line:
            if character == " " or character == "\n":
                 result += character
            else:
                result += chr(ord(character)-1)

    file_name.close()
    return result

print (decrypt('texts/encoded_zen_lines.txt'))
