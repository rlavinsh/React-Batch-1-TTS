import React from "react";

const ProductCard = ({ name, price, addToCart }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h3>{price}</h3>
      <button onClick={() => addToCart({ name: name, price: price })}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
