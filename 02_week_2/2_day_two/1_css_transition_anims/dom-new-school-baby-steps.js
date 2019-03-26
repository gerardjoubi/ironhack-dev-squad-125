console.log("-- HELLO NEW SCHOOL of DOM --");

// select one element by its id (null otherwise)
const myNav = document.getElementById("nav_main");
console.log(myNav);
// hey document, please give the first element matching the provided css selector (null otherwise)
const myCircle = document.querySelector(".circle");
console.log(myCircle);
// hey document, please give all elements matching the provided css selector
const navItems = document.querySelectorAll("#nav_main .link");
console.log(navItems);
// loop through each navItems =>
for (let i = 0; i < navItems.length; i++) {
  console.log(`--- link n° ${i} ---`);
  console.log(navItems[i]); // each objects representing each html tag...
}
