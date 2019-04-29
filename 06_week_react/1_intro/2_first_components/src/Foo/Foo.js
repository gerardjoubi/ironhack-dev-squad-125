import React from "react";
/*
export default function foo({ name , lastname}) {
    return (
    <p>
        i'm {name} {lastname}!!!
    </p>
    );
}
*/
export default function foo(props) {
    // the parenthesis are mandatory for multiline JSX expressions
    return (
      <p>
        i'm {props.name} {props.lastname}!!!
      </p>
    );
}