const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  
  const additionalStr = addition !== undefined
    ? [...Array(additionRepeatTimes)].map(() => String(addition)).join(additionSeparator)
    : '';
  
  return [...Array(repeatTimes)].map(() => String(str) + additionalStr).join(separator);
}

module.exports = {
  repeater
};

function oldRepeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  
  const additionalStr = addition !== undefined
    ? [...Array(additionRepeatTimes)].map(() => addition.toString()).join(additionSeparator)
    : '';
  
  return [...Array(repeatTimes)].map(() => str.toString() + additionalStr).join(separator);
}
