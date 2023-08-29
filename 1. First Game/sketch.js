var arr =[
  [],[],[],[]
];
var taisaocacbanchet;
var nmin;
var speed = 0;
var iterator = 0;
let type, its;
let fir = -100;
var character = [
  [],[],[],[]
];
let cnt = 0;
let cot = 0;
let col = [100,200];
function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(60);
  for(let i=0;i<=3;i++){
    arr[i].push(fir);
    fir-=100;
  }
}
function gaf(){
  alert('gà');
}
var row = [125,135,250,260];
var robot = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1],
  [1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1],
  [2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,4,4,2,2,2,2,1,1,1,1,1,1,1,1],
  [2,2,2,2,2,2,4,4,2,2,2,2,1,1,1,1,1,1,1,1],
  [2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]
var robot2 = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2],
  [1,1,1,1,1,1,1,1,2,2,2,2,4,4,2,2,2,2,2,2],
  [1,1,1,1,1,1,1,1,2,2,2,2,4,4,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2],
  [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1],
  [1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]
function draw() {
  background('black');
  fill('yellow');
  circle(30,100, 50);
  fill('pink');
  textSize(20);
  textAlign(CENTER,CENTER);
  text("mini-person" , 55, 150);
  fill('white');
  rect(125,0,20,height);
  rect(250,0,20,height);
  for(let i=0;i<=3;i++){
    for(let ele of arr[i]){
      if(ele>height){
        arr[i].splice(ele);
      }
    }
  }
   if(frameCount/60<7){
     speed = frameCount/60; 
   }else 
    speed = 7;
  for(let i=0;i<=3;i++){
    for(let it in arr[i]){
      push();
      fill('green');
      if(i%2==0){
        rect(row[i]-20,arr[i][it],20,20);
      }else{
        rect(row[i]+10,arr[i][it],20,20);
      }
      arr[i][it] += speed;
      pop();
    }
  }
  push();
    fill('green');
    if(iterator%2==0){
      rectt1();
//      rect(row[iterator]-20,height*2/3,20,20);
    }else{
      rectt2();
     // rect(row[iterator]+10,height*2/3,20,20);
    }
  pop()
  if(die()){
    background('green');
    textSize(100);
    textAlign(CENTER,CENTER);
    text(int(cnt/60), 200, 200);
    fill('blue');
    if(int(cnt/60)<40){
      textSize(150);
      textAlign(CENTER,CENTER);
      text("Gà!", 200, 100);
      gaf();
      noLoop();
    }else{
      textSize(100);
      textAlign(CENTER,CENTER);
      text("Tạm ổn!", 200, 100);
    }
    noLoop();
    return;
  } else {
    fill('white');
    cnt++;
    text(int(cnt/60), 20, 20);
  }
  nmin =  999999;
  for(let i=0;i<=3;i++){
 //   if(arr[i].size()<=3){
      for(let ele of arr[i]){
       nmin = min(nmin,ele);
      }
  //  }
  }
  let it = random(0,4);
  let p = int(it);
  if(p==4) p--;
  var tmp = nmin-random(70,150);
//  print(tmp);
 // print(it);
  arr[p].push(tmp);
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    if(iterator<3){
      iterator++;
    }
  }
  if(keyCode === LEFT_ARROW){
    if(iterator>0){
      iterator--;
    }
  }
}
function die(){
    for(let ele of arr[iterator]){
      if(abs(ele-height*2/3)<15) return true;
    }
    
    return false;
}
function rectt1(){
  for(let i=0;i<20;i++){
    for(let j=0;j<20;j++){
      if(robot[i][j]==1) fill('black');
      if(robot[i][j]==2) fill('red');
      if(robot[i][j]==3) fill('yellow');
      if(robot[i][j]==4) fill('purple');
       rect(row[iterator]-20+j,height*2/3+i,1,1);
    }
  }
}
function rectt2(){
   for(let i=0;i<20;i++){
    for(let j=0;j<20;j++){
      if(robot2[i][j]==1) fill('black');
      if(robot2[i][j]==2) fill('red');
      if(robot2[i][j]==3) fill('yellow');
      if(robot2[i][j]==4) fill('purple');
       rect(row[iterator]+10+j,height*2/3+i,1,1);
    }
  }
}