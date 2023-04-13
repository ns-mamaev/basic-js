const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const arrWithDiscards = [...arr];
  arrWithDiscards.forEach((el, i) => {
    if (el === '--discard-next') {
      if (i < arrWithDiscards.length - 1) {
        arrWithDiscards[i + 1] = null;
      }
      arrWithDiscards[i] = null;
    } else if (el === '--discard-prev') {
      if (i !== 0) {
        arrWithDiscards[i - 1] = null;
      }
      arrWithDiscards[i] = null;
    }
  })
  console.log(arrWithDiscards)
  const res = [];

  arrWithDiscards.forEach((el, i) => {
    if (el === '--double-next') {
      if (arrWithDiscards[i + 1]) {
        res.push(arrWithDiscards[i + 1])
      }
      return;
    }
    if (el === '--double-prev') {
      if (arrWithDiscards[i - 1]) {
        const prev = res[res.length - 1];
        res.push(prev);
      }
      return;
    }
    if (el !== null) {
      res.push(el);
    }
  })

  return res;
}

module.exports = {
  transform,
};

