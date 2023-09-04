import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarCls">
      <div className="">
        <h3>Dictionary App</h3>
      </div>
      <div className="linkCls">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
      </div>
    </div>
  );
};

export default Navbar;