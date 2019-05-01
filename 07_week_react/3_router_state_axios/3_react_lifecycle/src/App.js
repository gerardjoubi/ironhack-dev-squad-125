import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Component Life Cycle</h1>
      <p>
        Each component has a life cycle. You can use some built in functions
        to perform actions at certain timing, according to your needs.
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://reactjs.org/docs/react-component.html?utm_source=caibaojian.com"
        >
          Here is the official doc page
        </a>
        <br />
      </p>
      <hr />
      <h2 className="title">Most common Lifecycle functions</h2>
      <ul>
        <li>render</li>
        <li>constructor</li>
        <li>componentDidMount</li>
        <li>componentDidUpdate</li>
        <li>componentWillUnmount</li>
      </ul>
      <hr />
      <h2 className="title">Full Diagram</h2>
      <p>The cheatsheet belows shows the full process</p>
      <img
        id="cheatsheet"
        src="./images/lifecycle-cheatsheet.png"
        alt="cheatsheet"
      />
    </div>
  );
}

export default App;
