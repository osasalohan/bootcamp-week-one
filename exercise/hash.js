const crypto = require("crypto");
const secret = "abcdefg";

/**
 *
 * @param {*} val is a string to be hashed
 * returns hash
 */
const hash = (val) => {
  if (typeof val === "string") {
    return crypto.createHmac("sha256", secret).update(val).digest("hex");
  }
  return "value is not a string";
};

module.exports = hash;
