// player controlled
var sprites = []; // this is an array (not the square brackets)
var score = 0;
var playerTeam = 1;
var enemyTeam = 2;
var gameOver = false;
var player;

function newGame() {
    score = 0;
    sprites = [];

    var numEnemies = 15;
    var numSidewinders = 3;

    for (var i = 0; i < numEnemies; i++) {
        sprites.push(new Enemy(random(width), random(-500, 0), enemyTeam));
    }

    for (var i = 0; i < numSidewinders; i++) {
        sprites.push(new Sidewinder(random(width), random(-500, 0), enemyTeam));
    }

    sprites.push(new Shooter(width / 2, 100, enemyTeam));

    player = new Ship(playerTeam);
    // plus the player
    sprites.push(player);
}

function setup() {
    createCanvas(800, 600);
    newGame();
}

function draw() {
    background(0);
    if (score % 50 === 0 && score > 0) {
        sprites.push(new Shooter(random(40, width - 40), random(100, 200), enemyTeam));
        score += 1;
    }
    if (gameOver) {
        background(0);
        textSize(56);
        textAlign(CENTER);
        fill(255);
        text("Game Over", width / 2, height / 3);
        text(score, width / 2, height / 2);
        text("Press Space", width / 2, 2 * height / 3);
    } else {
        // score in white
        fill(255);
        textSize(18);
        strokeWeight(1);
        text(score, 50, 50);
        // nested loops
        for (var i = 0; i < sprites.length; i++) {
            sprites[i].display();
            sprites[i].control();
            for (var j = 0; j < sprites.length; j++) {
                if (sprites[i] && sprites[j]) {
                    var a = sprites[i];
                    var b = sprites[j];
                    if (a.team !== b.team && a.isColliding(b)) {
                        a.handleCollision();
                        b.handleCollision();
                    }
                }
            }
        }
    }
}


function keyPressed() {
    if (key == ' ' && gameOver) {
        gameOver = false;
        newGame();
    }
}
