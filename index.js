// window.onload(console.log("Hello There"));
// setup p5js
function setup() {
  //create full width + height
  createCanvas(window.innerWidth, window.innerHeight);
  // add white background
  background(255);
}

function draw() {
  //disable fill
  noFill();

  if (mouseIsPressed) {
    //store xy of mouse
    const point = {
      x: mouseX,
      y: MouseY,
    };
    //add xy to path i.e. line
    path.push(point);
  }
  //actually draw on canvas
  strokeWeight(4);
  stroke(237, 34, 93);
  beginShape();
  //for all the points mouse is pressed add vertex
  path.forEach((point) => {
    // stroke(51);
    vertex(point.x, point.y);
  });
  endShape;
}
