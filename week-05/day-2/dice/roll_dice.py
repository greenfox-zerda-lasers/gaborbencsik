
import random
import os
import text


class Game:

    def __init__(self):
        self.is_running = False
        self.bottom_range = 1
        self.top_range = 6
        self.random_number = -1

        os.system('cls' if os.name == 'nt' else 'clear')

        print(text.intro['game_intro'])
        self.start_game()

    def start_game(self):
        roll_dice = str(input('(Y)es or (N)o?'))
        if roll_dice.lower() == 'y':
            self.rolling()
        elif roll_dice.lower() == 'n':
            print(text.result['sayno'])
            exit()
        else:
            print(text.result['false'])
            self.start_game()

    def rolling(self):
        self.is_running = True
        self.random_number = random.randint(self.bottom_range, self.top_range)
        print(text.result['number_rolled'].format(self.random_number))
        print(text.numbers[str(self.random_number)])
        self.restart()

    def restart(self):
        print(text.result['satisfied'])
        play_again = str(input('(Y)es or (N)o?'))
        if play_again.lower() == 'n':
            self.rolling()
        elif play_again.lower() == 'y':
            print(text.result['no_play'])
            self.exit()
        else:
            print(text.result['false'])
            self.restart()

    def exit(self):
        exit_game = str(input('(Y)es or (N)o?'))
        if exit_game.lower() == 'y':
            print("Good bye")
        elif exit_game.lower() == 'n':
            self.start_game()
        else:
            self.exit()

dice_game = Game()
