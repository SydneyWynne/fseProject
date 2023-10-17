function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke('black');
  noFill();
  line(0,0,0,400);
  line(0,0,100,0);
  line(0,400,100,400);
  arc(100,200,400,400,4.71,1.58);
}
