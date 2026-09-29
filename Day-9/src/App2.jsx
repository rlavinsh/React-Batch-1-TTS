import React, { useState } from "react";

const App2 = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    // const { value, name } = e.target;

    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(student);
    alert("Form Submitted");
    setStudent({
      name: "",
      email: "",
      password: "",
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={student.name}
          onChange={handleChange}
          name="name"
        />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={student.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={student.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <br />
        <button>submit</button>
      </form>
      <hr />
      <h2>Live Preview</h2>
      <hr />
      <h1>Name:{student.name}</h1>
      <h2>Email:{student.email}</h2>
      <h2>Password:{student.password}</h2>
    </div>
  );
};

export default App2;
