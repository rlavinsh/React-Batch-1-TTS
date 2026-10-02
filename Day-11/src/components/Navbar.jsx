import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h1>My Store</h1>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/services">Services</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
