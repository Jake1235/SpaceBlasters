// object with two parameters
function Sidewinder(startingX, startingY, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 40;
    self.speed = 2;
    self.team = team;
    self.img = loadImage("/SpaceBlasters/img/UFO.png");

    self.control = function () {
        self.x += self.speed;
        if (self.x > width) {
            self.y = random(height);
            self.x = random(-width, -self.size);
        }
    }

    self.display = function () {
        image(self.img, self.x, self.y, self.size, self.size);


        /*
        		fill(255, 0, 0); // red
        		stroke(255); // white border
        		strokeWeight(10);
        		ellipse(self.x, self.y, self.size, self.size)*/
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
        self.y = random(height);
        self.x = random(-width, -self.size);
        score += 5;
    }

}
