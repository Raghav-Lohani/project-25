class Trash  {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      pos.x = mouseX;
      pos.y = mouseY;
        
      //trash = loadImage("sprites/paper.png");


          
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
     strokeWeight(3);
     stroke("yellow")
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  