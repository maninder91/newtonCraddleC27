class bob
{
	constructor(x, y)
	{
		var options={
			restitution: 1,
			friction:0.3,
			density:1
			
			}
		
		this.body=Bodies.circle(x, y,25, options);
		World.add(world, this.body);

	}
	display()
	{
		 
			 
			fill("red");
			ellipse(this.body.position.x,this.body.position.y,50,50);
		 
			
	}

} 

 
