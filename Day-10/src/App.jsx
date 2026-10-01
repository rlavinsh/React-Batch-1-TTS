import React, { useEffect, useState } from "react";
import Timer from "./Timer";
const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  function handleTimer() {
    setShowTimer(false);
  }

  // useEffect(() => {
  //   //sideeffects
  //   console.log("mujhe call kiya ja raha hein");
  // });
  return (
    <div>
      {/* <Timer /> */}
      {showTimer && <Timer />}
      <button onClick={handleTimer}>Hide timer</button>
    </div>
  );
};

export default App;
