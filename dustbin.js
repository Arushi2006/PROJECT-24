class Dustbin
  {
    constructor(x,y,width,height)
    {
  
        var options=
        {
            isStatic:true,

        }
      
      this.dustbinSprite=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      this.image=loadImage("dustbingreen.png");
      World.add(world,this.dustbinSprite);
      
      }

      display()
      {
        image(this.image,this.dustbinSprite.position.x,this.dustbinSprite.position.y,this.width,this.height);
      }
  }
