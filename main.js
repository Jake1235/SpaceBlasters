var myx = 100;
var myy = 100;
var xspeed = 8;
var yspeed = 7;

function setup() {
	createCanvas(400, 300);
}

function draw() {
	background(0);
	ellipse(myx, myy, 80, 80);
	
    myx = myx + xspeed;
	myy += yspeed; // same as myy = myy + yspeed;

	if(myx > width || myx < 0) {
		xspeed = xspeed * -1;
	}

	if(myy > height || myy < 0) {
		yspeed *= -1;
	}
    
    ship.control();
    ship.display();
}
