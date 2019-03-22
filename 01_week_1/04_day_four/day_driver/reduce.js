
import data from "./data.js";

console.log("============================");
console.log("=========REDUCE=============");
console.log("============================");

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce

const reduced = data.things.reduce((acc, val, i) => {
  console.log("acc => ", acc);
  return val.name.length;
}, 0);

console.log("reduced value:", reduced);
console.log("=============================");

const nbs1 = [1, 1];
const nbs2 = [1, 2, 44, 676, 980, 1200];

const sum = function(acc, nb, i) {
  return acc + nb;
};

const summed = nbs2.reduce(sum);
console.log("summed value:", summed);
console.log("=============================");









