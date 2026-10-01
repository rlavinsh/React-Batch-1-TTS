import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    //sideeffect
    let timerId = setInterval(() => {
      //   console.log(`count ${count}`);
      setCount(count + 1);
    }, 5000);
    // Clean up function
    return () => {
      clearInterval(timerId);
      console.log(count);
    };
  });
  // dependency array[]

  console.log("===================================");
  //   useEffect(() => {
  //     console.log("count mein changes kiye ja rahe hein");
  //   }, [count1, count]);

  return (
    <div>
      <h1>Count1: {count}</h1>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count1
      </button> */}
      {/* <h2>=================================</h2> */}
      {/* <h2>Count2:{count1}</h2>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Count2
      </button> */}
    </div>
  );
};

export default Timer;
