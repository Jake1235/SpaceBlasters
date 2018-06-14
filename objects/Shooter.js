// object with two parameters
function Shooter(startingX, startingY, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 80;
    self.speed = 1;
    self.team = team;
    self.img = loadImage("/SpaceBlasters/img/UFO.png");
    self.bulletSpeed = 7;
    self.canShoot = true;
    self.delay = 1000;
    self.armor = 20;

    self.isColliding = function (other) {
        // the distance
        var distance = dist(other.x, other.y, self.x, self.y);

        // compare distance for overlapping radii
        if (distance < self.size / 2 + other.size / 2) {
            return true;
        }
        return false;
    }

    self.handleCollision = function () {
        var index = sprites.indexOf(self);
        if(self.armor > 0) {
self.armor -= 5;
} else {
        if (index !== -1) {
            sprites.splice(index, 1);
        }
    } score += 1;
    }
    self.control = function () {
        var vector = self.aim();
        self.shoot(vector);

        //  self.y += self.speed;
        if (self.y > height) {
            self.y = -self.size;
            self.x = random(0, width);
            
        }
    }

    self.display = function () {

        image(self.img, self.x, self.y, self.size, self.size);
        /*
          fill(255, 0, 0); // red
          stroke(255); // white border
          strokeWeight(10);
          ellipse(self.x, self.y, self.size, self.size); 
          */

    }

    self.aim = function () {
        var target = player;
        var dx = target.x - self.x;
        var dy = target.y - self.y;
        var vector = createVector(dx, dy);
        vector.normalize();
        return vector;
    }

    self.shoot = function (vector) {
        if (self.canShoot) {
            self.canShoot = false;
            sprites.push(new Bullet(self.x, self.y, vector, enemyTeam));
            setTimeout(function () {
                self.canShoot = true;
            }, self.delay);
        }
    }
}
