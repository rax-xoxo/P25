const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin1;

function preload()
{
	
}

function setup() {
   createCanvas(1200, 700);

    engine = Engine.create();
    world = engine.world;

   //Create the Bodies Here.
   ground = new Ground(600,650,1200,20);
   paper = new Paper(100,600,70);
   dustbin1 = new Dustbin(1100,610);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  ground.display();
  paper.display();
  dustbin1.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-250});
  }
}

