let boxColor = 255;
let colorChange = 1;
let bgColor = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(bgColor);
    rectMode(CENTER);

    if (boxColor > 255 || boxColor < bgColor) {
      colorChange = -colorChange;
    }
    boxColor = boxColor + colorChange;
    noStroke()
    fill(boxColor)
    rect(width/2, width/2, 40, 40)
}
