console.log("-----------------------\n@more_on_scopes.js\n-----------------------");
function f() {
  "use strict";

  var a = "i'm defined in parent scope (f)";

  function fa() {
    var user = { name: "you" };
    console.log("user in fa equals : \n");
    console.log(user); // user object
    console.log("=====================\n");
  }
  
  function fb() {
    var a = true;
    console.log("a in fb equals : " + a); // true
    console.log("=====================\n");
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

f();
