/*
    This snipper will give you a better understanding of prototypal inheritance
*/

console.log("-----------------------\n@classes.js\n-----------------------");

class X {}
class Y extends X {}

const instanceOfX = new X();
const instanceOfY = new Y();

console.log("-----------------------\nclass instances\n-----------------------");
console.log(instanceOfY, instanceOfX);
console.log("-----------------------\ninstances prototypes (lookup)\n-----------------------");
console.log(
    Object.getPrototypeOf(instanceOfY),
    Object.getPrototypeOf(instanceOfX)
);
console.log(
  "-----------------------\nclimb !!!\n-----------------------"
);
console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(instanceOfX)),
    Object.getPrototypeOf(Object.getPrototypeOf(instanceOfX)) === instanceOfX.__proto__.__proto__
);
console.log("-----------------------\where to ?!! !!!\n-----------------------");
console.log(
    Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instanceOfX))),

);
console.log("-----------------------Some more\n-----------------------");
