// function test() {
//   var d;
//   var user = {};

//   function a() {
//     function aa() {
//       d = "yo";
//       console.log(d);
//     }
//     console.log(d);
//   }
//   function b() {
//     function bb
//   }
//   a();
//   b();
// }
// test();

function foo() {
  "use strict";
  var x = "hello";
  console.log("o =>", x);
  //   console.log(this); /// ????

  function bar(p) {
    console.log("1 =>", p);
    p = p + " bar :D";
    console.log("2 =>", p);
  }

  function baz(p) {
    console.log("4 =>", p);
    p = "hello baz :D";
    console.log("5 =>", p);
    return p;
  }

  bar(x);
  console.log("3 =>", x); /// watchout here !!!!!!!!!
  x = baz(x);
  console.log("6 =>", x);
}

foo();
