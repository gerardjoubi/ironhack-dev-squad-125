(function() {
  /*

====================
Selecta
====================

[lang=en]
span::after
span::before
.link.is-active:not(.is-selected)
[data-is-human=true]

====================
Func
====================
*/

console.log("===========ARRAY 1D, 2D, parsing==================");

// var newWay0= () => {};
// var newWay1 = x => 42;
// var newWay2 = () => true;
// var oldWay = function() {};

var mySuperValue = 10; // functional scope
// const arr = []; // you can't assign a constant twice
arr = []; // error

function parseArray(arr, clbk) {

    return arr.forEach(function(element) {
      if (clbk) clbk(element);
      else console.log(element);
    });
  }

  function parse2D(arr, clbk) {
    return arr.forEach(x => {
      arr.forEach(y => {
        if (clbk) clbk(y);
        else console.log(y);
      });
    });
  }

  function clbkTrick(input) {
    console.log("in callback", input);
  }

  var room = [
    { id: 1, name: "Player 1" },
    { id: 2, name: "Player 2" },
    { id: 3, name: "Player 3" },
    { id: 4, name: "Player 4" }
  ];

  var multiroom = [
    {
      name: "green room",
      players: [
        { id: 1, name: "Player 1" },
        { id: 2, name: "Player 2" },
        { id: 3, name: "Player 3" },
        { id: 4, name: "Player 4" }
      ]
    },
    {
      name: "red room",
      players: [
        { id: 1, name: "Player 1" },
        { id: 2, name: "Player 2" },
        { id: 3, name: "Player 3" },
        { id: 4, name: "Player 4" }
      ]
    },
    {
      name: "black room",
      players: [
        { id: 1, name: "Player 1" },
        { id: 2, name: "Player 2" },
        { id: 3, name: "Player 3" },
        { id: 4, name: "Player 4" }
      ]
    }
  ];

  parseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  parseArray(["hello", "world", "of", "baz"]);
  parseArray(room, clbkTrick);
  parse2D(multiroom, clbkTrick);
})();

console.log("===========REDUCE==================");

const nbs1 = [1, 1, 1, 1];
const nbs2 = [1, 2, 2];

const sum = function (acc, nb) {
    return acc += nb;
};

console.log(nbs1.reduce(sum)); // no param, so 1 < 2 < 3 < 4
console.log(nbs2.reduce(sum, 23)); // param, so 23 < 26 < 28
