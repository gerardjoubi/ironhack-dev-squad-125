const falsy = false;
const truthy = "yolo";

// in JS world, this pattern is called the guard operator
const guarded = falsy && true;
const unguarded = truthy && true;

console.log(guarded); // falsy and true returns false
console.log(unguarded); // truthy and true returns true