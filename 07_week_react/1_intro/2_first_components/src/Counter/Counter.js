import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  state = {
    count: 0
  };

  incrementCount = () => this.setState({ count: this.state.count + 1 });

  decrementCount = () => this.setState({ count: this.state.count - 1 });

  render() {
    const {count} = this.state;
    return (
      <div className="counter">
        <hr />
        <p className={count > 0 ? "success" : "danger"}>{count}</p>
        <hr />
        <button id="decrement" className="btn" onClick={this.decrementCount}>
          <span>-</span>
        </button>
        <button id="increment" className="btn" onClick={this.incrementCount}>
          <span>+</span>
        </button>
      </div>
    );
  }
}
