import React from 'react'
import './App.css'

// function App() {
//   var user = {role: "admin"}
//   var chosenTemplate;
//   if (user.role === "admin") {
//     chosenTemplate = <p>I'm template A</p>;
//   } else {
//     chosenTemplate = <p>I'm template B</p>;
//   }
//   return chosenTemplate;
// }

// let's implement this with a ternary operator
// function App() {
//   var username = "Gérard"
//   var user = username !== "Gérard" ? { role: "user" } : { role: "admin" };
//   return user.role === "admin" ? <p>I'm template A</p> : <p>I'm template B</p>;
// }

const age = 17;
const loveJS = true;
const falsyExpression = true && false && true;
const truthyExpression = 300 < 400;

// JSX templates are regular JS expressions, not statements
// Therefore we can't use if / else if / else statements inside of JSX
// This workaround uses Guard operators for conditionnal rendering
function App() {
  return (
    <div className="App">
      {age < 18 && <p>Sorry, you can't drive a car yet (in France)</p>}
      {loveJS && <p>Always bet on JS</p>}
      {falsyExpression && <p>Guard me if falsy</p>}
      {truthyExpression && <p>Release me if truthy</p>}
    </div>
  );
}


export default App;
