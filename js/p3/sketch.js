
/////////////////   THIS CREATES YOUR OBJECT ARRAY    ///////////////////////

let myobgect = [];
let toggle =0;
let h;
let m;
let s;



function setup() {
  createCanvas(1920, 1080);

  rectMode(CENTER);
  angleMode(DEGREES);
let h = hour();
let m = minute();
let s = second();
/////////////////   DEFINE YOUR OBJECT ARRAYS LIKE THIS    ///////////////////////
  for( let i = 0; i < h ; i++){
  myobgect.push(new Obgect());
}

}

function draw() {
  let h = hour();
  let m = minute();
  let s = second();

let s2 = map(s,0,59,0,600,true);



  background(150,200,255);

  if(h>18||h<6){
fill(50,100,155);
  rect(width/2,height/2+80,1920,980);
}
else {
  fill(100,200,255);
  rect(width/2,height/2+80,1920,980);
}

  push();
  translate(-s2,0);
  sinWave();
  pop();
/////////////////   REMMEBER TO ALWAYYS PUT YOUR OBJECT ARRAYS IN THIS FOR LOOP "for(var i = 0; i < myobgect.length ; i++){  myobgect[i].____INSERT_METHOD_NAME_HERE____}"   ///////////////////////
  for(let i = 0; i < myobgect.length ; i++){
  myobgect[i].display();
    myobgect[i].update();
}

/////////////////   THIS IS YOUR TOGGLE LOGIC YOU CAN CHANGE THIS SEE NEXT NOTE   ///////////////////////
  if (keyIsDown(65)){

    toggle+=1;

  }

/////////////////   BEHAVIOR TRIGGERS (CAN TRIGGER WITH TOGGLE LOGIC, MILLIS, MOUSE, KEY, ETC.)    ///////////////////////
    if (toggle == 1) {
        for(let i = 0; i < myobgect.length ; i++){
  myobgect[i].changeBehavior();
}
   }


   if (toggle > 1){
     toggle = 0;
       for(let i = 0; i < myobgect.length ; i++){
  myobgect[i].update();
}
   }


}
function fish(){
push();
rotate(random(-10,10));
noStroke();
  fill(255,100,100);
ellipse(0,0,100,70);
ellipse(0,-10,70,75);
triangle(-80,-40,-80,30,30,0);
translate(30,0);
fill(255,255,255);
ellipse(0,0,20,20);
translate(7,0);
fill(0);
ellipse(0,0,10,10);

pop();


}
function sinWave(){
  smooth();
  strokeWeight(10);

  let a = 0.0;
      let s2 = map(s,0,59,1,100,true);
  let inc = TWO_PI/100.0;
  stroke(100,200,255);
  push();
  translate(0,-50);
rotate(0);
    for (var g=0; g<3000; g+=1) {

    line(g, 3000, g, random(50,80)+sin(a)*120);

    a = a + inc;
  }
  pop();
  }

///////////////////////////////////////////////////////////////////
class Obgect{


/////////////////   VARIABLES LIKE: var, FLOAT, STRING, ETC GO HERE    ///////////////////////




constructor(){
  this.x = random(1920);
  this.y = random(1080);
  this.speedX = random(-5,5);
  this.speedY = random(-5,5);
  this.bLocX = this.x;
  this.bLocY = this.y;


}

 display(){

/////////////////   USE AS function DRAW (THIS AREA IS ACTIVE)    ///////////////////////

  push();
  translate(this.bLocX,this.bLocY);

/////////////////    PUT YOUR DRAWING HERE (ELLIPSE, RECT, LINE, TRIANGLE, ETC.)   ///////////////////////

fish();



  pop();


}
 update(){

   if ((this.bLocX > 1920) ||(this.bLocX < 0) ) {
   this.speedX = -this.speedX;
   }
   if ((this.bLocY < 0) || (this.bLocY > 900)) {
   this.speedY = -this.speedY;
   }
   let m = minute();

 let m2 = map(m,0,59,1,6,true);
 this.speedX = random(-m2,m2);
 this.speedY = random(-m2,m2);

   this.bLocX += this.speedX;
this.bLocY += this.speedY;
}
/////////////////   MAIN BEHAVIOR LIKE: COLOR SWAPPING, VARIABLE EDITING, MOVEMENT, PHYSICS, BASICALLY ANYTHING THAT NEEDS AN IF STATEMENT GOES HERE   ///////////////////////

 changeBehavior(){

/////////////////   EDITED BEHAVIORS GO HERE    ///////////////////////
push();
translate(this.x,this.y);
fill(255,0,0);
rect(0,0,100,100);
pop();
 }

}
