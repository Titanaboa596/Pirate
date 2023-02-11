var ball

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

	balls_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2,

	}

	//Matter.Bodies.circle(x, y, radius, [options], [maxSides])


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}



