// script tag type is "text/javascript"
// let's pretend we're running this file on the browser....

console.log(this); // window

function test() {
  console.log(this); // window
}

function test2() {
  "use strict";
  console.log(this); // undefined
  // console.log(window);
  // window.console.log();
}

function GameE5S() {
  if (!(this instanceof Game)) throw Error("hey you must instanciate Game");
  console.log(this); // this === is the object constyructed right now !!!
}

Game.prototype.start = function() {
  var that = this;
  setInterval(function() {
    console.log(that); // that ==== Game{}
    console.log(this); // this === window
  }, 1000);
};

class Game {
  constructor() {
    console.log(this); // current constructed object ...
  }
  printTime() {
    console.log(this); // Game {}
    // setInterval(function() {
    //     console.log(this); // this === undefined
    // }, 1000); // you should bind it with function syntax
    setInterval(() => {
      console.log(this); // Game{}
    }, 1000); // no need to bind with () => syntax
  }
}

const g1 = new Game();
// const g2 = Game();
// g2.start();

test();
test2();
