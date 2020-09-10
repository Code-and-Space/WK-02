let speed = 0;

let circ01 = {
  tx: 0,
  ty: 600,
  x: 400,
  y: 0,
  d: 80
}

let rect01 = {
  tx: 400,
  ty: 250,
  x: 0,
  y: 200,
  l: 80,
  w: 300
}

let circ02 = {
  tx: 440,
  ty: 300,
  x: -40,
  y: 300,
  d: 40
}

let rect02 = {
  tx: 400,
  ty: 155,
  x: 0,
  y: 300,
  l: 5,
  w: 270
}

let circ03 = {
  tx: 350,
  ty: 250,
  x: 50,
  y: 0,
  d: 150
}

let rect03 = {
  tx: 380,
  ty: 220,
  x: 0,
  y: 0,
  l: 60,
  w: 110,
  r: 10
}

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER)
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noStroke();

  //bottom black circle
  displayCircle(0, circ01.tx, circ01.ty, speed, circ01.x, circ01.y, circ01.d)
  //black handle rectangle
  displayRect(0, rect01.tx, rect01.ty, 0, speed, rect01.x, rect01.y, rect01.l, rect01.w, 0)
  //bottom white circle
  displayCircle(255, circ02.tx, circ02.ty, speed, circ02.x, circ02.y, circ02.d)
  //white thin handle part
  displayRect(255, rect02.tx, rect02.ty, 0, speed, rect03.x, rect03.y, rect02.l, rect02.w, 0)
  //wrench head circle
  displayCircle(0, circ03.tx, circ03.ty, speed, circ03.x, circ03.y, circ03.d)
  //angled wrench head
  displayRect(255, rect03.tx, rect03.ty, 151, 0, rect03.x, rect03.y, rect03.l, rect03.w, rect03.r)

  speed = speed + 0.25;
}

function displayCircle(color, tranX, tranY, rSpeed, circX, circY, circD) {
  noStroke();
  fill(color);
  push()
  translate(tranX, tranY)
  rotate(rSpeed)
  ellipse(circX, circY, circD, circD);
  pop()
}

function displayRect(color, tranX, tranY, transAngle, rSpeed, rectX, rectY, rectL, rectW, rectR) {
  fill(color);
  push()
  translate(tranX, tranY);
  rotate(transAngle);
  rotate(rSpeed);
  rect(rectX, rectY, rectL, rectW, rectR);
  pop()
}
