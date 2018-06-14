function Ship(team) {

    // explicit reference to this instance (of an object)
    var self = this;

    // position is bottom middle
    self.x = width / 2; // middle of the screen
    self.y = height - 50; // 50 px up from the bottom
    self.size = 60;
    self.speed = 8;
    self.team = team;
    self.img = loadImage("../img/ship.png");
    self.canShoot = false;
    self.delay = 200;
     

    setTimeout(function() {
        self.canShoot = true;
    }, self.delay);

    // game over sequence
    self.handleCollision = function () {
        gameOver = true;
    }

    self.isColliding = function (other) {
        var distance = dist(other.x, other.y, self.x, self.y);
        if (distance < self.size / 2 + other.size / 2)
            return true;
        return false;
    }

    // controls keyboard inputs
    self.control = function () {

        var a = 97;
        var A = 65;

        var d = 100;
        var D = 68;

        var w = 87;
        var s = 83;
        var space = 32;




        if ((keyIsDown(a) || keyIsDown(A)) && self.x > 20) {
            self.x -= self.speed;
        }

        if ((keyIsDown(d) || keyIsDown(D)) && self.x < width - 20) {
            self.x += self.speed;
        }

        if (keyIsDown(w) && self.y > 30) {
            self.y -= self.speed
        }

        if (keyIsDown(s) && self.y < height - 30) {
            self.y += self.speed
        }

        if (keyIsDown(space)) {

            self.shoot();
        }
    }

    self.shoot = function () {
        if (self.canShoot) {
            self.canShoot = false;
            sprites.push(new Bullet(self.x, self.y, createVector(0, -7), playerTeam));
            setTimeout(function () {
                self.canShoot = true;
            }, self.delay);

        }
    }


    // draws the ship
    self.display = function () {
        imageMode(CENTER);
        image(self.img, self.x, self.y, self.size, self.size);
        /*
        fill(0, 0, 255); // blue
        stroke(255, 255, 0); // yellow
        strokeWeight(5);
        ellipse(self.x, self.y, self.size, self.size);
        */
    }
}
