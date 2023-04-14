const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringN = n.toString();
  let max = stringN.slice(1);
  for (let i = 1; i < stringN.length; i++) {
    const current = stringN.slice(0, i) + stringN.slice(i + 1);
    if (current > max) {
      max = current;
    }
    console.log(max);
  }

  return Number(max);
}

module.exports = {
  deleteDigit
};
