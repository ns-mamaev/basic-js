const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const dict = [];
  for (const c of str) {
    if (dict[dict.length - 1]?.[0] === c) {
      dict[dict.length - 1].push(c);
    } else {
      dict.push([c]);
    }
  }
  return dict.reduce((acc, curr) => acc + (curr.length > 1 ? curr.length + curr[0] : curr[0]),'')
}

module.exports = {
  encodeLine
};
