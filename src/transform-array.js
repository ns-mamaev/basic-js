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

  const res = [];
  let nextDiscarded = false;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    switch (current) {
      case '--discard-next':
        i++;
        nextDiscarded = true;
        continue; // go to next loop iteration, break only exits from switch not loop;
      case '--double-next':
        if (i < arr.length - 1) {
          res.push(arr[i + 1]);
        }
        break
      case '--discard-prev':
        if (res.length && !nextDiscarded) {
          res.pop();
        }
        break;
      case '--double-prev':
        if (i >= 1 && !nextDiscarded) {
          res.push(arr[i - 1])
        }
        break;
      default:
        res.push(current)
    }
    nextDiscarded = false;
  }
  return res;
}

module.exports = {
  transform,
};
