import React from "react";
import Card from "./components/Card";
const App = () => {
  // function greet() {
  //   console.log("welcome");
  // }

  function greet(userName) {
    console.log(userName);
  }

  const skills = ["HTML", "CSS", "JS", "JAVA"];
  const user = {
    firstName: "John",
    lastName: "sharma",
  };
  return (
    <div>
      <Card
        name={"Rohan"}
        age={22}
        isLogin={false}
        greet={greet}
        skills={skills}
        user={user}
        greet1={<h1></h1>}
      />
    </div>
  );
};

export default App;
