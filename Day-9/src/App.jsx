import React, { useState } from "react";
import App1 from "./App1";
import App2 from "./App2";
const App = () => {
  const [data, setData] = useState("");
  // limit = 20;
  function handleChange(e) {
    setData(e.target.value);
    if (e.target.value.length == 20) {
      alert("limit over");
      return;
    }
  }
  return (
    <div>
      {/* <input
        type="text"
        placeholder="type something"
        onChange={handleChange}
        maxLength={20}
      /> */}
      {/* <h1>{data}</h1> */}

      <App2 />
    </div>
  );
};

export default App;
