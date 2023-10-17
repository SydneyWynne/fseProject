function setup() {
  createCanvas(400,400);
}
function draw() {
  background(220);
  stroke('black');
  noFill();
  arc(200, 100, 200, 150, HALF_PI+QUARTER_PI+.1, TWO_PI);
  arc(200, 300, 200, 150, PI+HALF_PI+QUARTER_PI+.1, PI);
  line(130, 153.5, 267, 244.5)
}
