import React from "react";
import "./NiceImage.css";

export default function niceImage() {
    // the path of the image is relative ton public/index.html !!!!
    return <img alt="a nice pic" className="nice-image" src="./img/fractale.jpg" />
}

// @todo
// use props to provide src and alt value for each version of this component
// if no props are provided, use default values 