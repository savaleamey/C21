var a,b

var car,car1,wall,wall1

function setup() {
  createCanvas(1200,1000);

  a=createSprite(200,200,80,30);
  b=createSprite(450,200,30,80);

  a.shapeColor="red";
  b.shapeColor="red";

  a.debug=true;
  b.debug=true;

  car=createSprite(50,50,50,50);
  car.shapeColor="blue";

  car1=createSprite(50,130,50,50);
  car1.shapeColor="blue";

  wall=createSprite(800,50,50,300);
  wall.shapeColor="yellow";

car.velocityX=3;
car1.velocityX=3;

}
function draw() {
  background("black");

b.x=mouseX;
b.y=mouseY;
//to check isTouching Algorithm
if(isTouch(car,wall))
{
  wall.shapeColor="pink";
}

//to check collision algorithm
if(isTouch(car1,wall)){

  car1.velocityX=0;

}

  drawSprites();
}

