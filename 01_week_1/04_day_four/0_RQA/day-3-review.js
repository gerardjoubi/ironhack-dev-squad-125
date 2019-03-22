(function() {
/*
====================
Selecta
====================
remember the basics :
classes => .
id      => #
tag     => tagName , ex: div or span

ids => #
element => element 

section ul a
section, ul, a
.list > .item.is-active .item

====================
Fun fun fun
====================
*/

function f(a, b, c) {
    /** all lines below will return undefined */
    //
    // return undefined;
    // return;
}

function getDateNow() {
    var now = Date.now();
    return now;
}

function action2() {
    return 42;
}

var exec1 = getDateNow();
var exec2 = action2();

/*
====================
NaN or Not ?
====================
*/

console.log(NaN != NaN); // true
console.log(isNaN(1)); false
console.log(isNaN("hello")); // true
console.log(isNaN(1 + 1)); // false
console.log(isNaN(1 + "3")); "13" // false
console.log(isNaN(true)); // false
console.log(isNaN(1 * "good")); // true
console.log(isNaN(NaN));  // true...


}())