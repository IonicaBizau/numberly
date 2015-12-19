const moduloN = require("modulo-n");

/**
 * numberly
 *
 * @name numberly
 * @function
 * @param {String} input The input string.
 * @param {Number} min An optional minimum range.
 * @param {Number} max An optional maximum range.
 * @return {Number} The pseudo-hash for the input string, as number.
 */
module.exports = function numberly(input, min, max) {

    var sum = 0
      , i = 0
      ;

    for (; i < input.length; ++i) {
        sum += input.charCodeAt(i);
    }

    if (!min && !max) {
        return sum;
    }

    return moduloN(sum, min, max);
};
