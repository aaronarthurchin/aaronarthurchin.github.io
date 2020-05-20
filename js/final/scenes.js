
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";
var site1,trial,tech;
var site2,news;
var site3,adpuncher,d1,d2,d3,d4,d5,d6;
var site4;



// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


////////////////////////////// 1 /////////////////
function scene1()  {


// scene1.setup
    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
      for(var i=0; i<allSprites.length; i++){
  var mySprite = allSprites[i];

    mySprite.remove();
}

      site1 = createSprite(width/2, 580);
      site1.addAnimation("normal", "assets/anazawn.png");


        console.log("We are at entering scene1");

        background("grey");


            count = 1;

            trial = createSprite(width/2, -5000);
            trial.addAnimation("normal", "assets/trial1.png");
            trial.addAnimation("hover", "assets/trial2.png");
            trial.addAnimation("remove", "assets/trial3.png");
            tech = createSprite(230, 500);
            tech.addAnimation("normal", "assets/techad.png");
            tech.onMousePressed = function() {

                mgr.showScene( scene2 );

            }

            site1.onMousePressed = function() {

                trial.position.y = height/2;

            }

      trial.onMousePressed = function() {

          this.position.y = -5000;
          slice.play();
          death.play();

      }



    trial.onMouseOver = function() {

        this.changeAnimation("hover");

      }
      trial.onMouseOut = function() {

        this.changeAnimation("remove");



      }

    }


    this.draw = function()
    {
        background("grey");



    //Show an alert message
    trial = createSprite(width/2, -5000);
    trial.addAnimation("normal", "assets/trial1.png");
    trial.addAnimation("hover", "assets/trial2.png");
    trial.addAnimation("remove", "assets/trial3.png");

    site1.onMousePressed = function() {

        trial.position.y = height/2;

    }

trial.onMousePressed = function() {

  this.position.y = -5000;
  slice.play();
  death.play();

}



trial.onMouseOver = function() {

this.changeAnimation("hover");

}
trial.onMouseOut = function() {

this.changeAnimation("remove");



}
drawSprites();


    }

    this.keyPressed = function() {






    }



    this.mousePressed = function()
    {


    }
}

///////////////////////  2  ////////////////////////

function scene2()  {


    hell = "bye";

    // important to create object here not in set
   //this.ghosty = createSprite(this.lox, this.loy);
    // var ghosty = createSprite(lox,loy);

  this.setup = function() {
      console.log("We are at setup for scene2");



  }

  this.enter = function(){
    for(var i=0; i<allSprites.length; i++){
var mySprite = allSprites[i];

  mySprite.remove();
}

    site2 = createSprite(width/2, 580);
    site2.addAnimation("normal", "assets/techwiz.png");
    news = createSprite(width/2, height/2);
    news.addAnimation("normal", "assets/news_1.png");
    news.addAnimation("hover", "assets/news_2.png");
    news.addAnimation("remove", "assets/news_3.png");
    //create a sprite with a placeholder rectangle as visual component
boxSprite = createSprite(width/2, 1000, 800, 300);
//change the color of the placeholder
boxSprite.shapeColor = color(0, 0, 0,0);

    count =2;




      console.log("We are at entering scene2");
        console.log(hell);



        boxSprite.onMousePressed = function() {

mgr.showScene( scene3 );
  this.position.y = -5000;

        }

  news.onMousePressed = function() {

      this.position.y = -5000;
      slice.play();
      death.play();

  }



news.onMouseOver = function() {

    this.changeAnimation("hover");

  }
  news.onMouseOut = function() {

    this.changeAnimation("remove");



  }







  }




    this.draw = function()
    {
        background("white");
        drawSprites();

    }

    // this.mousePressed = function()
    // {
    //   //console.log("woot");
    //   // ghost.changeAnimation("stand");
    //     this.sceneManager.showNextScene();
    // }



}


///////////////////////  3  ////////////////////////

function scene3()  {


    hell = "bye";

    // important to create object here not in set
   //this.ghosty = createSprite(this.lox, this.loy);
    // var ghosty = createSprite(lox,loy);

  this.setup = function() {
      console.log("We are at setup for scene2");

  }

  this.enter = function(){
    for(var i=0; i<allSprites.length; i++){
var mySprite = allSprites[i];

  mySprite.remove();
}

    site3 = createSprite(width/2, 580);
    site3.addAnimation("normal", "assets/fileliquid.png");
    d1 = createSprite(width/2+430, 370);
    d1.addAnimation("normal", "assets/dlbutton1.png");
    d2 = createSprite(260, 400);
    d2.addAnimation("normal", "assets/dlbutton2.png");
    d3 = createSprite(width/2, 850);
    d3.addAnimation("normal", "assets/dlbutton3.png");
    d4 = createSprite(width/2, 1000);
    d4.addAnimation("normal", "assets/dlbutton4.png");
    d5 = createSprite(width/2+610, 800);
    d5.addAnimation("normal", "assets/dlbutton5.png");
    d6 = createSprite(width/2+610, 600);
    d6.addAnimation("normal", "assets/dlbutton6.png");
    anazawnad = createSprite(270, 800);
    anazawnad.addAnimation("normal", "assets/anazawnad.png");
    anazawnad.onMousePressed = function() {

        mgr.showScene( scene1 );

    }





      console.log("We are at entering scene2");
        console.log(hell);






  }




    this.draw = function()
    {
        background("grey");
        adpuncher = createSprite(width/2, -5000);
        adpuncher.addAnimation("normal", "assets/adpuncherinstall.png");

        adpuncher.onMousePressed = function() {

            mgr.showScene( scene4 );

        }
        d1.onMousePressed = function() {

            adpuncher.position.y = 540;

        }
        d2.onMousePressed = function() {

            adpuncher.position.y = 540;

        }
        d3.onMousePressed = function() {

            adpuncher.position.y = 540;

        }
        d4.onMousePressed = function() {

            adpuncher.position.y = 540;

        }
        d5.onMousePressed = function() {

            adpuncher.position.y = 540;

        }
        d6.onMousePressed = function() {

            adpuncher.position.y = 540;

        }


        drawSprites();

    }

    // this.mousePressed = function()
    // {
    //   //console.log("woot");
    //   // ghost.changeAnimation("stand");
    //     this.sceneManager.showNextScene();
    // }



}








////////////////////////////// 4 /////////////////

function scene4() {



    this.setup = function()  {
        console.log("We are at setup for scene3");
        // access a different scene using the SceneManager





    }

    this.enter = function(){
      for(var i=0; i<allSprites.length; i++){
  var mySprite = allSprites[i];

    mySprite.remove();
}

      site4 = createSprite(width/2, 580);
      site4.addAnimation("normal", "assets/lockout.png");


     //ghosty.visible = false;


        console.log("We are at entering scene2");
    }




    this.draw = function() {
        background(237, 28, 36);
        drawSprites();




    }

    // this.mousePressed = function()  {
    //
    //    this.sceneManager.showNextScene();
    // }

}
