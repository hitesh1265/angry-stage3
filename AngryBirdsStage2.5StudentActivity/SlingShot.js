class SlingShot{
constructor(bodyA,bodyB){
    var options = 
       {bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.4,
        length:10};
    this.SlingShot = Constraint.create(options)
    World.add(world,this.SlingShot);
}
  display(){
  var startingline=this.SlingShot.bodyA.position;
  var endline = this.SlingShot.bodyB.position;
  strokeWeight(4);
   line(startingline.x,startingline.y,endline.x,endline.y);

  }
}