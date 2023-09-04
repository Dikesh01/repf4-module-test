import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarCls">
      <div className="">
        <h3>Dictionary App</h3>
      </div>
      <div className="linkCls">
        <NavLink to="/" style={{ color: "#e9dede", fontSize:"14px" }}>
          Home
        </NavLink>
        <NavLink to="/history" style={{ color: "#e9dede", fontSize:"14px" }}>
          History
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
