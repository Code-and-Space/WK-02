//  Sign in sheet
//  Please write your name in the below
//  You may adjust your location, font, size, color, etc.
//  Refer to p5 reference: https://p5js.org/reference/#/p5/text

let sofia;
let blackjack;

function preload() {
  sofia = loadFont('assets/Sofia-Regular.otf');
  blackjack = loadFont('assets/blackjack.otf');
}

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(0);

  // Static Name
  // Copy and paste below "SIGN IN SHEET BELOW"
  // Replace text 'name' with your own name
  // Adjust textSize and color to your preference
  textSize(32)
  fill(255, 255, 255)
  text('Name',0, 0, 300, 300) // Replace 'name' with your name

  // Dynamic Name
  // Copy and paste below "SIGN IN SHEET BELOW"
  // Replace text "name" with your own name
  // Adjust textSize, color, font, timing, etc. to your preference
  textFont(sofia) //  fonts are located in the folder assets.
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  let time = millis()
  rotateX(time / 3000)
  rotateZ(time / 3234)
  text('Name', 0, 0) // Replace '3D Name' with your name

  //  ↓↓↓↓↓↓↓↓↓↓ SIGN IN SHEET BELOW ↓↓↓↓↓↓↓↓↓↓
  textFont(sofia) //  fonts are located in the folder assets.
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  rotateX(time / 4000)
  rotateZ(time / 2234)
  text('Aishwarya', 50, 0)

  textSize(32)
  fill(255, 255, 255)
  text('Aishwarya',20, 10, 300, 300) //

  textSize(32)
  fill(255, 255, 255)
  text('Anubha Agrawal',30, 100, 300, 300)

  textSize(32)
  fill(255, 255, 255)
  text('Sakeena',25, 10, 300, 300) //

  textFont(sofia) //  fonts are located in the folder assets.
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  rotateX(time / 5500)
  rotateZ(time / 4734)
  text('Anubha Agrawal', 200, 100)

  textSize(28)
  fill(65, 82, 138)
  text('Zoe', 15, -40, 300, 300) // Replace 'name' with your name

  textSize(30)
  fill(0, 142, 204)
  text('Jamie',-20, 25, 300, 300)

  textFont(sofia)
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  rotateX(time / 2500)
  rotateZ(time / 2734)
  text('Tony', 0, -30)

  textSize(38)
  fill(255, 255, 255)
  text('Tyler', 40, -20, 300, 300)

  textSize(32)
  fill(255, 255, 255)
  text('Josh',-50, -10, 300, 300)

  textSize(30)
  fill(0, 142, 204)
  text('Antoine',-20, 10, 300, 300)

  textSize(32)
  fill(255, 255, 255)
  text('Xuwen Zhang',10, 0, 300, 300)

  //miguel
  textSize(45)
  fill(255, 0, 0)
  text('miguel',10, -45, 200, 300)

  textSize(36)
  fill(48, 147, 255)
  text('Tom',20, -10, 300, 300)

  //Karim
  textSize(40)
  fill(102,178,255)
  text('Karim',-40, 10, 300, 300)

  //Anna
  textSize(28)
  fill(255,255,255)
  text('Anna',12, 42, 300, 300)

  textFont(sofia)
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  rotateX(time / 1500)
  rotateZ(time / 1234)
  text('Anna', 40, 4)


  //Yukta
  textFont(sofia)
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  rotateX(time / 6500)
  rotateZ(time / 6734)
  text('Yukta', -20, 10)

  textSize(28)
  fill(255,255,255)
  text('Yukta',50, 0, 300, 300)

  //Sonali
  textSize(35)
  fill(0,0,102)
  text('Sonali',100, 10, 300, 300)


  //Camilo
  textSize(35)
  fill(0,0,102)
  text('Camilo',10, -50, 300, 300)

  //Yaliana
  textSize(30)
  fill(0,0,102)
  text('Yaliana',0, 100, 300, 300)

  //Matt
  textSize(32)
  fill(255, 255, 255)
  text('Matt',80, 120, 300, 300)

  //Jennifer
  textSize(32)
  fill(255, 255, 255)
  text('Jennifer',0, 40, 300, 300)

}
