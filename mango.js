class Mango{
    constructor(x,y,radius){
      var options={
          isStatic:true,
          restitution:0,
          friction:1
        }
        this.body= Bodies.circle(x,y,radius,options)
        this.radius=radius;
        this.mangoIMG=loadImage("images/images/mango.png")
    }

    display(){
        var pos=this.body.position
        imageMode(CENTER)
        fill(77,53,17)
        image(this.mangoIMG,pos.x,pos.y,this.radius,this.radius)
    }
}
