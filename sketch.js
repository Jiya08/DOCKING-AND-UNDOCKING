var iss, spacecraft, hasDocked = false;
var s1_img;
var s2_img;
var s3_img;
var s4_img;
var iss_img;
var bg_img;






function preload() {
  iss_img = loadImage("Assets/iss.png");
  bg_img = loadImage("Assets/spacebg.jpg");
  s1_img = loadImage("Assets/spacecraft1.png");
  s2_img = loadImage("Assets/spacecraft2.png");
  s3_img = loadImage("Assets/spacecraft3.png");
  s4_img = loadImage("Assets/spacecraft4.png");
}


function setup() {
  createCanvas(800, 400);
  // createSprite(400, 200, 50, 50);

  iss = createSprite(330, 130);
  iss.addImage(iss_img);
  iss.scale = 0.50;

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(s1_img);
  spacecraft.scale = 0.15



}


function draw() {
  background(bg_img);

  if (!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1, 1);

    if (keyDown(LEFT_ARROW)) {
      spacecraft.addImage(s3_img);
      spacecraft.x += -2;
    }

    if (keyDown(RIGHT_ARROW)) {
      spacecraft.addImage(s4_img);
      spacecraft.x += +2;
    }

    if (keyDown(DOWN_ARROW)) {
      spacecraft.addImage(s1_img);
      spacecraft.y += +2;
    }

    if (keyDown(UP_ARROW)) {
      spacecraft.addImage(s2_img);
      spacecraft.y += -2;
    }
  }

  if (spacecraft.y <= (iss.y + 65) && spacecraft.x <= (iss.x - 10)) {
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful",200,300);
  }
  drawSprites();
}