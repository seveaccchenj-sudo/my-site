let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  noStroke();
  fill(255, 50, 50, 150);
  circle(x, height/2, 60);
  x += 3;
  if (x > width) x = 0;
}
