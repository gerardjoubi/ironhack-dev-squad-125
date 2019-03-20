/*
    In JS, functions are first class objects
    But yeah, JS is weird sometimes ...
    as typeof function() {} is 'function', not 'object' ...
    In JS, functions are first class objects
    They are "constructed" by the Function() constructor
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function
    Any function inherits directly from Object.prototype
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object
*/

function drill(mode) {
    var message;
    if (mode) message = "drill";
    else message = "pause";
    return message;
}

function drill2(mode) {
    var message;
    try {
        if (!)
        if (mode) message = "drill";
        else message = "pause";
        return message;
    } catch(err) {

    }
}

// const res = drill();
// console.log(res); // ???

// if (drill()) {
//     console.log(":)");
// } else {
//     console.log(":(");
// }

// write a simple function foo that return the string "bar"
// execute it and log its result !!!


function foo() {
    return 23
}

// console.log(foo());
// console.log(typeof foo());

var x = foo();
// x === 23
var y = foo();
// y === 23
var z = foo();
// z === 23

console.log(x === y && y === z); //true

// modify this function
// if the result is NaN, return an Error
// else return the result
function multiply(a, b) {
    var res = a * b;
    // yo may try with isFinite()
    if (isNaN(res)) {
        return new Error("Cannot multiply this dude...");
    }
    return res;
}
console.log("------");

// var result1 = multiply(2, "helloworld");
// console.log(result1);

// var result2 = multiply(2, "2");
// console.log(result2);


// CALLBACKS

// in JS function are object

var a = function (clbk) {
    return clbk();
};

var b = function b() {
    console.log("HURRAY !!! first callback ; ) ... more coming");
};

const finalBoss = a(b);
console.log(finalBoss);