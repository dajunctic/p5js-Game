let dinosaur;
let bImg, dImg, cImg1, cImg2, cImg3;
let cactuses = [];

function preload() {
  bImg = loadImage("background.jpg");
  dImg = loadImage("dinosaur.png");
  cImg1 = loadImage("cactus.png");
  cImg2 = loadImage("cactus2.png");
  cImg3 = loadImage("cactus3.png");
}

function setup() {
  createCanvas(1000,400);
  dinosaur = new Dinosaur();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    if(dinosaur.y == height - dinosaur.r) {
      dinosaur.jump();
    }
  }
}

function draw() {
  if(random(1) < 0.01) {
    cactuses.push(new Cactus());
  }
  
  background(bImg);
  
  for(let i of cactuses) {
    i.move();
    i.show();
    if(dinosaur.hit(i)) {
      console.log("game over");
      noLoop();
    }
  }
  
  dinosaur.show();
  dinosaur.move();
  
}