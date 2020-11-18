const { expect, assert } = require("chai");
const proxyStack = require("../exercise/proxy");
const myLibrary = require("../exercise/library");

describe("exercises", () => {
  describe("my proxy stack", () => {
    it("should not allow setting of immutable default keys", () => {
      proxyStack.react_ = "novice";
      proxyStack.reactNative = "intermediate";
      expect(proxyStack.react_).to.equal("proficient");
      expect(proxyStack.reactNative).to.equal("intermediate");
    });

    it("should not allow deletion of default keys", () => {
      expect(delete proxyStack.html_).to.equal(false);
      expect(delete proxyStack.vue).to.equal(true);
    });

    it("should not find non-existent keys", () => {
      expect(proxyStack.fakeKey).to.equal("not found");
      expect(proxyStack.angular).to.equal("beginner");
    });

    it("should not allow creation of default keys", () => {
      proxyStack.ruby_ = "professional";
      expect(proxyStack.ruby_).to.equal("not found");
    });
  });

  describe("my library", () => {
    it("should show you the books it contains", () => {
      expect(myLibrary.getBooks()).to.be.an("array");
      assert.include(myLibrary.getBooks(), "Purple Hibiscus");
    });

    it("should let you add a new book", () => {
      myLibrary.addBook("The Joys of Motherhood");
      assert.include(myLibrary.getBooks(), "The Joys of Motherhood");
    });

    it("should let you remove a book", () => {
      myLibrary.shredBook("Purple Hibiscus");
      expect(myLibrary.getBooks().find((book) => book === "Purple Hibiscus")).to
        .be.undefined;
    });

    it("should not let you access the books private variable", () => {
      expect(myLibrary.books).to.be.undefined;
    });
  });
});
