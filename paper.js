class Paper
  {
    constructor(x,y,radius)
    {
    
    
        var  paperoptions=
        {
            isStatic:false,
            restitution:0.3
        }
       this.paperSprite=Bodies.circle(x,y,radius,paperoptions);
       this.radius=radius;
       this.image=loadImage("paper.png");
	     World.add(world,this.paperSprite);

    }

    display()
    {
      image(this.image,this.paperSprite.position.x,this.paperSprite.position.y,this.radius,this.radius);
    }
    
  
  }
