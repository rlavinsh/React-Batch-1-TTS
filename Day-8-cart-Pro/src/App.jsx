import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log(product);
    setCart([...cart, product]);
    console.log(cart.length);
  };

  return (
    <div>
      <Navbar cart={cart.length} />
      <ProductList addToCart={addToCart} />
      <Cart cart={cart.length} product={cart} />
    </div>
  );
};

export default App;
