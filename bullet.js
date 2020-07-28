class Bullet{
    constructor(x,y){
        this.body = createSprite(x,y,10,10);
    }
    display(){
        this.body.addImage(bulletImg);
    }
}