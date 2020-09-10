let circ01 = {
  x: 400,
  y: 600,
  d: 80
}

let rect01 = {
  x: 400,
  y: 450,
  l: 80,
  w: 300
}

let circ02 = {
  x: 400,
  y: 600,
  d: 40
}

let rect02 = {
  x: 400,
  y: 470,
  l: 5,
  w: 270
}

let circ03 = {
  x: 400,
  y: 250,
  d: 150
}

let rect03 = {
  x: 380,
  y: 220,
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


  displayCircle(0, circ01.x, circ01.y, circ01.d)
  //bottom black circle
  // fill(0);
  // push()
  // translate(circ01.x, circ01.y)
  // ellipse(0, 0, circ01.d, circ01.d);
  // pop()
  //black handle rectangle
  displayRect(0, rect01.x, rect01.y, 0, rect01.l, rect01.w, 0)
  // push()
  // translate(rect01.x, rect01.y)
  // rect(0, 0, rect01.l, rect01.w);
  // pop()
  //bottom white circle
  displayCircle(255, circ02.x, circ02.y, circ02.d)
  // fill(255);
  // push()
  // translate(circ02.x, circ02.y)
  // ellipse(0, 0, circ02.d, circ02.d);
  // pop()
  //white thin handle part
  displayRect(255, rect02.x, rect02.y, 0, rect02.l, rect02.w, 0)
  // push()
  // translate(rect02.x, rect02.y)
  // rect(0, 0, rect02.l, rect02.w);
  // pop()
  //wrench head circle
  displayCircle(0, circ03.x, circ03.y, circ03.d)
  // fill(0);
  // push()
  // translate(circ03.x, circ03.y)
  // ellipse(0, 0, circ03.d, circ03.d);
  // pop()
  //angled wrench head
  displayRect(255, rect03.x, rect03.y, 151, rect03.l, rect03.w, rect03.r)
  // fill(255);
  // push()
  // translate(rect03.x, rect03.y);
  // rotate(151);
  // rect(0, 0, rect03.l, rect03.w, rect03.r);
  // pop()
}

function displayCircle(color, tranX, tranY, circD) {
  noStroke();
  fill(color);
  push()
  translate(tranX, tranY)
  ellipse(0, 0, circD, circD);
  pop()
}

function displayRect(color, tranX, tranY, transAngle, rectL, rectW, rectR) {
  fill(color);
  push()
  translate(tranX, tranY);
  rotate(transAngle);
  rect(0, 0, rectL, rectW, rectR);
  pop()
}
