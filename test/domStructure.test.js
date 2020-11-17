const expect = require("chai").expect;
const document = require("../exercise/domStructure");
const {
  AttributeNode,
  ElementNode,
  TextNode,
  DocumentNode,
} = require("../models/nodes");

describe("dom structure", () => {
  let node = undefined;

  describe("attribute node", () => {
    beforeEach(() => {
      node = new AttributeNode();
    });

    it("should contain an array of attributes", () => {
      expect(node.attributes).to.be.an("array");
    });

    it("should not contain texts or descendants", () => {
      expect(node.text).to.be.an("undefined");
      expect(node.descendants).to.be.an("undefined");
    });
  });

  describe("element node", () => {
    beforeEach(() => {
      node = new ElementNode();
    });

    it("should contain an array of attributes", () => {
      expect(node.attributes).to.be.an("array");
    });

    it("should contain an array of descendants", () => {
      expect(node.descendants).to.be.an("array");
    });

    it("should contain text which is string", () => {
      expect(node.text).to.be.a("string");
    });
  });

  describe("text node", () => {
    beforeEach(() => {
      node = new TextNode();
    });

    it("should contain text which is string", () => {
      expect(node.text).to.be.a("string");
    });

    it("should not contain attributes or descendants", () => {
      expect(node.attributes).to.be.an("undefined");
      expect(node.descendants).to.be.an("undefined");
    });
  });

  describe("document node", () => {
    beforeEach(() => {
      node = new DocumentNode();
    });

    it("should contain an array of descendants", () => {
      expect(node.descendants).to.be.an("array");
    });

    it("should not contain attributes or text", () => {
      expect(node.attributes).to.be.an("undefined");
      expect(node.text).to.be.an("undefined");
    });
  });

  describe("document", () => {
    it("should contain an array of descendants", () => {
      expect(document.descendants).to.be.an("array");
    });

    it("should not contain attributes or text", () => {
      expect(document.attributes).to.be.an("undefined");
      expect(document.text).to.be.an("undefined");
    });

    it("should be an object", () => {
      expect(document).to.be.an("object");
    });
  });
});
