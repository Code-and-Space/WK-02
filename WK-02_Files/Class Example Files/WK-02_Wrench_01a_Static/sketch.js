function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(255);
    noStroke();

    rect(40, 40, 40, 40)
    ellipse(40, 20, 20, 20)
    
    //bottom black circle
    fill(0);
    ellipse(width / 2, 600, 80, 80);

    //black handle rectangle
    rect(width/2-40, 300, 80, 300);

    //bottom white circle
    fill(255); //white
    ellipse(width / 2, 600, 40, 40);

    //white thin handle part
    rect(width / 2 - 2.5, 320, 5, 270);

    //wrench head circle
    fill(0);
    ellipse(width / 2, 250, 150, 150);

    //angled wrench head
    fill(255);
    translate(width / 2 + 30, height / 2 - 150);
    angleMode(DEGREES);
    rotate(151);
    rect(0, 0, 60, 110, 10);
}
