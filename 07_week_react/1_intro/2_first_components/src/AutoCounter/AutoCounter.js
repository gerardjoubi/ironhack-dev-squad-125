import React, { Component } from "react";
import "./AutoCounter.css";

export default class AutoCounter extends Component {
  state = {
    count: 0
  };
  constructor() {
    super();
    this.updateCount();
  }
  updateCount() {
    // new school
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    
    // old school
    // function clbk() {
    //     this.setState({ count: this.state.count + 1 });
    // }
    // setInterval(clbk.bind(this), 1000);
  }
  render() {
    return <div className="counter">{this.state.count}</div>;
  }
}
