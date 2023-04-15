const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !Number(sampleActivity)) {
    return false;
  }

  const k = Math.log(2) / HALF_LIFE_PERIOD;
  const A0 = MODERN_ACTIVITY;
  const A = Number(sampleActivity);

  if (A <= 0 || A > A0) {
    return false;
  }

  const res = Math.ceil(Math.log( A0 / A) / k)
  return res;
}

module.exports = {
  dateSample
};
