// es5 tiny module pattern using closure concept
console.log("-----------------------\n@module_es5.js\n-----------------------");
const ff = (function ff() {
    "use strict";
    
    const author = "gui";
    const version = "0.0.0";

    function getNow() {
      return `${version} - Date.now()`;
    }

    console.log("bye bye IIFE :)");

    return {
        api: {
            author,
            getNow,
            v: version
        }
    }
}());

console.log(ff.api)
console.log(ff.api.v)
console.log(ff.api.getNow())

window.setInterval(function() {
    console.log(ff.api.getNow())
}, 5000)