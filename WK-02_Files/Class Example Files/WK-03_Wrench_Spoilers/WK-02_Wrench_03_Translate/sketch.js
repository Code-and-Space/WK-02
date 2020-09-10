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

  // bottom black circle
  fill(0);
  push()
  translate(circ01.x, circ01.y)
  ellipse(0, 0, circ01.d, circ01.d);
  pop()
  // black handle rectangle
  push()
  translate(rect01.x, rect01.y)
  rect(0, 0, rect01.l, rect01.w);
  pop()
  //bottom white circle
  fill(255); //white
  push()
  translate(circ02.x, circ02.y)
  ellipse(0, 0, circ02.d, circ02.d);
  pop()
  //white thin handle part
  push()
  translate(rect02.x, rect02.y)
  rect(0, 0, rect02.l, rect02.w);
  pop()
  //wrench head circle
  fill(0);
  push()
  translate(circ03.x, circ03.y)
  ellipse(0, 0, circ03.d, circ03.d);
  pop()
  //angled wrench head
  fill(255);
  push()
  translate(rect03.x, rect03.y);
  angleMode(DEGREES);
  rotate(151);
  rect(0, 0, rect03.l, rect03.w, rect03.r);
  pop()
}
