// object with two parameters
function Bullet(startingX, startingY, vector, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 1;
    self.speed = 10;
    self.team = team;
    self.vector = vector;

    self.control = function () {
        self.x += self.vector.x;
        self.y += self.vector.y;

        if (self.y < 0 ||
            self.y > height ||
            self.x < 0 ||
            self.x > width) {

            var index = sprites.indexOf(self);
            if (index !== -1) {
                sprites.splice(index, 1);
            }

        }
    }


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
        if (index !== -1) {
            sprites.splice(index, 1);
        }
    }
    
    self.display = function () {
        fill(255); // white
        stroke(255); // white border
        strokeWeight(10);
        ellipse(self.x, self.y, self.size, self.size);
    }
}
