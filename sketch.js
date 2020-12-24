
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground;
var leftwall,rightwall,bottomwall,boundary1,boundary2,boundary3,boundary4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,10)
	paper1 = new paper(50,600,25)
	
	leftwall = new dustbin(535,630,20,100)
	bottomwall = new dustbin(600,675,150,20)
	rightwall = new dustbin(665,630,20,100)
	boundary1 = new dustbin(795,350,10,700)
	boundary2 = new dustbin(400,5,800,10)
	boundary3 = new dustbin(5,350,10,700)
	boundary4 = new dustbin(400,690,800,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display();
  paper1.display();
  leftwall.display();
  rightwall.display();
  bottomwall.display();
  boundary1.display()
  boundary2.display()
  boundary3.display()
  boundary4.display()
 
}
function keyPressed()
{
    if (keyCode === UP_ARROW){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:-95})

	}
   
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-95,y:-95})
   
	   }
	   

}


