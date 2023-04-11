const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusesIndexes = {};
  const heights = [];
  arr.forEach((curr, index) => {
    if (curr === -1) {
      minusesIndexes[index] = true;
    } else {
      heights.push(curr);
    }
  })
  heights.sort((a, b) => b - a);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (minusesIndexes[i]) {
      res.push(-1);
    } else {
      res.push(heights.pop());
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
