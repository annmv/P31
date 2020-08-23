class Plinkos{
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world,this.body);
    }
    display(){
      for(var j = 40; j <=width; j=j+50){
        plinkos.push(new Plinkos(j,75));
      }
      for(var j = 15; j <=width; j=j+50){
        plinkos.push(new Plinkos(j,175));
      }
      for(var j = 65; j <=width; j=j+50){
        plinkos.push(new Plinkos(j,275));
      }
      for(var j = 85; j <=width; j=j+50){
        plinkos.push(new Plinkos(j,375));
      }
      
      var pos = this.body.position;
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius);
    }
  }
