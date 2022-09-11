function setup() {
	createCanvas(180, 180);
	background("#e27396");
}

function draw() {
	translate(width/2,height/2);
	rectMode(CENTER);

	fill("#a3b18a")
	//head
	rect(0,0,120,100,20)
	//eyes
	fill(0)
	rect(0,-10,90,30,10)
	if(frameCount%50==0){
		fill(255)
		rect(-20,-10,20,5)
		rect(20,-10,20,5)
	}else{
	fill(255)
	rect(-20,-10,20,20)
	rect(20,-10,20,20)
	}
	//mouth
		stroke(0)
	strokeWeight(5);
	fill("red")
	rect(0,30,50,20,0,0,10,10)
	fill("#ffb4a2")
	arc(0,37,30,20,PI,0,OPEN)
	//ears
	fill(255)
	rect(-70,0,15,40,5)
	rect(70,0,15,40,5)
	
	
}