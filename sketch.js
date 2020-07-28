var hall1,hall2,hall3;
var rand, backsprite;
var steve,steveImg;
var logan,loganImg;
var zombie,megaZombie;
var zombImg,megaZombImg;
var score = 0;
var rect,healthBar;
var x = 20;
var barArray = [];
var zombieGroup = [];
var megaZombieGroup = [];
var y = [];
var z = [];
var bulletImg, bullet;
var bulletArray = [];
var bar = 10;
var flag = []; //added by vasu

function preload(){
  hall1 = loadImage("images/1.png");
  hall2 = loadImage("images/2.png");
  hall3 = loadImage("images/3.png");
  steveImg = loadImage("images/img111.png");
  loganImg = loadImage("images/img221.png");
  zombImg = loadImage("images/zombies.png");
  megaZombImg = loadImage("images/megaZombies.jpg");
  bulletImg = loadImage("images/bullet.png");
}

function setup(){
  createCanvas(displayWidth,displayHeight-100);
  backsprite = createSprite(0,(displayHeight-100)/2,displayWidth,displayHeight);  
  backsprite.addImage("1",hall1);
  backsprite.addImage("2",hall2);
  backsprite.addImage("3",hall3);
  backsprite.velocityX = -5;
  rect = createSprite(80,40,150,50);
  rect.shapeColor = "white";

  steve = new Steve(300,300);
  logan = new Logan(150,300);

  for(var i = 0; i < 10; i++){
    healthBar = new HealthBar(x,40);
    x=x+13;
    barArray.push(healthBar);
  }

}

function draw(){
  if(frameCount % 2000 === 0){
    rand = Math.round(random(1,3));
    console.log(rand);
    backsprite.x = backsprite.width/2;
    switch(rand){
      case 1 : backsprite.changeAnimation("1");
      break;
      case 2 : backsprite.changeAnimation("2",);
      break;
      case 3 : backsprite.changeAnimation("3");
      break;
    }
  }     
  
  if(backsprite.x<=0){
    backsprite.x = backsprite.width/2;
  }

  if(keyWentDown("space")){
    console.log("h");
    bullet = new Bullet(steve.character.x+30,steve.character.y-70);
    bullet.display();
    bullet.body.velocityX = 6;
    bulletArray.push(bullet);
    bullet.body.lifetime = 200;
  }

  for(var i = 0; i<bulletArray.length; i++ ){
    /*for(var k = 0; k<megaZombieGroup.length; k++){
      var bulletArray2 = [];
      if(bulletArray[i].body.isTouching(megaZombieGroup[k].character)){
        bulletArray2.push(bulletArray[i]);
        console.log(bulletArray2);
        if(bulletArray2.length === 3){
          megaZombieGroup[k].character.destroy();
          bulletArray[i].body.destroy();
        }
      }
    }*/
    for(var j = 0; j<zombieGroup.length; j++){
      if(bulletArray[i].body.isTouching(zombieGroup[j].body)){
        zombieGroup[j].body.destroy();
        bulletArray[i].body.destroy();
        break;//added by vasu
      }
    }
  }

  //added by vasu
  for(var k=0; k<megaZombieGroup.length; k++){
    for(var i=0; i<bulletArray.length;i++){
      if(bulletArray[i].body.collide(megaZombieGroup[k].character)){

        //store touchedbulllet
        flag.push(i);
      }
    }
    if(flag.length === 3){
      
      //destroy all the bullets
      for(j=0;j<flag.length;j++){
        bulletArray[flag[j]].body.destroy();
      }
      megaZombieGroup[k].character.destroy();

      //empty touchedbullet array
      flag = [];
    }
  }

  if(frameCount % 100 === 0){
    zombie = new Zombies();
    zombie.displayZombie();
    zombieGroup.push(zombie);
  }

  if(frameCount % 500 === 0){
    megaZombie = new Zombies();
    megaZombie.display();
    megaZombieGroup.push(megaZombie);
  }

  for(var i = 0; i < zombieGroup.length; i++){
    if(zombieGroup[i].body.x < displayWidth/2 - 300){
      zombieGroup[i].body.velocityX = 0;
      y.push(zombieGroup[i]);
      barArray.pop();
    }
  }

  for(var i = 0; i < megaZombieGroup.length; i++){
    if(megaZombieGroup[i].character.x < displayWidth/2 - 350){
      megaZombieGroup[i].character.velocityX = 0;
      z.push(megaZombieGroup[1]);
    }
  }

  for(var i = 0; i < 10-barArray.length; i++){
   barArray[i].bar.destroy();
  }

  if(y.length % 2 === 0){
    x = x-1;
  }

  steve.display();
  logan.display();
  steve.move();

  logan.body.x = steve.character.x-150;
  logan.body.y = steve.character.y;
  
  drawSprites();
}