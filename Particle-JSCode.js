class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-mVel, mVel), random(-mVel, mVel));
  }
  
  update() {
    this.pos.add(this.vel); 
    this.bounce();
  }
  
  check(val) {
    const dist = p5.Vector.dist(val, this.pos);
    return dist < 100;
  }
  
  render() {
    fill(255, 0, 0);
    //ellipse(this.pos.x, this.pos.y, 6); 
		//star(this.pos.x, this.pos.y, 2, 5, 5);
		//polygon(this.pos.x, this.pos.y, 5, 5);
		text("◉", this.pos.x, this.pos.y);
  }
  
  bounce() {
    if(this.pos.x > width || this.pos.x < 0) {
      this.vel.x *= -1; 
    }
    if(this.pos.y > height || this.pos.y < 0) {
      this.vel.y *= -1; 
    }
  }
	
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + TWO_PI(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
