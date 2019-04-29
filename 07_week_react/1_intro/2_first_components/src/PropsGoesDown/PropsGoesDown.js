import React from "react";
import "./PropsGoesDown.css";

// reproduce this component
// try to do it by heart (if you're lost, copy from here ;)
// pass down some props (txt / bg / color)
// bonus : if the prop.key isn't provided, set a default value !!!
export default function propsAreParametersLike(props) {
  return (
    <div
      className="props-intro"
      style={{ background: props.bg, color: props.color }}
    >
      {props.txt}
    </div>
  );
}

// bg, color and txt are passed down the component as this.props
// actually, they are custom attribute on the HMTL (JSX) tag
// export default function propsAreParametersLike({bg, color, txt}) {
//     return <div className="props-intro" style={{background:bg, color: color}}>{txt}</div>
// }
