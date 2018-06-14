// player controlled
var sprites = []; // this is an array (not the square brackets)

var score = 0;

var playerTeam = 1;
var enemyTeam = 2;


function setup() {
	createCanvas(450, 400);

	// 10 random enemies
	for(var i = 0; i < 15; i++) {
		sprites.push(new Enemy(random(width), random(-500, 0), enemyTeam));
	}
	// plus the player
	sprites.push(new Ship(playerTeam));

	console.log(sprites.length);
}

function draw() {
    background(0);

    // score in white
    fill(255);
    textSize(18);
    strokeWeight(1);
    text(score, 50, 50);

	// nested loops
	for(var i = 0; i < sprites.length; i++) {
		sprites[i].display();
		sprites[i].control();
		for(var j = 0; j < sprites.length; j++) {
			if(sprites[i] && sprites[j]) {
				if(sprites[i].team !== sprites[j].team && sprites[i].isColliding(sprites[j])) {
					
					sprites[j].handleCollision();
					sprites[i].handleCollision();
				}
			}
		}
	}
}
