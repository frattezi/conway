"""Conway's game of life implementation."""
from os import system, name
from time import sleep
from conway.matrix import Matrix


class GameOfLife(object):
    def __init__(self, matrix: Matrix, interactive=False):
        self._matrix = matrix
        self._generation = 0
        self._interactive = interactive

    def start(self):
        while True:
            self._clear()
            self._matrix.print()
            print(f"Generation {self._generation}")

            self._generation += 1
            self._matrix.next_gen()

            if self._interactive:
                input("Enter for next gen")
            else:
                sleep(0.1)

    def _clear(self):
        # for windows
        if name == "nt":
            system("cls")
        # for mac and linux(here, os.name is 'posix')
        else:
            system("clear")
