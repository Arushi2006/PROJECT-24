class Ground
  {
    constructor(x,y,width)
    {
        var options=
        {
            isStatic:true,
        }

        this.ground=Bodies.rectangle(x,y,width,20,options);
        this.width=width;
        this.height=20;
        World.add(world,this.ground);


    }

    display()
    {
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
  }
