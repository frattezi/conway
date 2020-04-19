"""Matrix Implementation."""
import random


class Matrix(object):
    def __init__(self, file=None, width=None, height=None, population=None):
        self._population = population

        if not file:
            self._lines = width
            self._columns = height
            self._matrix = self._create_matrix()
        else:
            with open(file) as matrix:

                self._matrix = [
                    list(line.replace("1", "#").replace("0", " "))
                    for line in matrix.read().split("\n")
                ]
                self._columns = len(self._matrix[0])
                self._lines = len(self._matrix)

    def print(self):
        for line in self._matrix:
            print(" ".join(line))

    def next_gen(self):
        matrix = self._matrix
        result_matrix = [[" "] * self._columns for _ in range(self._lines)]

        for line_index in range(self._lines):
            for column_index in range(self._columns):
                horizontal_neighbours = (
                    matrix[line_index][column_index - 1]
                    + matrix[line_index][(column_index + 1) % self._columns]
                )
                vertical_neighbours = (
                    matrix[line_index - 1][column_index]
                    + matrix[(line_index + 1) % self._lines][column_index]
                )
                diagonal_neighbours = (
                    matrix[line_index - 1][column_index - 1]
                    + matrix[(line_index + 1) % self._lines][
                        (column_index + 1) % self._columns
                    ]
                    + matrix[(line_index + 1) % self._lines][column_index - 1]
                    + matrix[line_index - 1][(column_index + 1) % self._columns]
                )

                neighbours = (
                    horizontal_neighbours + vertical_neighbours + diagonal_neighbours
                )
                neighbours_size = len(neighbours.replace(" ", ""))

                if neighbours_size == 2 and matrix[line_index][column_index] == "#":
                    result_matrix[line_index][column_index] = "#"
                elif neighbours_size == 3:
                    result_matrix[line_index][column_index] = "#"
                else:
                    result_matrix[line_index][column_index] = " "

        self._matrix = result_matrix

    def _create_matrix(self):
        matrix = [[" "] * self._columns for _ in range(self._lines)]

        # randomize matrix
        for points in range(self._population):
            column, line = (
                random.randrange(0, self._columns),
                random.randrange(0, self._lines),
            )
            matrix[line][column] = "#"

        return matrix
