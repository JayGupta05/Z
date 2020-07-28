class Zombies{
    constructor(){
        //if(frameCount % 100 === 0){
            this.body = createSprite(displayWidth*2,random(100,600),10,10);
        //}
       // if(frameCount % 500 === 0){
            this.character = createSprite(displayWidth*2,random(200,500),10,10);
        //}
        this.body.velocityX = -6;
        this.character.velocityX = -6;
    }
    displayZombie(){
        this.body.addImage(zombImg);
    }
    display(){
        this.character.addImage(megaZombImg);
    }
}