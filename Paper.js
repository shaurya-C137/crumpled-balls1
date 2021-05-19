class Paper {
    constructor(x,y) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,15,options)

        World.add(world,this.body)
    }
    display(){
   var pos = this.body.position
   var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      strokeWeight(2.5);
      stroke("green");
      fill("green");
      ellipseMode(RADIUS)
      ellipse(0, 0, 15, 15);
      pop();
    }
}