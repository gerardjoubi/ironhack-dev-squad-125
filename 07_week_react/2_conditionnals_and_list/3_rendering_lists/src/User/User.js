import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./User.css";

// let's use a fat arrow function to declare this functional component
// props are destructured just below
const User = ({ user, onClick: parentClick }) => (
  // console.log(onClick); // points directly to handleClick() @parent component
  // let's rename this handler to myClick to avoid confusion ...
  // onClick={} below is the "emulated" click DOM event
  <li className="user">
    <span className="name">{user.name}</span>
    <span className="email">{user.email} </span>
    {/* when clicked, this jsx element will trigger the function passed as a prop */}
    {/* the wrapping function is needed here to pass the user value back to parent */}
    <FontAwesomeIcon
      icon={faEye}
      className="icon"
      onClick={() => parentClick(user)}
    />
  </li>
);

export default User;
