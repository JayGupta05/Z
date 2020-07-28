class HealthBar{
    constructor(x,y){
        this.bar = createSprite(x,y,10,40);
        this.x = x;
        this.y = y;
        this.bar.shapeColor = "red";
    }
}