var paper;
var dustbinIMG,dustbinSprite;
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
     ground=new Ground(400,690,800);
	paper=new Paper(100,500,60);
	dustbin=new Dustbin(600,520,140,160);
	
   Engine.run(engine);  
}


function draw() {
  background("brown");
  Engine.update(engine);
  ground.display();
  paper.display(); 
  dustbin.display();
  
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
      Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}
}




