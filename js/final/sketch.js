
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/

let myButton,myButton2,myButton3,myButton4;
var image1_up, image2_over;
var slice,death;
var cake;
// var duration;
// var  slideWidth = 500;

function preload() {


   slice = loadSound("sound/slice.mp3");
   death = loadSound("sound/death.mp3");


}


// define your p5.play sprites as global objects first.






// global manager object
var mgr;
  var count = 0;

function setup() {
  
    createCanvas(1920, 1080);
  //  console.log(hell);
     mgr = new SceneManager();
     masterVolume(.5);






    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.showNextScene();
    myButton = new Clickable();     //Create button
    myButton2 = new Clickable();
    myButton3 = new Clickable();
    myButton4 = new Clickable();
    myButton.locate(10, 10);        //Position Button
    myButton.width = 180;
myButton.height = 50;
myButton.color = "#FFFFFF";       //Background color of the clickable (hex number as a string)
myButton.cornerRadius = 10;       //Corner radius of the clickable (float)
myButton.strokeWeight = 2;        //Stroke width of the clickable (float)
myButton.stroke = "#000000";      //Border color of the clickable (hex number as a string)
myButton.text = "anazawn.com   x";       //Text of the clickable (string)
myButton.textColor = "#000000";   //Color of the text (hex number as a string)
myButton.textSize = 20;           //Size of the text (integer)
myButton.textFont = "sans-serif"; //Font of the text (string)

myButton2.locate(190, 10);        //Position Button
myButton2.width = 180;
myButton2.height = 50;
myButton2.color = "#FFFFFF";       //Background color of the clickable (hex number as a string)
myButton2.cornerRadius = 10;       //Corner radius of the clickable (float)
myButton2.strokeWeight = 2;        //Stroke width of the clickable (float)
myButton2.stroke = "#000000";      //Border color of the clickable (hex number as a string)
myButton2.text = "TechWiz.net   x";       //Text of the clickable (string)
myButton2.textColor = "#000000";   //Color of the text (hex number as a string)
myButton2.textSize = 20;           //Size of the text (integer)
myButton2.textFont = "sans-serif"; //Font of the text (string)

myButton3.locate(370, 10);        //Position Button
myButton3.width = 180;
myButton3.height = 50;
myButton3.color = "#FFFFFF";       //Background color of the clickable (hex number as a string)
myButton3.cornerRadius = 10;       //Corner radius of the clickable (float)
myButton3.strokeWeight = 2;        //Stroke width of the clickable (float)
myButton3.stroke = "#000000";      //Border color of the clickable (hex number as a string)
myButton3.text = "FileLiquid.com   x";       //Text of the clickable (string)
myButton3.textColor = "#000000";   //Color of the text (hex number as a string)
myButton3.textSize = 20;           //Size of the text (integer)
myButton3.textFont = "sans-serif"; //Font of the text (string)

myButton4.locate(550, 10);        //Position Button
myButton4.width = 50;
myButton4.height = 50;
myButton4.color = "#FFFFFF";       //Background color of the clickable (hex number as a string)
myButton4.cornerRadius = 10;       //Corner radius of the clickable (float)
myButton4.strokeWeight = 2;        //Stroke width of the clickable (float)
myButton4.stroke = "#000000";      //Border color of the clickable (hex number as a string)
myButton4.text = "+";       //Text of the clickable (string)
myButton4.textColor = "#000000";   //Color of the text (hex number as a string)
myButton4.textSize = 20;           //Size of the text (integer)
myButton4.textFont = "sans-serif"; //Font of the text (string)

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
      myButton.draw(); // <- Draw the 'myButton' Clickable
      myButton.onPress = function(){  //When myButton is pressed
      mgr.showScene( scene1 );
    }
    myButton2.draw(); // <- Draw the 'myButton' Clickable
    myButton2.onPress = function(){  //When myButton is pressed
    mgr.showScene( scene2 );
  }
  myButton3.draw(); // <- Draw the 'myButton' Clickable
  myButton3.onPress = function(){  //When myButton is pressed
  mgr.showScene( scene3 );
}
myButton4.draw(); // <- Draw the 'myButton' Clickable
myButton4.onPress = function(){  //When myButton is pressed
  cake = createSprite(width/2, height/2);
  cake.addAnimation("normal", "assets/cake_n_1.png");
  cake.addAnimation("hover", "assets/cake_n_2.png");
  cake.onMousePressed = function() {

      this.position.y = -5000;
      slice.play();
      death.play();

  }
  cake.onMouseOver = function() {

      this.changeAnimation("hover");

    }
}





}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( scene1 );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
          case '4':
                mgr.showScene( scene4 );
                break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
