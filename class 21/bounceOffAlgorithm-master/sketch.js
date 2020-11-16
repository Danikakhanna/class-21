var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;

  Rect1 = createSprite(600, 100, 50, 80);
  Rect1.shapeColor = "green";
  Rect1.debug = true;
  Rect2 = createSprite(100, 100,80,30);
  Rect2.shapeColor = "green";
  Rect2.debug = true;

  Rect1.velocityX = -5;
  Rect2.velocityX = +5;
}

function draw() {
  background(0,0,0);  
movingRect.x=mouseX;
movingRect.y=mouseY;

  bounceoff(Rect2,Rect1)
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";

  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}