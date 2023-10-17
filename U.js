function setup() {
  createCanvas(400,400);
}
function draw() {
  background(220);
  stroke('black');
  noFill();
  arc(200, 300, 200, 150, 0, PI);
  line(100, 50, 100, 300);
  line(300, 50, 300, 300);
}
