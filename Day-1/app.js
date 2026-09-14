// const heading1 = document.createElement("h1");

// heading1.innerText = "welcome kaise ho!!";
// heading1.style.backgroundColor = "orange";
// heading1.style.fontSize = "24px";

// const root = document.getElementById("root");

// const heading2 = document.createElement("h1");

// heading2.innerText = "React Introduction";
// heading2.style.backgroundColor = "yellow";
// heading2.style.fontSize = "30px";

// root.append(heading1);
// root.append(heading2);

const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);
    element.innerText = children;
    for (let key in styles) {
      element.style[key] = styles[key];
    }
    return element;
  },
};

const heading1 = React.createElement(
  "h1",
  { backgroundColor: "orange", fontSize: "24px" },
  "welome kaise ho",
);
const para = React.createElement(
  "p",
  { backgroundColor: "Yellow", fontSize: "30px" },
  "React Introduction",
);

const ReactDOM = {
  render: function (ele, root) {
    root.append(ele);
  },
};

ReactDOM.render(heading1, document.getElementById("root"));

ReactDOM.render(para, document.getElementById("root"));

// root.append(heading1);
// root.append(para);