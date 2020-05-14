var rain,rain2,rain3,rain4,rain5,rain6;

function setup() {
  var canvas = createCanvas(400,400);
}

function draw() {
  background(0);  
  if(frameCount%10===0){
    rain = createSprite(200,0,3,random(10,25));
    rain.shapeColor = "red";
    rain.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain2 = createSprite(100,0,3,random(10,25));
    rain2.shapeColor = "white";
    rain2.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain3 = createSprite(300,0,3,random(10,25));
    rain3.shapeColor = "green";
    rain3.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain4 = createSprite(390,0,3,random(10,25));
    rain4.shapeColor = "orange";
    rain4.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain5 = createSprite(150,0,3,random(10,25));
    rain5.shapeColor = "purple";
    rain5.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain6 = createSprite(10,0,3,random(10,25));
    rain6.shapeColor = "blue";
    rain6.velocityY = random(3,10);
  }
  drawSprites();
}