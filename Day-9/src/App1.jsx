import React, { useState } from "react";

const App1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      password: password,
    };
    console.log(data);

    alert("Form Submitted");
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={handleName}
        />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <button>submit</button>
      </form>
      <hr />
      <h2>Live Preview</h2>
      <hr />
      <h1>Name:{name}</h1>
      <h2>Email:{email}</h2>
      <h2>Password:{password}</h2>
    </div>
  );
};

export default App1;
