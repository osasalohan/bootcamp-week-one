const expect = require("chai").expect;
const should = require("chai").should();
const hash = require("../exercise/hash");
const compare = require("../exercise/compare");

describe("exercises", () => {
  describe("Hash func", () => {
    it("should hash a string into a string", () => {
      expect(hash("any string")).to.be.a("string");
    });

    it("should hash a string", () => {
      hash("any string").should.not.equal("any string");
    });

    it("should not hash a number", () => {
      expect(hash(90889)).to.equal("value is not a string");
    });
  });

  describe("Compare func", () => {
    it("should confirm a string and its hash are equal", () => {
      expect(compare("hello", hash("hello"))).to.equal(true);
    });

    it("should confirm a string and random hash are not equal", () => {
      expect(compare("hello", hash("hi"))).to.equal(false);
    });
  });
});
