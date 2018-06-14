// object with two parameters
function Enemy(startingX, startingY, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 40;
    self.speed = 3;
    self.team = team;
    self.img = loadImage("../img/UFO.png");

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

        self.y = -self.size;
        self.x = random(0, width);
        score += 1;
    }

    self.control = function () {
        self.y += self.speed;
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
}
