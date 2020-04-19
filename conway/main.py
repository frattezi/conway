"""Conway's game of life implementation."""
import sys
import random

from time import sleep
from os import system, name
from conway.matrix import Matrix
from conway.game_of_life import GameOfLife


def main():
    if len(sys.argv) < 2:
        columns, lines = 40, 80
        matrix = Matrix(width=columns, height=lines, population=10000)
    else:
        file_path = sys.argv[1]
        matrix = Matrix(file=file_path)

    GameOfLife(matrix).start()


if __name__ == "__main__":
    main()
