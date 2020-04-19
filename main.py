from os import system, name
from time import sleep
import sys
import random


def clear():
    # for windows
    if name == "nt":
        system("cls")
    # for mac and linux(here, os.name is 'posix')
    else:
        system("clear")


def render(matrix):
    clear()
    for line in matrix:
        print(" ".join(line))
    sleep(0.5)


def create_matrix(columns, lines, initial_population):
    matrix = [[" "] * columns for _ in range(lines)]

    # randomize matrix
    for points in range(initial_population):
        column, line = (random.randrange(0, columns), random.randrange(0, lines))
        matrix[line][column] = "#"

    return matrix


def generate_new_matrix(matrix):
    line_length = len(matrix)
    columns_length = len(matrix[0])
    result_matrix = [[" "] * columns_length for _ in range(line_length)]

    for line_index, columns in enumerate(matrix):
        for column_index, value in enumerate(columns):
            horizontal_neighbours = (
                matrix[line_index][column_index - 1]
                + matrix[line_index][(column_index + 1) % columns_length]
            )
            vertical_neighbours = (
                matrix[line_index - 1][column_index]
                + matrix[(line_index + 1) % line_length][column_index]
            )
            diagonal_neighbours = (
                matrix[line_index - 1][column_index - 1]
                + matrix[(line_index + 1) % line_length][(column_index + 1) % columns_length]
                + matrix[(line_index + 1) % line_length][column_index - 1]
                + matrix[line_index - 1][(column_index + 1) % columns_length]
            )

            neighbours = horizontal_neighbours + vertical_neighbours + diagonal_neighbours
            neighbours_size = len(neighbours.replace(' ', ''))

            if neighbours_size == 2 and matrix[line_index][column_index] == "#":
                result_matrix[line_index][column_index] = "#"
            elif neighbours_size == 3:
                result_matrix[line_index][column_index] = "#"
            else:
                result_matrix[line_index][column_index] = " "


    return result_matrix


def main():
    columns, lines = 106, 70
    initial_population = int(sys.argv[1])

    matrix = create_matrix(columns, lines, initial_population)

    while True:
        render(matrix)
        matrix = generate_new_matrix(matrix)


if __name__ == "__main__":
    main()
