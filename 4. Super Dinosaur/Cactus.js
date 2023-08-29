class Cactus {
  constructor() {
    this.typeCactus = int(random(1,3.2));
    this.r = 75;
    this.x = width;
    this.y = height - this.r;
  }
  
  move() {
    this.x -=  7;
  }
  
  show() {
    if(this.typeCactus == 1) image(cImg1, this.x, this.y, this.r, this.r);
    if(this.typeCactus == 2) image(cImg2, this.x, this.y, this.r, this.r);
    if(this.typeCactus == 3) image(cImg3, this.x, this.y, this.r, this.r);
  }
}