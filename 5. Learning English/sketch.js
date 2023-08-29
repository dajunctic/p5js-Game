let img, img1, img2,img3;
let screen = 1;
var newWord = [];
var theWord, posWord, thevietnamWord;
let secretWord = [];
let currentPosition, currentTime, startTime;
let isGuessingWord , isMultiplechoice;
var scoreGuessingWord = 0;
var numberQuestion = 10, startQuestion = 0;
var compliment = ["Perfect!", "Well-done!", "Right!"], randCompliment;
var disfavor = ["Chicken!", "So sad!", "Stupid!", "You are wrong!"], randdisfavor;
var needmakingWord = 1;
function setup() {
  createCanvas(1000, 700);
  noStroke();
  pushWord();
  isGuessingWord = 0; isMultiplechoice = 0;
}
function draw() {
  background(220);
  if(screen == 1) startScreen();
  if(screen == 2) chooseScreen();
  if(screen == 3) guesswordScreen();
  if(screen == 4) multiplechoiceScreen();
  if(screen == 5) checkguessWord();
  if(screen == 6) trueAnswer();
  if(screen == 7) wrongAnswer();
  if(screen == 8) totalScoreGuessingWord();
  if(screen == 9) returnChooseScreen();
}
function returnChooseScreen(){
  isGuessingWord  = 0;
  isMultiplechoice = 0;
  startQuestion = 0;
  scoreGuessingWord = 0;
  screen = 2;
}
function preload(){
  img = loadImage('I_can_do_it.jpg');
  img1 = loadImage('programscreen.jpg');
  img2 = loadImage('guessWord.jpg');
}
function startScreen(){
  image(img,0,0);
}
function chooseScreen(){
  background(220);
  image(img1,0,0);
}
function guesswordScreen(){
  isGuessingWord = 1;
  background(220);
  textStyle(NORMAL);
  if(needmakingWord){
    startQuestion++;
    makerandomWord();
    if(startQuestion > numberQuestion) screen = 8;
  }
  
  image(img2,0,0);
  printScoreGuessingWord();
  fill('brown');
  textSize(30);
  textAlign(CENTER,CENTER);
  text("What does this word mean in English?",500,150);
  fill('purple');
  textSize(40);
  text(thevietnamWord,500,200);
  fill('white');
  var message = join(secretWord, "");
  text(message,500,270);
  submitGuessWord();
}
function totalScoreGuessingWord(){
  image(img2,0,0);
  fill("black");
  rect(375,275,250,150,10);
  fill("white");
  rect(377,277,246,146,10);
  fill("green");
  textSize(60);
  textAlign(RIGHT,CENTER);
  text(scoreGuessingWord,480,350);
  textAlign(LEFT,CENTER);
  text("/100",490,350);
  let ux = mouseX, uy = mouseY;
  if(ux >= 842 && ux<=1000 && uy >= 646 && uy <= 700){
    fill('gray');
    rect(840,644,158,54,10);
  }
  fill('green');
  rect(842,646,154,50,10);
  fill('blue');
  textSize(45);
  textStyle(BOLD);
  if(ux >= 842 && ux<=1000 && uy >= 646 && uy <= 700){
    textSize(46);
  }
  textAlign(CENTER,CENTER);
  text("NEXT",922,675);
}
function printScoreGuessingWord(){
  fill('white');
  textSize(50);
  textAlign(CENTER,CENTER);
  text(scoreGuessingWord,500,50);
}
function submitGuessWord(){
  let ux = mouseX, uy = mouseY;
  if(ux >= 405 && ux <= 593 && uy >= 320 && uy <= 375){
    fill('gray');
    rect(401,316,196,63,15);
  }
  fill('green');
  rect(405,320,188,55,10);
  fill('blue');
  textSize(45);
  textStyle(BOLD);
  if(ux >= 405 && ux <= 593 && uy >= 320 && uy <= 375){
    textSize(46);
  }
  text("submit",500,350);
}
function makerandomWord(){
  let sizenewWord = newWord.length - 1;
  posWord = int(random(0,sizenewWord));
  needmakingWord = 0;
  thevietnamWord = newWord[posWord][1];
  theWord = newWord[posWord][0];
  secretWord = [];
  for(let i=0;i<theWord.length;i++){
    secretWord.push('_');
  }
  currentPosition = 0;
  startTime = -1;
}
function checkguessWord(){
  background(220);
  let resultWord = join(secretWord,"");
  let cnt = 0;
  for(let i=0;i< theWord.length;i++){
    if(resultWord[i] == theWord[i]) cnt++;
  }
  if(cnt == theWord.length) screen = 6;
  else screen = 7;
}
function trueAnswer(){
  if(startTime == -1){
    startTime = frameCount;
    randCompliment = int(random(compliment.length));
  }
  background('gray');
  image(img2,0,0);
  fill('green');
  textSize(70);
  text(compliment[randCompliment],500,350);
  currentTime = frameCount;
  if(currentTime - startTime >= 60){
    if(isGuessingWord){
      scoreGuessingWord += 10;
      screen = 3;
      needmakingWord = 1;
      return;
    }
    if(isMultiplechoice){
      
    }
  }
}
function wrongAnswer(){
  background(220);
  if(startTime == -1){
    startTime = frameCount;
    randdisfavor = int(random(disfavor.length));
  }
  image(img2,0,0);
  fill('red');
  textSize(70);
  text(disfavor[randdisfavor],500,350);
  currentTime = frameCount;
  if(currentTime - startTime >= 60){
    if(isGuessingWord){
      screen = 3;
      needmakingWord = 1;
      return;
    }
    if(isMultiplechoice){
      
    }
  }
}
function multiplechoiceScreen(){
 
}
function mousePressed(){
  if(screen == 1) mouseStart();
  if(screen == 2) mouseChoose();
  if(screen == 3) mouseguessWord();
  if(screen == 8) mouseReturnChooseScreen();
}
function mouseReturnChooseScreen(){
  let ux = mouseX, uy = mouseY;
  if(ux >= 842 && ux<=1000 && uy >= 646 && uy <= 700) screen = 9;
}
function mouseStart(){
  let ux = mouseX, uy = mouseY
  if(ux >= 60 && ux <= 235 && uy >= 60 && uy<= 130) screen ++;
}
function mouseChoose(){
  let ux = mouseX, uy = mouseY;
  if(ux >= 673 && ux <= 924 && uy >= 56 && uy <= 97) screen = 3;
  if(ux >= 644 && ux <= 984 && uy >= 216 && uy<= 246) screen = 4;
}
function mouseguessWord(){
  let ux = mouseX, uy = mouseY;
  if(ux >= 405 && ux <= 593 && uy >= 320 && uy <= 375) screen = 5;
}
function keyPressed(){
  if(screen == 3){
    if(currentPosition == 0) return;
    if(keyCode === BACKSPACE){
      currentPosition = 0;
      for(let i=0;i<theWord.length;i++){
        secretWord[i] = '_';
      }
    }
    if(keyCode === ENTER){
      if(currentPosition == theWord.length) screen = 5;
    }
  }
}
function keyTyped(){
  if(screen == 3){
    if(keyCode === ENTER) return;
    if(currentPosition == theWord.length) return;
    currentPosition ++;
    secretWord[currentPosition-1] = key;
  }
}
function pushWord(){
  newWord.push(["hamlet", "ấp,làng nhỏ"]);
  newWord.push(["relevant", "thích hợp"]);
  newWord.push(["gossip", "mách lẻo"]);
  newWord.push(["mineral", "khoáng sản"]);
  newWord.push(["rumor", "tin đồn"]);
  newWord.push(["charming", "duyên dáng"]);
  newWord.push(["incapable", "không có khả năng"]);
  newWord.push(["bully", "đầu gấu"]);
  newWord.push(["manipulative", "có thể điều khiển người khác"]);
  newWord.push(["ambitious", "tham vọng"]);
  newWord.push(["irony", "trớ trêu (n)"]);
  newWord.push(["drill", "máy khoan"]);
  newWord.push(["pharmacist", "dược sĩ"]);
  newWord.push(["checklist", "danh mục"]);
  newWord.push(["affair", "ngoại tình (n)"]);
  newWord.push(["cone", "hình nón"]);
  newWord.push(["personel", "nhân viên"]);
  newWord.push(["budget", "ngân sách"]);
  newWord.push(["bossy", "thích chỉ đạo <hách dịch>"]);
  newWord.push(["compliment", "lời khen"]);
  newWord.push(["investigate", "điều tra"]);
  newWord.push(["invest", "đầu tư"]);
  newWord.push(["vehicle", "phương tiện"]);
  newWord.push(["T-junction", "ngã ba"]);
  newWord.push(["puncture", "đâm"]);
  newWord.push(["norm", "quy tắc, chuẩn mực"]);
  newWord.push(["curfew", "giờ giới nghiêm"]);
  newWord.push(["elegant", "trang nhã, thanh lịch"]);
  newWord.push(["mature", "trưởng thành"]);
  newWord.push(["campaign", "chiến dịch"]);
  newWord.push(["flashy", "hào nhoáng"]);
  newWord.push(["brochure", "quyển sổ nhỏ"]);
  newWord.push(["elongate", "kéo dài <không phải vật lí>"]);
  newWord.push(["cautious", "cẩn trọng"]);
  newWord.push(["cautions", "cảnh báo (n)"]);
  newWord.push(["attitude", "thái độ (n)"]);
  newWord.push(["burden", "gánh nặng"]);
  newWord.push(["conflict", "xung đột (n,v)"]);
  newWord.push(["dye", "nhuộm"]);
  newWord.push(["extracurricular", "ngoại khóa (a)"]);
  newWord.push(["financial", "tài chính (a)"]);
  newWord.push(["compassion", "lòng thương, lòng trắc ẩn"]);
  newWord.push(["impose", "áp đặt"]);
  newWord.push(["force", "bắt buộc (v)"]);
  newWord.push(["frustrate", "gây bực bội"]);
  newWord.push(["disapproval", "sự phản đối"]);
  newWord.push(["clique", "nhóm nhỏ <cùng sở thích>"]);
  newWord.push(["counselor", "cố vấn"]);
  newWord.push(["emotional", "cảm động"]);
  newWord.push(["sympathetic", "đồng cảm,thông cảm (a)"]);
  newWord.push(["engage", "thu hút"]);
  newWord.push(["matchmaking", "mai mối (n)"]);
  newWord.push(["betray", "phản bội, lừa dối"]);
  newWord.push(["reaction", "phản ứng (n)"]);
  newWord.push(["oppose", "chống đối, phản đối"]);
  newWord.push(["potential", "tiềm năng"]);
  newWord.push(["tension", "tình trạng căng thẳng"]);
  newWord.push(["psycologist", "nhà tâm lí học"]);
  newWord.push(["curriculum", "chương trình giảng dạy"]);
  newWord.push(["specify", "chỉ rõ, ghi rõ"]);
  newWord.push(["realistic", "tính hiện thực"]);
}