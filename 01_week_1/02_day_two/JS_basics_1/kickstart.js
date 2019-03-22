console.log("-----------JS DATA TYPES------------\n");
console.log("A =>", typeof 1); // number
console.log("B =>", typeof "hello world"); // string
console.log("C =>", typeof true); // boolean
console.log("D =>", typeof (1 < 4)); // boolean too, since this ("expression") resolves to true
console.log("E =>", typeof null); // object... yeah this is weird but here for legacy reasons
// more @ => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
console.log("F =>", typeof aThingWeNeverWrote); // undefined
console.log("G =>", typeof {}); // object, this is an "object litteral"
console.log("H =>", typeof []); // object, this is an array, arrays are specific objects

console.log("\n------------------------------------");
console.log("-------LET'S PLAY WITH OBJECTS------\n");

var o = {}; // o contains an empty object
// below a more interesting example
var student = {
  name: "Karim",
  lastname: "Foobarbaz",
  age: 23,
  learnJS: true,
  favoriteColor: null,
  phone: {
    brand: "Nokia",
    model: "n7+",
    price: 300,
    color: "gray",
    nextOwner: null
  }
};

console.log("the variable labeled as 'student' contains an " + typeof student + " => \n", student);

console.log("\n------------------------------------");
console.log("-------LET'S PLAY WITH ARRAYS-------\n");

var list = ["foo", "bar", "baz", "bim!"];
console.log(list);
console.log("Array are => ", typeof list + "s"); // notice the concat

// we use loops to iterate through arrays
for (let index = 0; index < array.length; index++) {
  console.log(list[index]);
}