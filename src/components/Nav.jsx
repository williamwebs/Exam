import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ image, name }) {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <div className="auth_img">
            <img src={image} alt="image" />
          </div>
          <div className="name">{name}</div>
        </div>
        <div className="links">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/about" className="link">
            About
          </NavLink>
          <NavLink to="/login" className="link">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Nav;
