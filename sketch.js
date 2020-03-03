
// Saummay Singhal
// ssing47
// ART 151 Project 2 : Drawing Machine 

// Press X to take a screenshot !!!

//
// ParticleBg:
// Class to handle the Particle
//
class ParticleBg {

  //
  // constructor()
  //
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(3,5);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

 
  //
  // createParticleBg():
  // Creates the particle
  //
  createParticleBg() {
    noStroke();
   var r = random(255); // r is a random number between 0 - 255
   var g = random(100,200); // g is a random number betwen 100 - 200
   var b = random(100); // b is a random number between 0 - 100
   var a = random(200,255); // a is a random number between 200 - 255
    fill(r, g, b, a);
    //noFill();
    circle(this.x,this.y,this.r);
  }

  // 
  // moveParticleBg():
  // sets the particleBg in motion.
  //
  moveParticleBg() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

  //
  // joinParticlesBg():
  // joins nearby particles
  //
  joinParticlesBg(paraticlesBg) {
    particlesBg.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        var a = random(0,255);
        var b = random(0,255);
        var c = random(0,255);
        stroke(a,b,c);
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

// an array to add multiple particles
let particlesBg = [];

//
// mousePressed()
// adds new particles when mouse is pressed
//
function mousePressed(){
  particlesBg.push(new ParticleBg());
}

//
// setup():
// Creates canvas and initial random particles
//
function setup() {
  createCanvas(800, 800);
  
  //inside setup

  for(let i = 0;i<width/10;i++){
    particlesBg.push(new ParticleBg());
   }
}

// var to track number of screenshots
saveCount = 0;

//
// draw()
// creates more particles using class ParticleBg
//
function draw() {
 background(0,5);
   // inside draw

for(let i = 0;i<particlesBg.length;i++) {
  
    particlesBg[i].createParticleBg();
    particlesBg[i].moveParticleBg();
    particlesBg[i].joinParticlesBg(particlesBg.slice(i));
 }
}

//
// keyPressed():
// screenshots on pressing the X key
//
function keyPressed() {
  if (key == 'x') {
    save("screenshotART_151_" + saveCount + ".png");
    saveCount++;
  }
}

// End
