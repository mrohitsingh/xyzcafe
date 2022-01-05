import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-items">
      <Link to="/" className="items">
        XYZ Cafe
      </Link>
      <Link to="/burger" className="items">
        Burger Dishes
      </Link>
      <Link to="/panner" className="items">
        Panner Dishes
      </Link>
    </div>
  );
}

export default Nav;
