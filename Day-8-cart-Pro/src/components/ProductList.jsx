import React from "react";
import ProductCard from "./ProductCard";
const ProductList = ({ addToCart }) => {
  return (
    <div className="parent">
      <ProductCard name={"Iphone15"} price={15000} addToCart={addToCart} />
      <ProductCard name={"Laptop"} price={12000} addToCart={addToCart} />
      <ProductCard name={"Headphone"} price={5000} addToCart={addToCart} />
    </div>
  );
};

export default ProductList;
