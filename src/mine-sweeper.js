const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} res
 * @return {Array<Array>}
 *
 * @example
 * res = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = matrix.map(row => row.map(() => 0)); // create initial
  const height = res.length;
  const width = res[0].length;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j]) {
        if (i - 1 >= 0) {
          res[i - 1][j]++
          if (j - 1 >= 0) {
            res[i - 1][j - 1]++;
          }
          if (j + 1 < width) {
            res[i - 1][j + 1]++;
          }
        }
        if (i + 1 < height) {
          res[i + 1][j]++;
          if (j - 1 >= 0) {
            res[i + 1][j - 1]++
          }
          if (j + 1 < width) {
            res[i + 1][j + 1]++
          }
        }
        if (j - 1 >= 0) {
          res[i][j - 1]++
        }
        if (j + 1 < width) {
          res[i][j + 1]++
        }
      }
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
