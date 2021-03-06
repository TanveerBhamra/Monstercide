const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxes = [];
var hero,monster,rope,ground;
var number = 0;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  for(var i = 200; i <= 550 ; i += 70){
    boxes.push(new Box(800, i, 70, 70));
  }

  for(var k = 200; k <= 550 ; k += 70){
    boxes.push(new Box(700, k, 70, 70));
  }

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  hero.display();
  monster.display();

  for(var h = 0; h <= 11; h++){
    boxes[h].display();
  }

}

function mouseDragged() {
      Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

