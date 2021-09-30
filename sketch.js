
var snowflake,snowflakeImg,snowflakeImg1
var bgImg

function preload() {
  snowflakeImg = loadImage("snow5.webp");
  snowflakeImg1 = loadImage("snow4.webp");
  bgImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
  createSnowflake1();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}
function createSnowflake1(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg1);
  snowflake.scale = 0.1;
  }
}