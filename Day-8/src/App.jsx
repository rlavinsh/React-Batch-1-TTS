import React from "react";
import { useState } from "react";
const App = () => {
  // console.log(useState("Lavinsh"));
  const [count, setCount] = useState(15);

  // let count = 0;
  // console.log("function phir se call ho raha hein");
  function IncreaseCount() {
    // count++;
    setCount(count + 1);
    console.log(count);
  }
  function decreaseCount() {
    // count--;
    setCount(count - 1);
    console.log(count);
  }

  const [showPassword, setShowPassword] = useState(false);

  function handlePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button> */}

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your Password"
      />

      <button onClick={handlePassword}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default App;
