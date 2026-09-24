import React, { useState } from "react";

const App = () => {
  // let count = 0;
  const [count, setCount] = useState(0);
  function handleCount() {
    // count = count + 1;
    setCount(count + 1);
    // console.log(count);
    console.log("render hua");
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default App;
