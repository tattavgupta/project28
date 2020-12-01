class Chain{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:3
        }
        this.chain=Matter.Constraint.create(option)
        World.add(world,this.chain)
    }

    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = [];
    }
    display(){
        if(this.chain.bodyA){
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)

        }
    }
}