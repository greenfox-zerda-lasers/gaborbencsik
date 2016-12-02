import random
import os
import text

class Game:
    def __init__(self):
        self.is_running = False
        self.random_word = list(random.choice(text.words).lower())       #
        self.hidden_word = list("_" * len(self.random_word))             #
        self.life = 6
        self.guess = ""
        os.system('cls' if os.name == 'nt' else 'clear')
        self.display()
        self.start_game()

    def start_game(self):
        self.is_running = True
        while self.life > 0 and self.hidden_word != self.random_word:
            self.get_guess()
            self.change_hidden_word()
            self.display()
        self.win_lose()

    def display(self): # ez csak a dispay-t kezeli
        os.system('cls' if os.name == 'nt' else 'clear')
        print(text.intro['game_intro'])
        print("\n" + ''.join(self.hidden_word) + "\n")
        print(text.game['life_left'].format(self.life))
        print(text.design[str(self.life)])

    def win_lose(self):
        if self.life > 0 and self.hidden_word == self.random_word:
            print(text.game['win'])
        else:
            print(text.game['lost'])

    def get_guess(self):
        self.guess = input(text.game['guess'])
        if len(self.guess) == 1 and self.guess.isalpha():
            return self.guess
        else:
            self.get_guess()

    def decrease_life(self):
        self.life -= 1

    def change_hidden_word(self):
        well_guessed = False
        for i in range(len(self.random_word)):                  #
            if self.random_word[i] == self.guess:               #
                self.hidden_word[i] = self.guess                #
                well_guessed = True
        if not well_guessed:
            self.decrease_life()

hangman_game = Game()
