"""Matrix Implementation."""
import random


class Matrix(object):
    def __init__(self, file=None, width=None, height=None, population=None):
        # TODO: handle file
        if not file:
            self._lines = width
            self._columns = height
            self._population = population
            self._matrix = self._create_matrix()

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

                if neighbours_size > 4:
                    result_matrix[line_index][column_index] = " "
                elif neighbours_size >= 2:
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
