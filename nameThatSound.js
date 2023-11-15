let sounds = [];
let correct;
let wrong;
let i;
let count = 0;

function preload() {
  sounds[0] = loadSound("Monkey.mp3");
  sounds[1] = loadSound("Sheep sound.mp3");
  sounds[2] = loadSound("SpaceStation sound.mp3");
  sounds[3] = loadSound("Cow sound.mp3");
  sounds[4] = loadSound("Astronaut.mp3");
  wrong = loadSound("Wrong.mp3");
  correct = loadSound("Correct.mp3");
}

function setup() {
  createCanvas(400, 400);

  let monkButton = createButton("Monkey");
  monkButton.position(50, 50);
  monkButton.mousePressed(monk);
  let sheepButton = createButton("Sheep");
  sheepButton.position(50, 100);
  sheepButton.mousePressed(sheep);
  let stationButton = createButton("Space Station");
  stationButton.position(50, 150);
  stationButton.mousePressed(station);
  let cowButton = createButton("Cow");
  cowButton.position(50, 200);
  cowButton.mousePressed(cow);
  let astroButton = createButton("Astronaut");
  astroButton.position(50, 250);
  astroButton.mousePressed(astro);
  
  i = randSound();
  let soundButton = createButton("Play Sound");
  soundButton.position(250, 80);
  soundButton.mousePressed(playSound);
}

function draw() {
  background(220);
  textSize(24);
  text("count: " + count, 250, 50);
}

function randSound() {
  return Math.floor(random(0, 5));
}

function monk(){
  print("monkey")
  if (i == 0){
    count = count + 1;
    i = randSound();
    correct.play();
  }
  else{
    count = 0;
    wrong.play();
  }
}

function sheep(){
  //print("sheep")
  if (i == 1){
    count = count + 1;
    i = randSound();
    correct.play();
  }
  else{
    count = 0;
    wrong.play();
  }
}

function station(){
  //print("station")
  if (i == 2){
    count = count + 1;
    i = randSound();
    correct.play();
  }
  else{
    count = 0;
    wrong.play();
  }
}

function cow(){
  //print("cow")
  if (i == 3){
    count = count + 1;
    i = randSound();
    correct.play();
  }
  else{
    count = 0;
    wrong.play();
  }
}

function astro(){
  //print("astro")
  if (i == 4){
    count = count + 1;
    i = randSound();
    correct.play();
  }
  else{
    count = 0;
    wrong.play();
  }
}


function playSound() {
  if (sounds[i].isLoaded()) {
    sounds[i].play();
  }
}
