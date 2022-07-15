const btnEl = document.querySelector(".btn");
const colorTxt = document.querySelector(".color");

const colors = [
  "red",
  "green",
  "pink",
  "purple",
  "orange",
  "#FF0000",
  "#9c528b",
  "rgb(314, 47, 61)",
];

//change color
function colorChanger() {
  //step: 1 select body
  const body = document.querySelector("body");
  //step: 2 random
  let random = Math.floor(Math.random() * colors.length);
  let colorSelected = colors[random];
  //step 3: change bg color
  body.style.backgroundColor = colorSelected;
  //step 4: display the color
  colorTxt.innerHTML = colorSelected;
}

btnEl.addEventListener("click", () => {
  colorChanger();
});
