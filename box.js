 class Box
 {
     constructor(x,y,width,height)
     {
       
       this.bodies=Bodies.rectangle(x,y,width,height,{restitution:0.8});
       World.add(world,this.bodies);
       this.width=width;
       this.height=height;
    
      }

    display()
    {
      var pos=this.bodies.position;
      var angle=this.bodies.angle;
      push();
       translate(pos.x,pos.y);
       rotate(angle);
      rectMode(CENTER);
      fill(255);
       rect(0,0,this.width,this.height);
      
       pop();

    }


 }