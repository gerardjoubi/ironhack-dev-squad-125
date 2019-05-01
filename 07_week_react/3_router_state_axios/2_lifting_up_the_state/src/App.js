import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <p>
        In React, sharing state is accomplished by moving it up to the closest
        common ancestor of the components that need it.
        <br /> This is called “lifting state up”.
        <hr/>
        To get a better understanding of events/callbacks, follow the official tutorial
        <hr/>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/lifting-state-up.html"
        >
          <b>doc ref</b>
        </a>

      </p>
    </div>
  );
}

