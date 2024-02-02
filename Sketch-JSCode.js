const mVel = 2;
let particles = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
	textFont('Helvetica');
  textSize(30);
  textAlign(CENTER, CENTER);
  
  for(let i = 0; i < 250; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(255);
  
  for(let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].render();
    
    for(let y = 0; y < particles.length; y++) {
      if(particles[i].check(particles[y].pos) && particles[i] != particles[y]) {
				strokeWeight(0.2);
        line(particles[i].pos.x, particles[i].pos.y, particles[y].pos.x, particles[y].pos.y);
      }
    }
  }
}
