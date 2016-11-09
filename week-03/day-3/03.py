# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise

class Pirate():
    drink = 0

    def drink_rum(self):
        self.drink += 1
        self.hows_goin_mate()

    def hows_goin_mate(self):
        if self.drink >= 5:
            print ("Arrr!")
        else:
            print ("Nothin")

drunk1 = Pirate()
drunk1.drink_rum()
drunk1.drink_rum()
drunk1.drink_rum()
drunk1.drink_rum()
drunk1.drink_rum()
drunk1.drink_rum()
