import React from "react";

const Card = (props) => {
  //   console.log(props);

  return (
    <div className="card">
      <h1>Hello {props.name}</h1>
      <h3>Age: {props.age}</h3>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {/* <p>{props.isLogin ? `Welcome ${props.name}` : `Please login First`}</p> */}
      <button onClick={() => props.greet(props.name)}>click</button>
    </div>
  );
};

export default Card;
