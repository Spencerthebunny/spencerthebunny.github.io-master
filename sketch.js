var angleInc = 0.1;
var angle = 0;
var numLines = 100;
var bg;

function setup() {
  createCanvas (windowWidth, windowHeight);
  img = loadImage ("Rainbow.jpg");
  bg = loadImage("data/Rainbow.jpg");
}

function draw () {
  background (bg);
  fill (140,60,90, 200);
  rect (0,0,1600,1200);
  strokeWeight(5);
  stroke (255, 120, 120, 20);
  drawWave(200, 200, 1, 0);
  strokeWeight(3);
  stroke(120, 120, 255, 80);
  drawWave(300, 200, 0.5, 10);
  stroke(0, 220, 200,80);
  drawWave(400, 100, 0.25, 5);
  stroke (220,220,240,70);
  strokeWeight (10);
  drawVerticalWave(200, 200, 8, 10);
  stroke (220,220,40,220);
  strokeWeight (15);
  drawVerticalWave(700, 400, 4, 20);
  
  angle +=angleInc;
  noStroke();
}

function drawWave(posY, lineHeight, speed, offsetX) {
  for (i=0; i<numLines; i++) {
    var s = map (i, 0, numLines, 0, TWO_PI);
    var y = sin (s+angle*speed)*100;
    line (i*20+offsetX, posY+y, i*20+offsetX, posY+lineHeight+y);
  }
}

function drawVerticalWave(posX, lineLength, speed, offsetY) {
  for (var i=0; i<numLines; i++) {
    var s = map (i, 0, numLines, 0, TWO_PI);
    var x = cos (s+angle*speed)*100;
        if (i == 20) {
      line (posX+x, i*20+offsetY, posX+x-100, i*20+offsetY-50);
      line (posX+lineLength+x, i*20+offsetY, posX+lineLength+x+100, i*20+offsetY-50);
      
    }
     //if (i ==22){
     //  ellipse (posX+x+lineLength/2, i*20+offsetY, lineLength+150, lineLength/4);
     //}
    line (posX+x, i*20+offsetY, posX+lineLength+x, i*20+offsetY);
    

        if (i == 10) {
      ellipse (posX+x+lineLength/3, i*20+offsetY,50,30);
      ellipse (posX+x+2*lineLength/3, i*20+offsetY,50,30);
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}