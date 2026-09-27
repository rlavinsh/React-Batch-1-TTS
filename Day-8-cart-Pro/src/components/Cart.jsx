import React from "react";

const Cart = ({ cart, product, clearCart }) => {
  console.log(product);

  const total = product.reduce((sum, pro) => {
    return sum + pro.price;
  }, 0);

  return (
    <div>
      <h1>Cart:{cart}</h1>

      {product.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        <>
          {product.map((pro, index) => {
            return (
              <div key={index}>
                <div className="cart-item">
                  <span>{pro.name}</span>

                  <span>₹{pro.price}</span>
                </div>

                <hr />
              </div>
            );
          })}
          <div className="cart-bottom">
            <h2>Total: ₹{total}</h2>

            <button onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
