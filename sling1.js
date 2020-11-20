class sling1{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            length: 300,
            stiffness:1
        }
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

  

    display(){
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
        var a=pointB.x+this.offsetX;
        var b =pointB.y+this.offsetY;

        line (pointA.x,pointA.y,a,b);
    }
       
    }
    
}