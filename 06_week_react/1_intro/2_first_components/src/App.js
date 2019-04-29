import React from "react";
import HelloReact from "./HelloReact/HelloReact";
import NiceImage from "./NiceImage/NiceImage.js";
import PropsTestComponent from "./PropsGoesDown/PropsGoesDown.js";
import Foo from "./Foo/Foo";
import Counter from "./Counter/Counter";
import AutoCounter from "./AutoCounter/AutoCounter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HelloReact />
      <Foo name="Foo" lastname="Web" />
      <Foo name="Bar" lastname="Web" />
      <Foo name="Baz" lastname="Web" />
      <NiceImage />
      <AutoCounter />
      <Counter />
      <PropsTestComponent color="white" bg="black" txt="hello world" />
      <PropsTestComponent color="white" bg="dodgerblue" txt="react is fun" />
    </div>
  );
}

export default App;
