
// this class describes the properties of a single particleBg.
class ParticleBg {
// setting the co-ordinates, radius and the
// speed of a particleBg in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(3,5);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  

// creation of a particleBg.
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

// setting the particleBg in motion.
  moveParticleBg() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particlesBg which are less than a certain distance apart
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

// function Particle(x,y){
//  this.x = x;
//  this.y = y;

//  //this.yspeed = 0;

//  this.history = [];

//  this.update = function() {
//    this.x += random(-15,15);
//    this.y += random(-15,15);
//    //this.yspeed += gravity;

//    // if(this.y > height){
//    //  this.y = height;
//    //  this.yspeed *= -0.9;
//    // }
        
//         var v = createVector(this.x,this.y);
//    this.history.push(v);
//    //println(this.history.length);

//    if (this.history.length > 25){
//      this.history.splice(0,1);
//    }
//  }

//  this.show = function(){
//    //colorMode(RGB,100,500,10,255);
//    stroke('#0f0');
//    //fill(random(255));
    
//    ellipse(this.x,this.y,24,24);

//    for(var i = 0;i< this.history.length;i++){
      
//      var pos = this.history[i];
//      ellipse(pos.x,pos.y,8,8);
//    }
//  }
// }


// an array to add multiple particlesBg
let particlesBg = [];

//var particles = [];
//var gravity = 0.1;
function mousePressed(){
  particlesBg.push(new ParticleBg());

  //particles.push(new Particle(300,300));
}


function setup() {
  createCanvas(800, 800);

  // if (particlesBg.length == 0) {
  //   fill(255);
  //   textAlign(CENTER);
  //   textSize(64);
  //   text("Welcome!!", width / 2, height / 2);
  // }

  //inside setup

  for(let i = 0;i<width/10;i++){
    particlesBg.push(new ParticleBg());
   
  }
  //particlesBg.push(new Particle(mouseX,mouseY));
  //particle = new Particle(100,100);

}

//let t=0;
saveCount = 0;
function draw() {
  background(0,5);

    // inside draw

for(let i = 0;i<particlesBg.length;i++) {
  
  //for(var j = 0; j< particles.length;j++){
  // if (mouseIsPressed){
 //    particlesBg[i].createParticleBg();
 //    particlesBg[i].moveParticleBg();
 //    particlesBg[i].joinParticlesBg(particlesBg.slice(i));
    
 // }else{
  //particles[j].update;
    //particles[j].show;
    particlesBg[i].createParticleBg();
    particlesBg[i].moveParticleBg();
    particlesBg[i].joinParticlesBg(particlesBg.slice(i));
  
   //  particlesBg[i].update;
    // particlesBg[i].show;
  // for(var j = 1; j< particles.length;j++){
  //  particles[j].update;
  //  particles[j].show;
  //  }
    
    //}
  //}

}
}
function keyPressed() {
  if (key == 'x') {
    save("screenshotART_151_" + saveCount + ".png");
    saveCount++;
  }
}