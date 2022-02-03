
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var solo;
var barra1;
var barra2;

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.05,
		density:1.2
	
	}
	
	
	//Create the Bodies Here.
 ball=Bodies.circle(200, 100,20, ball_options);

 World.add(world, ball);

	//solo é o novo objeto da classe ground.
 solo=new Ground(400,398,800,20);
 
 barra1= new Ground(600,395,10, 30)




 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
 
  background(189);
  solo.display();
  ellipse(ball.position.x, ball.position.y, 20,20);
  
 	barra1.display();

	 drawSprites();
}



