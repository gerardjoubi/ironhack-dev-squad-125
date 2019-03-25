console.log("-----------------------\n@bad_scope_design.js\n-----------------------");

globalVarIsEvil = "hello bad design, anyone can access me";

console.log("globalVarToo hoisting", globalVarToo); // hoisted: undefined
var globalVarToo = "hello again, i should be scoped to a function";

console.log("1/ yes yes yes", this === window, "---------\n", this, window);

/* 2 function declarations */

function isProtection() {
  console.log("\n2/ yes this is global object", this === window);
  var wontBeChecked = "i'm protected as any value scoped to a function";

  console.log(globalVarToo); // accessible from global scope
}

// console.log(wontBeChecked); // reference error => undefined

function isEvenBetterProtection() {
  "use strict"; // note : use strict can be declared directly on top file level
  console.log("\n3/ no, this is undefined in strict mode functions", this === window);
  var wontBeCheckedNeither = "rock solid scope";
}

/* let's run it  */
isProtection();
isEvenBetterProtection();

