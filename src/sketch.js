let focusX, focusY, focusZ;
let alpha, beta;
let Fdelta, Adelta;
let distToCenter;

let temp;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  noStroke();
  
  focusX = 0;
  focusY = 0;
  focusZ = 0;
  alpha = 0;
  beta = 45;
  Fdelta = 5;
  Adelta = 0.01;
  distToCenter = 40;
}

function draw() {
  background(220);
}
