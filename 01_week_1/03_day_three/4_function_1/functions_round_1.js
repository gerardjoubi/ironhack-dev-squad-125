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

const res = drill(true);
console.log("------");
console.log(res); // drill
console.log("------");

var res2 = drill(false);
console.log(res2); // pause
res2 = drill();
console.log(res2); // pause

console.log("------");

// comment return statement above (drill) to play with snippet below
// if (drill()) {
//     console.log("happy :)");
// } else {
//     console.log("sad :(");
// }

// write a simple function foo that return the string "bar"
// execute it and log its result !!!


function foo() {
    return "bar"
}

// console.log(foo());
// console.log(typeof foo());

var x = foo();
// x === 23
var y = foo();
// y === 23
var z = foo();
// z === 23

console.log("equals ? ", x === y && y === z); //true
// console.log(x === y, true === z,  x === y === z); // bad design, won't work ;)

// modify this function
// if the result is NaN, return an Error
// else return the result
function multiply(a, b) {
    var res = a * b;
    // yo may try with isFinite()
    if (isNaN(res)) {
        throw new Error("Cannot multiply this...");
    }
    return res;
}

console.log("------");

try {
    let res;
    res = multiply(23, 13);
    console.log("res 1 =>", res);
    res = multiply(2, "2");
    console.log("res 2 =>", res);
    res = multiply(2, "helloworld"); // this will trhow an error
} catch(err) {
    console.log("------");
    console.error("error catched here\n\n", err)
}



// CALLBACK simple
// A/ remember, in JS function are object
var a = function (clbk) {
    // C/ these sent functions are usualy refered as callbacks
    // so call me maybe ;D
    const localData = true;
    return clbk(localData); // a function cna be executed in an other function
};

var b = function b(payload) {
    console.log("------");
    console.log("HURRAY !!! first callback ; ) ... more coming");
    console.log(payload ? "payload => " + payload : "");
};

const finalBoss = a(b); // B/ so functions can be passed as regular values
console.log("------");
console.log(finalBoss); // undefined , as b's return value (for now)