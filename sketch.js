
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
 


function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	 
	
	
	//Create a Ground
	roof1 = new roof();
	b1 = new bob(300,300);
	b2 = new bob(350,300);
	b3 = new bob(400,300);
	b4 = new bob(450,300);
	b5 = new bob(500,300);
	
	rope1= new Rope(b1.body,roof1.body,-100);
	rope2= new Rope(b2.body,roof1.body, -58);
	rope3= new Rope(b3.body,roof1.body,0);
	rope4= new Rope(b4.body,roof1.body,50);
	rope5 = new Rope(b5.body,roof1.body,100); 
 
	//Engine.run(engine);
}


function draw() {
	
  
  background(230);
 // rectMode(CENTER);

 Engine.update(engine);
 roof1.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  
	 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-50});

	}
}
 

 