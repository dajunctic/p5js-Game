let SnowRain = [];
function setup() {
  createCanvas(400, 400);
  fill(250);
 // noStroke();
}

function draw() {
  background('black');
  t = frameCount/60;
  for (let i = 0; i < random(5); i++) {
    SnowRain.push(new Snow());
  }
  for(let x of SnowRain){
    x.update(t);
    x.display();
  }
}
function Snow(){
  this.X = 0;
  this.Y = random(-50, 0);
  this.initialangle = random(0,2*PI);
  this.size = random(3,10);
  this.r = sqrt(random((width/2)*(width/2)));
  this.update = function(time) {
    let w = 0.5;
    let angle = w * time + this.initialangle;
    this.X = width / 2 + this.r * sin(angle);
    this.Y += pow(this.size, 0.5);
    if (this.Y > height) {
      let index = SnowRain.indexOf(this);
      SnowRain.splice(index, 1);
    }
  };
  this.display = function() {
    ellipse(this.X, this.Y, this.size);
  };
}