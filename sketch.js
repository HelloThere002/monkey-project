var monkey , monkey_running;
var banana ,bananaImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime=0;

var obstacleGroup, bananaGroup;
var gamestate=PLAY;
var END=0;
var PLAY=1;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,400,20);
  ground.x=ground.width/2;
  console.log(ground.x);

  
  bananaGroup = new Group;
  obstacleGroup = new Group;
}


function draw() {

  background(255);
  if (gamestate===PLAY){
      spawnBanans();
      spawnObstacles();
      if(ground.x<0){
    ground.x=ground.width/2;
        
        
  }
    ground.velocityX=-6;
      if (keyDown("space") ) {
    monkey.velocityY = -12;

  } 
    
  }
  
  
  else if(gamestate===END){
    ground.velocityX=0;
  }
  text("Score: "+ score, 200,50);  
 

  

  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  monkey.collide(ground);

  


  

  
  drawSprites();
}

function spawnBanans() {
 
  if (frameCount % 100 === 0) {
    var banans = createSprite(600,120,40,10);
    banans.y = Math.round(random(170,230));
    banans.addAnimation("bana", bananaImage);
    banans.scale = 0.1;
    banans.velocityX = -5;
    
    banans.lifetime=120;
    bananaGroup.add(banans);
  }
}


function spawnObstacles() {
 
  if (frameCount % 120 === 0) {
    var obstacles = createSprite(600,110,60,60);
    obstacles.y = Math.round(random(320,320));
    obstacles.addAnimation("objkle", obstacleImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -5;

    obstacles.lifetime=120;
    obstacleGroup.add(obstacles);
  }
}


