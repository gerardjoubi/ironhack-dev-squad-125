JS/ES has 7 built in types 

PRIMIVES TYPES
- Number
- String
- Boolean
- null
- undefined
- Symbol (es6 new feature => out of the scope of this course)

OBJECT TYPE

==============================================================
// NUMBERS
1
1.33
1e10
1+1
1*10-13

there is a special number called NaN (Not A Number)

convertor function : Number()

==============================================================
// STRINGS
"hello world"
'please enter mail and password'
'guillaume'
"Iron Hack"

'please pay attention" SYNTAX ERROR, watch out

convertor function : String()

==============================================================
// BOOLEAN 
true (1)
false (0)

convertor function : Boolean()

NOT true => !true === false
NOT false => !false === true

++++++++++++++++

TABLE OF TRUTH =>

AND TABLE => false WINS
true && true === true
false && false === false
true && false === false
false && true === false

OR TABLE => true WINS
true || true === true
false || false === false
true || false === true
false || true === true

++++++++++++++++
==============================================================
null => temporary OR definitive absence of data
==============================================================
undefined (void, no data at all => cannot compute)
==============================================================
=========================OBJECTS===============================

OBJECTS ARE COLLECIONS OF KEY/VALUE PAIRS =>
they represent real world OR abstract entities

var o = {};

var student = {
    name: "Fred",
    age: 26,
    learnJS: true,
    favoriteColor: null,
    phone: {
        brand: "Apple",
        model: "5",
        price: 500,
        color: "white"
    }
};

================ARRAY==============================================
var list = ["foo", "bar", "baz"];
console.log(list, typeof list);
















