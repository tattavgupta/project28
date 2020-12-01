class Boy{
    constructor(x,y,width,height){
        var options={
            friction:1,
            density:1,
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.boyIMG=loadImage("images/images/boy.png")
    }

    display(){
        var pos=this.body.position
        imageMode(CENTER)
        image(this.boyIMG,pos.x,pos.y,this.width,this.height)
    }
}