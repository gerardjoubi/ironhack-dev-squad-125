import React from "react";
import { NavLink } from "react-router-dom";
// SMACSS => SCALABLE AND MODULAR ARCHITECTURE FOR CSS (usefull methodology)
//check @ http://smacss.com/

export default function NavMain() {
  return (
    <nav id="nav_main">
      <NavLink className="link" activeClassName="is-active" to="/" exact>
        Home
      </NavLink>

      <NavLink className="link" activeClassName="is-active" to="/about">
        About
      </NavLink>

      <NavLink className="link" activeClassName="is-active" to="/shop">
        Shop
      </NavLink>
    </nav>
  );
}
