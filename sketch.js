const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  plinko1 = new Plinkos(200,300,10);
  ground = new Ground(240,400,800,20);
  division1 = new Divisions(120,480,10,100);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  plinkos1.display();
  ground.display();
  divisions1.display();

  drawSprites();
}
