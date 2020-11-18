let myStack = {
  html_: "proficient",
  css_: "proficient",
  javascript_: "proficient",
  node_: "proficient",
  mongodb_: "proficient",
  react_: "proficient",
  reactNative: "beginner",
  python: "beginner",
  php: "beginner",
  angular: "beginner",
  vue: "beginner",
};

//lets you get value of available keys. returns not found otherwise
function get(obj, prop) {
  if (prop in obj) return obj[prop];
  return "not found";
}

//does not allow creation or editing of immutable default keys identified by underscore
function defineProperty(obj, prop, val) {
  if (prop.endsWith("_")) return false;
  obj[prop] = val;
  return true;
}

//does not allow deletion of default keys identified by underscore
function deleteProperty(obj, prop) {
  if (prop in obj) {
    if (prop.endsWith("_")) {
      return false;
    } else {
      delete obj[prop];
      return true;
    }
  }
}

handler = {
  get,
  set: defineProperty,
  defineProperty,
  deleteProperty,
};

myStack = new Proxy(myStack, handler);

module.exports = myStack;
