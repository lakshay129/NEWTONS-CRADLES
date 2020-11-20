class bob {
  constructor(x,y){
   var options={
    isStatic:false,
    density:1,
    
  }
    this.x=x;
    this.y=y;
    this.radius=35;
    this.body=Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world,this.body);
  }

  display() {
  var pos=this.body.position;
  push ();
  translate(pos.x,pos.y);
  fill ("skyblue")
  ellipseMode(RADIUS);
  ellipse(0,0,this.radius,this.radius);
  pop ();
  }
}
