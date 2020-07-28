class Logan{
    constructor(x,y){
        this.body = createSprite(x,y,100,100);
        this.x = this.body.x;
        this.y = this.body.y;
    }
    display(){
        this.body.addImage(loganImg);
    }
}