var d1,d2,d3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ballBody=Bodies.circle(100,50,5);
	World.add(world,ballBody);

	d1Body=Bodies.rectangle(650,650,200,20);
	World.add(world,d1Body);

	d2Body=Bodies.rectangle(550,560,20,200);
	World.add(world,d2Body);
	
	d3Body=Bodies.rectangle(750,560,200,20);
	World.add(world,d3Body);
	
	groundSprite=createSprite(width/2,height-35, width,10);
	groundSprite.shapeColor="yellow";

	ground = Bodies.rectangle(width/2,650,width, 10 , {isStatic:true});
	World.add(world, ground);
   Engine.run(engine);  
}


function draw() {
  rect(d1Body.position.x,d1Body.position.y,200,20);
  rect(d2Body.position.x,d2Body.position.y,20,200);
  rect(d3Body.position.x,d3Body.position.y,200,20);
  circle(ballBody.position.x,ballBody.position.y,85,-85);
  background(0);
  keyPressed();
  drawSprites();
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
      Matter.Body.applyForce(ballObject.Body.position.x,ballObject.position.y,{x:85,y:-85});
	}
}
