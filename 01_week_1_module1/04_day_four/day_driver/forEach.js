import data from "./data.js";

console.log("imported dataset\n\n", data);

console.log("=============================");
console.log("=========FOREACH=============");
console.log("=============================");

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
// NOTE: arr.forEach() returns alwas undefined !!!

var students = ["miguel", "chris", "daniel"];

// Remember the for loop syntax, better performance but less convenient
// for (let index = 0; index < students.length; index++) {
//    console.log(students[index])
// }

// below : i and all are optional : only student is mandatory
students.forEach(function(student, i) {
  console.log(student, i);
  // console.log(all);
});

var myParsingClbk = function myParsingClbk(student, i, all) {
  console.log(student, i);
};

students.forEach(myParsingClbk);

data.nums.forEach(function(num, i) {
  console.log(num);
});

data.things.forEach((num, i) => {
  console.log(num);
});

// BONUS =>

// const log = (d) => console.log(d);

// const timeTwo = (n) => n * 2;

// const print = (nb) => timeTwo(nb);

// const nbs = [123, 66, 23, 10, 444];

// nbs.forEach(log(print));

// ============================================= : binding

data.things.forEach(function(thing, i) {
  // need a classic function here to bind on this... more coming
  console.log(thing, i);
  console.log(this);
}, "that");
