//https://p5js.org/reference/#/p5/rotate
//https://www.youtube.com/watch?v=o9sgjuh-CBM&t=18m0s
//https://genekogan.com/code/p5js-transformations/
let boxDim = 50;
let boxScale = 1;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {
  background(10);
  rectMode(CENTER)

  if (boxDim > 100 || boxDim <50) {
    boxScale = boxScale*-1;
  } boxDim = boxDim + boxScale;
  push();
  translate(width / 2, 300);
  scale(boxScale);
  rect(0, 0, boxDim, boxDim);
  pop();

}
