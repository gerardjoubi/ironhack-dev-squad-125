// in JS the 6 values are considered "falsy"
//     - false
//     - null
//     - undefined
//     - 0
//     - NaN
//     - ""
// all the other values are truthy

var user = {};

user.name = "";
user.age = 0;
user.ai = null;
user.id = "password"*0;
user.givesUp = false;

const test = user["name"];

if (test) {
    console.log("you will end up here if user is truthy !!!");
} else {
    console.log("else if user is falsy, you will end up here !!!");
}