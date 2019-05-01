import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import "./NavMain.css";

export default function NavMain() {
  return (
    <nav id="nav_main">
      <NavLink className="link" activeClassName="is-active" to="/" exact>
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
    </nav>
  );
}
