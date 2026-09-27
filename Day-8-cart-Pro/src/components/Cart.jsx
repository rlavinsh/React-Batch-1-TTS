import React from "react";

const Cart = ({ cart, product }) => {
  console.log(product);

  return (
    <div>
      <h1>Cart:{cart}</h1>

      {product.map((pro, index) => {
        return (
          <>
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 50px",
              }}
            >
              <span>{pro.name}</span>
              <span>{pro.price}</span>
            </div>
            <hr />
          </>
        );
      })}

      <h2 style={{ textAlign: "right" }}>Total</h2>
      <button>clear cart</button>
    </div>
  );
};

export default Cart;
