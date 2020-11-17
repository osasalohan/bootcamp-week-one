exports.AttributeNode = class AttributeNode {
  constructor(attributes = []) {
    this.attributes = attributes;
  }
};

exports.ElementNode = class ElementNode {
  constructor(attributes = [], descendants = [], text = "") {
    this.attributes = ["class", ...attributes];
    this.descendants = descendants;
    this.text = text;
  }
};

exports.TextNode = class TextNode {
  constructor(text = "") {
    this.text = text;
  }
};

exports.DocumentNode = class DocumentNode {
  constructor(descendants = []) {
    this.descendants = descendants;
  }
};
