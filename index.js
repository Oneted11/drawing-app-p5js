// window.onload(console.log("Hello There"));
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
    stroke("black");
    // draw line between previous mouse position and current mouse position
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
