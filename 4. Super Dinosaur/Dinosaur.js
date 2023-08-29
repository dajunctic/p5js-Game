class Dinosaur {
  constructor() {
    this.r = 75;
    this.x = 100;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1.5;
  }
  
  jump() {
    this.vy = -20;
  }
  
  hit(train) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = train.x + train.r * 0.5;
    let y2 = train.y + train.r * 0.5;
    
    return collideCircleCircle(x2, y2, train.r * 0.6, x1, y1, this.r)
  }
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0 , height - this.r);
  }
  
  show() {
    image(dImg, this.x, this.y, this.r, this.r);
  }
}