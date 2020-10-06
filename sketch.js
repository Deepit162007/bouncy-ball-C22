const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world, object,ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }
  object = Bodies.rectangle(400,390,800,20,options);
  World.add(world,object);

  console.log(object.position);
  var ball_option={
    'restitution':0.5,
   
  }
  ball = Bodies.circle(400,20,20,ball_option);
  World.add(world,ball);
}

function draw() {
  background("pink");  
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(object.position.x,object.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}