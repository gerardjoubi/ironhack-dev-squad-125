import data from "./data.js";

console.log("dataset", data);

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach

data.nums.forEach(n => {
  console.log(n);
});

data.things.forEach(function(t) {
    console.log(t);
    console.log(this);
}, "that");