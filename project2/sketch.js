let trail = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(10, 10, 10, 50);

  trail.push({x: mouseX, y: mouseY});

  if (trail.length > 30) {
    trail.shift();
  }

  for (let i = 0; i < trail.length; i++) {
    let t = trail[i];
    fill(255, 0, 0, 150);
    circle(t.x, t.y, i * 2);
  }
}
