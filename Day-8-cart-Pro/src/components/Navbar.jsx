import React from "react";

const Navbar = ({ cart }) => {
  return (
    <div className="navbar">
      <h1>My Store</h1>
      <h3>Cart:{cart}</h3>
    </div>
  );
};

export default Navbar;
