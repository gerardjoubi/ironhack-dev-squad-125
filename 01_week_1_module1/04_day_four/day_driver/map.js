import data from "./data.js";

console.log("============================");
console.log("============MAP=============");
console.log("============================");

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map

const hellos = [];

console.log(hellos.length);

hellos.push("bonjour");
hellos.push("salaam", "shalom");
hellos.push("ola");
hellos.push("hola");

console.log(hellos.length);
console.log(hellos);

const resHellos = hellos.map(function(currVal) {
    return currVal + " means hello in eng";
});

console.log(resHellos);












// const newVersion = data.things.map((t, i) => {
//   return i + " --> " + t.name + " added : value through map !";
// });

// console.log(newVersion);


