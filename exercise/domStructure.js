const {
  AttributeNode,
  ElementNode,
  TextNode,
  DocumentNode,
} = require("../models/nodes");

const meta = new AttributeNode(["charset", "name", "content"]);

const link = new AttributeNode(["href", "rel", "type"]);

const script = new AttributeNode(["src", "crossorigin"]);

const input = new AttributeNode(["class", "type", "placeholder"]);

const img = new AttributeNode(["class", "src"]);

const hr = new AttributeNode(["class"]);

const [div, h1, h2, h3, h4, h5, h6, p, a, i, button, label, strong, em] = Array(
  14
).fill(new ElementNode());

const form = new ElementNode(["method", "enctype"], [label, input]);

const title = new TextNode("Document Title");

const body = new DocumentNode([
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  i,
  button,
  label,
  strong,
  em,
  form,
  input,
  img,
  hr,
  script,
]);

const head = new DocumentNode([meta, title, link, script]);

const html = new DocumentNode([head, body]);

const document = html;

module.exports = document;