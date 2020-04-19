"""Conway's game of life implementation."""
import sys
import random

from time import sleep
from os import system, name
from conway.matrix import Matrix
from conway.game_of_life import GameOfLife


def main():
    columns, lines = 106, 70
    print(sys.argv)
    initial_population = int(sys.argv[1])
    matrix = Matrix(width=columns, height=lines, population=initial_population)

    GameOfLife(matrix).start()


if __name__ == "__main__":
    main()
