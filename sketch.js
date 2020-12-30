const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1;
var ground;
var engine,world;

function setup(){
  createCanvas(1200,600);

  engine=Engine.create();
  world=engine.world;

  //Bodies
  var options={
    isStatic:true
  }
  fill("brown");
  ground=Bodies.rectangle(width/2,575,width,50,options);
  World.add(world,ground);  

  b1 = new Building(700,500,50,50); 
  b2 = new Building(700,200,50,50); 
  b3 = new Building(700,200,50,50); 
  b4 = new Building(700,200,50,50); 
  b5 = new Building(700,200,50,50); 
  b6 = new Building(700,200,50,50); 
  b7 = new Building(700,200,50,50); 

  b8 = new Building(800,500,50,50); 
  b9 = new Building(800,200,50,50); 
  b10 = new Building(800,200,50,50); 
  b11 = new Building(800,200,50,50); 
  b12 = new Building(800,200,50,50); 
  b13 = new Building(800,200,50,50); 
  b14 = new Building(800,200,50,50); 
  b15 = new Building(800,200,50,50); 

  b16 = new Building(900,200,50,50); 
  b17 = new Building(900,500,50,50); 
  b18 = new Building(900,200,50,50); 
  b19 = new Building(900,200,50,50); 
  b20 = new Building(900,200,50,50); 
  b21 = new Building(900,200,50,50); 
  b22 = new Building(900,200,50,50); 
  b23 = new Building(900,200,50,50); 
  b24 = new Building(900,200,50,50); 

  wb = new WreckingBall(300,height/2,50);
  string = new wbstring(wb.body,{x:500,y:0});

}
function draw(){
  background("lightblue");
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,50);
  
  fill("green");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  fill("yellow");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();

  fill("red");
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();

  wb.display();

  string.display();
}


function mouseDragged(){
  Matter.Body.setPosition(wb.body,{x:mouseX,y:mouseY})  
}

 