class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2,			
		}

		this.paper= loadImage("paper.png");
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		World.add(world, this.body);

	}
	display(){

		var ppos=this.body.position;

		push();
		translate(ppos.x, ppos.y);
		imageMode(CENTER);
		image(this.paper, 0,0,this.r,this.r);
		pop();
			
	}

}
