class Steve{
    constructor(x,y){
       this.character = createSprite(x,y,50,50);
        this.x = this.character.x;
        this.y = this.character.y;
    }

    move(){
        this.character.velocityX = 0;
        this.character.velocityY = 0;
        if(keyDown(UP_ARROW) && this.character.y >= 100){
            this.character.velocityY = -6;
        }
        if(keyDown(DOWN_ARROW) && this.character.y <= displayHeight-200){
            this.character.velocityY = 6;
        }
        if(keyDown(RIGHT_ARROW) && this.character.x <= displayWidth/2-200){
            this.character.velocityX = 6;
        }
        if(keyDown(LEFT_ARROW) && this.character.x >= 200){
            this.character.velocityX = -6;
        }
    }

    display(){
        this.character.addImage(steveImg);
    }
}