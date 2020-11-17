const hash = require("./hash");

/**
 *
 * @param {*} val1 is a string to be hashed
 * @param {*} val2 is a hash
 * returns equality between string and hash
 */
const compare = (val1, val2) => hash(val1) === val2;

module.exports = compare;
