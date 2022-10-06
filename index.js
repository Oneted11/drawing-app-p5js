// window.onload(console.log("Hello There"));
const weightEl = document.querySelector("#weight");
const colorEl = document.querySelector("#color");
const saveEl = document.querySelector("#save");
const deleteEl = document.querySelector("#clean");
// setup p5js
function setup() {
  //create full width + height
  createCanvas(window.innerWidth, window.innerHeight);
  // add white background
  background(255);
}

// let path = [];

function draw() {
  //disable fill
  noFill();
  //do this when mouse is pressed
  if (mouseIsPressed) {
    // create stroke color
    stroke(colorEl.value);
    //the thickness of the line
    strokeWeight(weightEl.value);
    // draw line between previous mouse position and current mouse position
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function savePng() {
  saveCanvas("untitled", "png");
}

//save onclick
saveEl.addEventListener("click", (event) => {
  savePng();
});
//clean onclick
deleteEl.addEventListener("click", (event) => {
  clear();
});
