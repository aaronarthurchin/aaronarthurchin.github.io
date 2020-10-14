
var value = 0;
var gSize = 200;
var tCounter = 0;
let rot=0;



function setup() {
  var value = 0;
  var gSize = 200;
  var tCounter = 0;
  let rot=0;
  createCanvas(800, 800);
  background(0);
  noStroke();
  textFont('Arial');
  textSize(30);



  rectMode(CENTER);





text('mouse move tint | mouse wheel spin');
fill(255, 255, 255);


}

function draw() {




  background(255-value);


 circle(width/2, height/2, 200);
fill(value);
push();
   translate(600, 200);
   rotate(rot);
person();
  pop();
  push();
     translate(200, 600);
     rotate(rot);
    person();
pop();




txt();


  tCounter ++;
  if (tCounter > width) {
    tCounter = -50;
  }


}
function txt(){
  fill(0);
  text('mouse move tint | mouse wheel spin', tCounter, height/2);
}

function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}


function mouseWheel(event) {

  rot += event.delta;

  return false;
}
function person(){
  push();
  translate(0,0);
  head();
  translate(0,50);
  body();
  translate(-25,-10);
  rotate(radians(70));
  arm();
   translate(20,-50);
  rotate(radians(-140));
  arm();
  rotate(radians(90));
  translate(-20,60);
  leg();
  rotate(radians(140));
  translate(-20,-10);
  leg();
   pop();

}
function head(){
circle(0,0,25);

}
function body(){
rect(0,0,15,60);

}
function arm(){
rect(0,0,10,50);

}
function leg(){
rect(0,0,10,60);

}
function ear(){
  push();
  ellipse(0,0,5,10);
  translate(0,5);
  ellipse(0,0,2,5);
  pop();
}
