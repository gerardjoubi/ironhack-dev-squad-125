import React, { Component } from "react";
import "./FormProduct.css";

export default class FormProduct extends Component {
  state = {
    name: "",
    ref: "",
    price: 0
  };
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
  };
  handleInput = evt => {
    // let's take out the actual name out of the current typed input
    const { name, value } = evt.target; // extract name and value from
    this.setState({ [name]: value }); // generic way to access any state key/value pair
    // example: this.state.price value will be equal to the value of the form field wich name attribute is price
  };
  render() {
    const { handleInput, handleSubmit } = this;
    return (
      <React.Fragment>
        <h1 className="title">Create a new product</h1>
        <form id="form_product" onSubmit={handleSubmit}>
          <label htmlFor="name" className="label">
            name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="input"
            onChange={handleInput}
          />
          <label htmlFor="ref" className="label">
            reference
          </label>
          <input
            id="ref"
            name="ref"
            type="text"
            className="input"
            onChange={handleInput}
          />
          <label htmlFor="price" className="label">
            price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            className="input"
            onChange={handleInput}
          />
          <button className="btn">ok</button>
        </form>
      </React.Fragment>
    );
  }
}
