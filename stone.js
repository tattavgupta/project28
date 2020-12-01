class Stone{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          restitution:0.5,
          friction:1,
          density:0.7
        }
        this.body= Bodies.circle(x,y,radius,options)
        this.radius=radius;
        this.stoneIMG=loadImage("images/images/stone.png")
    }

    display(){
        var pos=this.body.position
        imageMode(CENTER)
        fill(77,53,17)
        image(this.stoneIMG,pos.x,pos.y,this.radius,this.radius)
    }
}
