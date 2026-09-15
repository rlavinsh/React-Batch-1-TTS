import React from "react";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;

// HTML + JS ka jo bhi mixup hota hein ushi ko hum JSX kehte hein

{
  /* <div>
      <h2>Hello React,Kaise ho,kyu humari band baja rahe ho 1</h2>,
      {/* Babel -> Transplier */
}
//   {React.createElement(
//     "h1",
//     { style: { backgroundColor: "orange" } },
//     "Hello React,Kaise ho,kyu humari band baja rahe ho 2",
//   )}
// </div> */}

// old Approach -> Imperative -> step by step define karna padta hein

// React is a Declarative
