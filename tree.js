class Tree{
    constructor(x,y,width,height){
      var options={
          isStatic:true
        }
        this.body= Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.treeIMG=loadImage("images/images/tree.png")
    }

    display(){
        var pos=this.body.position
        imageMode(CENTER)
        fill(77,53,17)
        image(this.treeIMG,pos.x,pos.y,this.width,this.height)
    }
}