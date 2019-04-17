/*
    ---- one (amongst many other) workflow ----
*/

// this script has been declared as a module
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

// A - reference elements needed all around the module (local)
const el = document.getElementById("tag_id");
const all = document.querySelectorAll("*");
const some = document.querySelectorAll(".link");

// B - Declare your functions
function doSomeCoolStuffWithTheDOM(evt) {
  console.log(evt);
}

function keepOnLearning(evt) {
  console.log(evt);
  // element reference should be function scoped when possible
}

// C - Link event-listeners tied to event-handlers

// for one single element...
el.onclick = doSomeCoolStuffWithTheDOM;
// or for a list of elements...
all.forEach(element => {
  if (element.classList.contains("link")) {
    element.onclick = keepOnLearning;
  }
});
