function byId(id) {
  return document.getElementById(id);
}

function $$(sCSS) {
  const nodes = document.querySelectorAll(sCSS);
  return nodes.length === 0 ? null : nodes.length === 1 ? nodes[0] : nodes;
}

function createNode(nodeName, parentNode, options) {
  const newNode = document.createElement(nodeName);
  for (let prop in options) {
      newNode.setAttribute(prop, options[prop]);
  }
  return parentNode.appendChild(newNode);
}

var p = byId("myparagraph");
var titles = $$(".title");
console.log(p, titles);

const el = createNode("div", $$("body"), {
    id: "mySuperDiv",
    className: "block bold"
});

const el2 = createNode("span", $$(".title.main"));
// console.log(el, el2);
