const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar1, bar2, bar3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bar1 = new Dustbin(540,600,20,140);
	bar2 = new Dustbin(760,600,20,140);
	bar3 = new Dustbin(650,660,200,20);

	ground = new Ground(400,690,800,20);

	paper = new Paper(100,650,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bar1.display();
  bar2.display();
  bar3.display();

  ground.display();

  paper.display();
   
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}
}

