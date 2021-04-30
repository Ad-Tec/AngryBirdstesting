class Ground
{
    constructor(x,y,width,height)
    {
      
      this.bodies=Bodies.rectangle(x,y,width,height,{isStatic:true});
      World.add(world,this.bodies);
      this.width=width;
      this.height=height;
   
     }

   display()
   {
     var pos=this.bodies.position;
     rectMode(CENTER);
     fill("brown");
      rect(pos.x,pos.y,this.width,this.height);
     


   }


}