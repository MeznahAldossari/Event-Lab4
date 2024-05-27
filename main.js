let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let reg = document.getElementById("reg");

let button = document.getElementById("button");

//
input1.addEventListener("change", () => {
  reg.style.width = input1.value + "%";
});
input2.addEventListener("change", () => {
  reg.style.height = input2.value + "vh";
});
input3.addEventListener("change", () => {
  reg.style.backgroundColor = input3.value;
});

button.addEventListener("click", () => {
  reg.style.width = "30%";
  reg.style.height = "40vh";
  reg.style.backgroundColor = "blue";
  console.log("hello");
});
// function width() {
//   reg.style.width = input1.value + "%";
// }

// function height() {
//   reg.style.height = input2.value + "%";
// }

// function color() {
//   reg.style.backgroundColor = input3.value + "%";
// }
