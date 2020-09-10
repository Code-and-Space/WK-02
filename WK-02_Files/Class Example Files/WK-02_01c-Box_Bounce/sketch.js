//  This was developed from Dan Shiffman's Coding Train
//  See 2.2: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

let boxX = 300;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  rectMode(CENTER);
  rect(boxX, 300, 50, 50);
  boxX = boxX + 1;

//  If boxX reaches the edge of the canvas, move left
//  If boxX reaches the edge of the canvas, boxX-1
//  If boxX is great than canvas width, boxX-1
//  If boxX > width, boxX-1

//  What happens when the box reaches the left edge?
}
