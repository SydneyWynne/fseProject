function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  stroke('black');
  line(0, 0, 0, 400);
  line(0, 0, 200, 0);
  line(0, 200, 200, 200);
  line(0, 400, 200, 400);
  arc(200, 100, 200, 200, 4.71, 1.57);
  arc(200, 300, 200, 200, 4.71, 1.57);
}
