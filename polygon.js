class Polygon{
    constructor(){
        var options =
      {
          frictionAir:0.5,
          density:0.8
      }
        polygon = Bodies.circle(50,200,20,options);
        World.add(world,polygon);
    }

    display(){
    var angle = polygon.angle;
    var Ppos = polygon.position;
    
    push();
    translate(Ppos.x,Ppos.y);
    rotate(angle);
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    pop();
    }
}