 


//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
const Engine = Matter.Engine;  //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;


function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
 engine = Engine.create();
    world = engine.world;


  
   var ball_options = {
    restitution: 1.5,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
ground=Bodies.rectangle(200, 380, 400, 15,ground_options)
World.add(world,ground)  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
rect(ground.position.x,ground.position.y,400,50) 


  
  
}

