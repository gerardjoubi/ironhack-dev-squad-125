import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <h1 className="title">Home</h1>
      <p>
        Welcome to a simple React routing app.
        <br />
        <span>Check the react-router package doc&nbsp;</span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://reacttraining.com/react-router/"
        >
          here</a>
        <br />
        more on document fragments
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://developer.mozilla.org/fr/docs/Web/API/DocumentFragment"
        >
          here</a>
        />
      </p>
    </React.Fragment>
  );
}
