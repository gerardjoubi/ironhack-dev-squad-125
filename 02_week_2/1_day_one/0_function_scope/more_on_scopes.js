console.log("-----------------------\n@more_on_scopes.js\n-----------------------");
var a = "fred"

function f() {
  "use strict";
  // bad = "choobidoo"  
  var a = "i'm defined in parent scope (f)";
  console.log(a)

  function fa() {
    var user = { name: "you" };
    console.log("user in fa equals : \n");
    console.log(user); // user object
    console.log("=====================\n");

    function x() {
      var xVal = "";
      console.log(user)
    }

    console.log(xVal);

    x();
  }
  

  {

  }


  function fb() {
    var a = true;
    console.log("a in fb equals : " + a); 
    console.log("=====================\n");
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
    }
  }

  fa();
  fb();

  console.log("a in f equals:", a); // "i'm defined in parent scope (f)"
  console.log("=====================\n");

  try {
    console.log("user in f equals : " + user); // throws ReferenceError: user is not defined
  } catch (err) {
    console.warn(err);
  }

  console.log("end of f");
}

console.log(a); // is fred

f();
