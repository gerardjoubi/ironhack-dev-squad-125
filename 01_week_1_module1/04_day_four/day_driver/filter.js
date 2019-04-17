import data from "./data.js";

console.log("============================");
console.log("=========FILTER=============");
console.log("============================");

// const res = data.nums.filter((n, i, a) => n < 40); // es6 syntax

var res = data.nums.filter(function(n) {
    return n < 40;
});

// console.log("matched" + res.length + " => " + res); // oldschool
console.log(`matched: ${res.length} => ${res}`); // newschool template literals, check mdn

var testArray = ["a", "aa", "aaa", "aaaa"];

var myRes = testArray.filter(function(val, index, all) {
    return val.length >= 3; // push current value in myRes, only if long enough to satisfy the condition
});

console.log("my filter result is => ", myRes);

