
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState="onSling"
function preload()
{
	mangoIMG=loadImage("images/images/mango.png")
}

function setup() {
	createCanvas(1500, 680);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground=new Ground(750,660,1500,15)
	tree=new Tree(1250,350,500,670)
  boy=new Boy(250,550,290,390)
  mango1=new Mango(1250,200,45,45)
  mango2=new Mango(1220,300,45,45)
  mango3=new Mango(1320,250,45,45)
  mango4=new Mango(1420,160,45,45)
  mango5=new Mango(1120,250,45,45)
  mango6=new Mango(1260,250,45,45)
  mango7=new Mango(1380,170,45,45)
  mango8=new Mango(1290,70,45,45)
  mango9=new Mango(1250,150,45,45)
  mango10=new Mango(1280,130,45,45)
  mango11=new Mango(1300,180,45,45)
  mango12=new Mango(1380,230,45,45)
  stone=new Stone(170,460,45,45)
  chain=new Chain(stone.body,{x:250,y:550})
  console.log(mango1.Body)
}


function draw() {
  Engine.update(engine)	
  rectMode(CENTER);
  background(170,208,235);
  ground.display()
  tree.display()
  boy.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  stone.display()
  chain.display()
  drawSprites();
 
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  if(gameState==="onSling"){
      chain.fly();
      gameState = "launched";
  }
}






