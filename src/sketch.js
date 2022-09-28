let camX, camY, camZ;
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
  if (keyIsPressed) {
    if (key == "ArrowUp") {
      temp = forward(focusX, focusY, focusZ, 0, 0, Fdelta);
      focusX = temp[0];
      focusY = temp[1];
      focusZ = temp[2];
    }
    if (key == "ArrowRight") {
      temp = forward(focusX, focusY, focusZ, 270, 0, Fdelta);
      focusX = temp[0];
      focusY = temp[1];
      focusZ = temp[2];
    }
    if (key == "ArrowDown") {
      temp = forward(focusX, focusY, focusZ, 180, 0, Fdelta);
      focusX = temp[0];
      focusY = temp[1];
      focusZ = temp[2];
    }
    if (key == "ArrowLeft") {
      temp = forward(focusX, focusY, focusZ, 90, 0, Fdelta);
      focusX = temp[0];
      focusY = temp[1];
      focusZ = temp[2];
    }
    if (key == "w") {
      beta -= Adelta;
    }
    if (key == "a") {
      alpha += Adelta;
    }
    if (key == "s") {
      beta += Adelta;
    }
    if (key == "d") {
      alpha -= Adelta;
    }
  }
  
  temp = forward(focusX, focusY, focusZ, 180 + alpha, 90 - beta, distToCenter);
  camX = temp[0];
  camY = temp[1];
  camZ = temp[2];

  background(225, 225, 225, 225);
  camera(camX, camY, camZ, focusX, focusY, focusZ);
  debugMode();
  push();
  translate(focusX, focusY, focusZ);
  stroke("purple");
  strokeWeight(1);
  fill("grey");
  sphere(2);
  pop();
  push();
  fill("white");
  translate(0, 0, 0);
  plane(500, 500);
  pop();
  push();
  translate(0, 0, 0);
  fill("green");
  cylinder(5, 2);
  pop();
}

function keyPressed() {
  if (key == "p") {
    while (keyIsPressed) {
      while (!(keyIsPressed && key == "p")) {
        noLoop();
      }
      loop();
    }
  }
}

function forward(x, y, z, angleXY, angleZ, delta) {
  x += delta * sin(angleZ) * cos(angleXY);
  y += delta * sin(angleZ) * sin(angleXY);
  z += delta * cos(angleZ);
  return [x, y, z];
}
