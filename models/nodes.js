/**
 * To represent self closing html elements that contain attributes only
 */
exports.AttributeNode = class AttributeNode {
  constructor(attributes = []) {
    this.attributes = attributes;
  }
};

/**
 * To  represent html elements that can contain attributes, text and other elements
 */
exports.ElementNode = class ElementNode {
  constructor(attributes = [], descendants = [], text = "") {
    this.attributes = ["class", ...attributes];
    this.descendants = descendants;
    this.text = text;
  }
};

/**
 * To represent html elements that can contain only text
 */
exports.TextNode = class TextNode {
  constructor(text = "") {
    this.text = text;
  }
};

/**
 * To represent html elements that only contain other elements (head and body)
 */
exports.DocumentNode = class DocumentNode {
  constructor(descendants = []) {
    this.descendants = descendants;
  }
};
