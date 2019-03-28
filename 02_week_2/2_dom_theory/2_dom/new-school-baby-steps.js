console.log("-- HELLO NEW SCHOOL of DOM --");

/*
  ---- DOM SELECTION + ASSIGNEMENTS ----
*/

// document.getElementById selects one object element by its id (if not found, returns null)
const myNav = document.getElementById("nav_main");
const btnAddCircle = document.getElementById("btn_add_circle");

// document.querySelector fetches the first element matching the provided css selector (if not found, returns null)
const myCircle = document.querySelector(".circle");

// document.querySelectorAll fetches all elements matching provided css selector and returns a nodeList (if no match, nodeList ii empty)
const navItems = document.querySelectorAll("#nav_main .link");
const circles = document.querySelectorAll(".circle");
console.log(myNav, btnAddCircle, navItems, myCircle, circles);


/*
  ---- FUNCTIONS DECLARATIONS ----
*/

// add inline style to the nav tag
function addInlineStyles() {
  myNav.style.background = "dodgerblue";
  myNav.style.fontSize = "18px";
}


// loop through each navItems =>
function parseNavItems() {
  for (let i = 0; i < navItems.length; i++) {
    console.log(`--- link n° ${i} ---`, navItems[i]); // each object representing an html a.link tag...
    if (i === 2) {
      navItems[i].id = "id_created_via_js_code"; // direct access is ok for standard attributes
      navItems[i].href = "http://google.com"; // here also
      navItems[i].setAttribute("data-my-custom-thing", "hey hey"); // for custom attr,
    }
  }
}

function clickHandler(evt) {
  // console.log("clicky thing ;)", evt, typeof evt, this);
  const source = evt.target || evt.srcElement; // cross browser proof trick : )
  // console.log(source); // source now contains the element that triggered the event
  source.classList.toggle("is-active");
}

// add a circle to the cirlces parent container
function addCircle(evt) {
  // console.log(evt);
  const parent = document.getElementById("circles");
  const newCircle = document.createElement("div");
  newCircle.classList.add("circle");
  newCircle.onclick = clickHandler;
  parent.appendChild(newCircle);
}


/*
  ---- MY ABOVE DEFINED FUNCTIONS CALL
*/

// parseNavItems();
// addInlineStyles();

/*
  ---- EVENTS HANDLERS ---- (EVENTS ARE FUN)
*/

// if you see a js code that looks like on...Something,
// like onclick, onload, ondblclick, onmouseenter...
// the onThing is an event listener
// an event listener MUST be tied to a function

btnAddCircle.onclick = addCircle;

myCircle.onclick = clickHandler;

// myCircle.onclick = clickHandler(); // this will NOT work as expected
// So DONT use the parentheses on eventHandler reference!!!

circles.forEach(circle => {
  circle.onclick = clickHandler;
});




