import React from "react";

const App = () => {
  function greet() {
    console.log("Welcome students");
  }

  function getData(userName, userEmail) {
    console.log(`My Name is ${userName}`);
    console.log(`My Email is ${userEmail}`);
  }
  let name = "";

  function handleChange(event) {
    name = event.target.value;
  }
  function handleSubmit(event) {
    if (!name) {
      alert("Please enter the name");
      return;
    }
    event.preventDefault();
    console.log("Form Submitted");
    console.log(name);
  }

  function handleChange1(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      {/* <h1
        style={{ border: "2px solid black", margin: "10px" }}
        onMouseEnter={() => console.log("Enter Event")}
        onMouseLeave={() => console.log("Leave Event")}
      >
        Hello React
      </h1>
      <button onClick={greet}>click</button>
      <button
        onClick={() => {
          console.log("welcome students !!!");
        }}
      >
        click2
      </button>

      <button onClick={() => getData("john", "john123@gmail.com")}>
        getData
      </button> */}
      {/* <label htmlFor="">Name:</label>
      <input
        type="text"
        placeholder="enter your name"
        onChange={handleChange}
      /> */}

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          placeholder="enter your name"
          onChange={handleChange}
        />

        <button>submit</button>
      </form> */}

      <form>
        <label htmlFor="">FirstName:</label>
        <input type="text" onChange={handleChange1} />
        <br />
        <br />
        <label htmlFor="">LastName:</label>
        <input type="text" onChange={handleChange1} />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input type="email" onChange={handleChange1} />
        <br />
        <br />
        <select onChange={handleChange1}>
          <option value="">Select city</option>
          <option value="indore">Indore</option>
          <option value="gwalior">Gwalior</option>
          <option value="bhopal">Bhopal</option>
          <option value="jabalpur">Jabalpur</option>
        </select>
      </form>
    </div>
  );
};

export default App;
