let boxDim = 40;
let growth = 1;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    rectMode(CENTER)
    if (boxDim > 100 || boxDim < 40) {
      growth = growth*-1;
    }
    boxDim = boxDim + growth;
    noStroke()
    rect(width/2, width/2, boxDim, boxDim)
}
