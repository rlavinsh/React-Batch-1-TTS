let counter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");

let count = 0;
plus.addEventListener("click", () => {
  count = count + 1;
  counter.innerText = count;
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count = count - 1;
    counter.innerText = count;
  } else {
    alert("Value can't be negative");
  }
});

reset.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
});
