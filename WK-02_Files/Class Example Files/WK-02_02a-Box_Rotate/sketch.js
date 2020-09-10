//https://p5js.org/reference/#/p5/rotate
//https://www.youtube.com/watch?v=o9sgjuh-CBM&t=18m0s
//https://genekogan.com/code/p5js-transformations/

let angle = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(10);
    rectMode(CENTER)
    noStroke();

    translate(width / 2 - 40, 300);
    rotate(angle);
    rect(0, 0, 50, 50);

    // how would you create a spinning object?
}
