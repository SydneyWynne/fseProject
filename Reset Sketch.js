let button;
let reset = false;
function setup() {
  createCanvas(400, 400);
  frameRate(2000);
  button = createButton("Reset");
  button.mousePressed(resetSketch);
}

function resetSketch(){
  createCanvas(400, 400);
  frameRate(2000);
}
