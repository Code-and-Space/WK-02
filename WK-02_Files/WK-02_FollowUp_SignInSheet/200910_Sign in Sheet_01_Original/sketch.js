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
  rotateX(time / 1000)
  rotateZ(time / 1234)
  text('Name', 0, 0) // Replace '3D Name' with your name

  //  ↓↓↓↓↓↓↓↓↓↓ SIGN IN SHEET BELOW ↓↓↓↓↓↓↓↓↓↓
  textFont(sofia) //  fonts are located in the folder assets.
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  let time = millis()
  rotateX(time / 1000)
  rotateZ(time / 1234)
  text('Aishwarya', 0, 0)

  textSize(32)
  fill(255, 255, 255)
  text('Aishwarya',0, 0, 300, 300) //

  textSize(32)
  fill(255, 255, 255)
  text('Anubha Agrawal',0, 0, 300, 300)

  textSize(32)
  fill(255, 255, 255)
  text('Sakeena',0, 0, 300, 300) //

  textFont(sofia) //  fonts are located in the folder assets.
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  let time = millis()
  rotateX(time / 1000)
  rotateZ(time / 1234)
  text('Anubha Agrawal', 0, 0)

  textSize(28)
  fill(65, 82, 138)
  text('Zoe',0, 00, 300, 300) // Replace 'name' with your name

  textSize(30)
  fill(0, 142, 204)
  text('Jamie',0, 0, 300, 300)

  textFont(Sofia)
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  let time = millis()
  rotateX(time / 1000)
  rotateZ(time / 1234)
  text('Tony', 0, 0)

  textSize(38)
  fill(255, 255, 255)
  text('Tyler',0, 0, 300, 300)

  textSize(32)
  fill(255, 255, 255)
  text('Josh',0, 0, 300, 300)

  textSize(30)
  fill(0, 142, 204)
  text('Antoine',0, 0, 300, 300)

  textSize(32)
  fill(255, 255, 255)
  text('Xuwen Zhang',0, 0, 300, 300)

  //miguel
  textSize(45)
  fill(255, 0, 0)
  text('miguel',0, 0, 300, 300)

  textSize(36)
  fill(48, 147, 255)
  text('Tom',0, 0, 300, 300)

  //Karim
  textSize(40)
  fill(102,178,255)
  text('Karim',0, 0, 300, 300)

  //Anna
  textSize(28)
  fill(255,255,255)
  text('Anna',0, 0, 300, 300)

  textFont(sofia)
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  let time = millis()
  rotateX(time / 1000)
  rotateZ(time / 1234)
  text('Anna', 0, 0)
  }

  //Yukta
  textFont(sofia)
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  let time = millis()
  rotateX(time / 1000)
  rotateZ(time / 1234)
  text('Yukta', 0, 0)
  }
  textSize(28)
  fill(255,255,255)
  text('Yukta',0, 0, 300, 300)

  //Sonali
  textSize(35)
  fill(0,0,102)
  text('Sonali',0, 0, 300, 300)
    }

    //Camilo
    textSize(35)
    fill(0,0,102)
    text('Camilo',0, 0, 300, 300)

    //Yaliana
    textSize(30)
    fill(0,0,102)
    text('Yaliana',0, 0, 300, 300)

    //Matt
    textSize(32)
    fill(255, 255, 255)
    text('Matt',0, 0, 300, 300)

    //Jennifer
    textSize(32)
    fill(255, 255, 255)
    text('Jennifer',0, 0, 300, 300)

      }
