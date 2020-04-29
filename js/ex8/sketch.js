// example #7.2
       // this is a 7x7 array
       var gridarr = [
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,9,9,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,1,3,3,1,2,2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,2,2,2,2,1,1,1,1,2,2,1,1,3,1,1,3,1,1,2,2,1,1,1,1,2,2,2,2,0,0,0,0,0,0,0],
       [0,0,0,0,2,2,2,1,1,1,1,1,9,9,9,1,1,3,1,1,6,5,1,1,3,1,1,9,9,9,1,1,1,1,1,2,2,2,0,0,0,0],
       [0,0,0,2,1,1,1,1,9,9,9,9,1,3,3,1,3,1,5,5,6,5,7,5,1,3,1,3,3,1,3,3,3,3,1,1,1,1,2,0,0,0],
       [0,0,2,1,9,9,9,3,1,3,3,3,1,3,3,1,1,1,5,5,6,5,7,5,1,1,1,3,3,1,3,3,3,1,3,3,3,3,1,2,0,0],
       [0,2,1,9,3,3,3,3,3,1,3,3,3,1,3,3,1,7,5,5,6,5,7,5,5,1,3,3,1,3,3,3,1,3,3,3,3,3,3,1,2,0],
       [0,0,2,1,1,3,3,3,3,3,1,3,3,1,3,3,1,7,5,6,6,5,7,5,5,1,3,3,1,3,3,1,3,3,3,3,3,1,1,2,0,0],
       [0,0,0,2,2,1,1,3,3,3,3,1,3,3,1,3,1,7,5,6,6,5,7,5,5,1,3,1,3,3,1,3,3,3,3,1,1,2,2,0,0,0],
       [0,0,0,0,0,2,2,1,1,3,3,3,1,3,1,3,1,7,5,6,6,5,7,5,5,1,3,1,3,1,3,3,3,1,1,2,2,0,0,0,0,0],
       [0,0,0,0,0,0,0,2,1,1,1,3,3,1,3,1,3,1,7,6,6,5,7,5,1,3,1,3,1,3,3,1,1,1,2,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,1,1,3,1,1,9,1,7,6,6,5,7,5,1,9,1,1,3,1,1,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,1,5,1,1,1,9,1,7,6,6,5,7,7,1,9,1,1,1,5,1,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,1,6,5,7,7,1,1,1,7,5,6,5,7,7,1,1,1,7,7,5,5,1,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,1,6,6,5,7,1,1,9,1,7,7,6,7,7,7,1,9,1,1,7,5,6,6,1,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,1,6,6,5,7,1,9,9,1,7,7,6,7,7,7,1,9,9,1,7,5,6,6,1,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,1,1,5,5,7,7,1,1,3,4,1,7,7,7,7,1,4,3,1,1,7,7,5,5,1,1,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,1,1,7,7,7,1,7,1,3,4,1,1,1,1,1,1,4,3,1,7,1,7,7,7,1,1,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,1,7,1,1,1,7,1,7,1,3,4,1,1,1,1,4,3,1,7,1,7,1,1,1,7,1,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,1,5,7,7,7,1,1,1,7,1,3,1,1,1,1,1,1,3,1,7,1,1,1,7,7,7,5,1,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,1,5,7,5,7,1,7,7,1,7,1,3,3,3,3,3,3,3,3,1,7,1,5,5,1,7,7,7,5,1,0,0,0,0,0,0],
       [0,0,0,0,0,0,1,9,7,9,7,1,5,7,7,1,1,1,3,1,1,1,1,3,1,1,1,5,5,5,1,7,3,7,9,1,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,1,1,3,1,6,5,7,7,1,9,3,1,3,3,3,3,1,3,9,1,5,5,5,7,1,9,1,1,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,1,5,6,5,7,1,9,3,9,3,1,1,1,1,3,9,3,9,1,5,6,7,7,1,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,1,6,6,5,7,1,1,9,9,3,9,8,8,9,3,9,3,1,1,5,6,7,7,1,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,1,5,5,5,5,7,7,1,1,3,9,9,8,8,9,9,3,1,1,5,6,5,7,7,7,1,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,1,1,5,5,7,7,1,1,7,1,1,1,8,8,1,1,1,7,1,1,5,5,5,7,1,1,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,1,6,1,1,1,1,7,1,1,7,7,7,1,1,7,7,7,1,1,5,1,1,1,1,7,1,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,1,6,6,7,7,7,7,1,0,1,1,7,7,7,7,1,1,0,1,5,5,6,7,7,7,1,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,1,1,5,6,7,7,7,1,0,0,0,0,1,1,1,1,0,0,0,0,1,5,6,7,7,7,1,1,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,1,6,1,1,1,1,1,7,1,0,0,0,0,0,0,0,0,0,0,1,7,1,1,1,1,1,5,1,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,1,5,7,7,7,7,7,7,1,0,0,0,0,0,0,0,0,0,0,1,7,7,7,7,7,7,5,1,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,1,5,9,7,3,7,3,7,1,0,0,0,0,0,0,0,0,0,0,1,7,3,7,3,7,9,7,1,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,1,9,1,9,7,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,9,7,9,1,9,1,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,1,3,1,3,1,9,1,0,0,0,0,0,0,0,0,0,0,0,0,1,9,1,9,1,9,1,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
       ];

       var gridarr2 = [
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','shadow','black','black','shadow','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','shadow','black','highlight','highlight','black','shadow','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','shadow','shadow','shadow','shadow','nothing','nothing','shadow','shadow','black','skin','skin','black','shadow','shadow','nothing','nothing','shadow','shadow','shadow','shadow','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','shadow','shadow','shadow','shadow','black','black','black','black','shadow','shadow','black','black','skin','black','black','skin','black','black','shadow','shadow','black','black','black','black','shadow','shadow','shadow','shadow','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','shadow','shadow','shadow','black','black','black','black','black','highlight','highlight','highlight','black','black','skin','black','black','highlight','highlight','black','black','skin','black','black','highlight','highlight','highlight','black','black','black','black','black','shadow','shadow','shadow','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','shadow','black','black','black','black','highlight','highlight','highlight','highlight','black','skin','skin','black','skin','black','skin','skin','highlight','skin','skin','skin','black','skin','black','skin','skin','black','skin','skin','skin','skin','black','black','black','black','shadow','nothing','nothing','nothing'],
         ['nothing','nothing','shadow','black','highlight','highlight','highlight','highlight','black','skin','skin','skin','black','skin','skin','black','black','black','skin','skin','highlight','skin','skin','highlight','black','black','black','skin','skin','black','skin','skin','skin','black','skin','skin','skin','skin','black','shadow','nothing','nothing'],
         ['nothing','shadow','black','highlight','skin','skin','skin','skin','skin','black','skin','skin','skin','black','skin','skin','black','skin','skin','highlight','highlight','skin','skin','highlight','highlight','black','skin','skin','black','skin','skin','skin','black','skin','skin','skin','skin','skin','skin','black','shadow','nothing'],
         ['nothing','nothing','shadow','black','black','skin','skin','skin','skin','skin','black','skin','skin','black','skin','skin','black','skin','skin','highlight','highlight','skin','skin','highlight','highlight','black','skin','skin','black','skin','skin','black','skin','skin','skin','skin','skin','black','black','shadow','nothing','nothing'],
         ['nothing','nothing','nothing','shadow','shadow','black','black','skin','skin','skin','skin','black','skin','skin','black','skin','black','skin','skin','highlight','highlight','skin','skin','highlight','highlight','black','skin','black','skin','skin','black','skin','skin','skin','skin','black','black','shadow','shadow','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','shadow','shadow','black','black','skin','skin','skin','black','skin','black','skin','black','skin','skin','highlight','highlight','skin','skin','highlight','highlight','black','skin','black','skin','black','skin','skin','skin','black','black','shadow','shadow','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','shadow','black','black','black','shadow','shadow','black','skin','black','pink','black','skin','highlight','highlight','skin','skin','highlight','black','pink','black','skin','black','skin','skin','black','black','black','shadow','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','black','skin','black','black','pink','black','skin','highlight','highlight','skin','skin','highlight','black','pink','black','black','skin','black','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','highlight','black','black','black','pink','black','skin','highlight','highlight','skin','skin','highlight','black','pink','black','black','black','highlight','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','pearl','highlight','skin','pink','black','black','black','skin','highlight','highlight','skin','skin','skin','black','black','black','pink','skin','skin','highlight','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','pearl_highlight','pearl','skin','pink','black','black','highlight','black','skin','skin','highlight','skin','skin','skin','black','highlight','black','black','pink','skin','pearl_highlight','pearl','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','pearl','pearl','skin','pink','black','highlight','highlight','black','skin','skin','highlight','skin','skin','skin','black','highlight','highlight','black','pink','skin','pearl','pearl','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','black','skin','skin','pink','pink','black','black','highlight','eyes','black','skin','skin','skin','skin','black','eyes','highlight','black','black','pink','pink','skin','skin','black','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','black','pink','pink','pink','black','skin','black','highlight','eyes','black','black','black','black','black','black','eyes','highlight','black','skin','black','pink','pink','pink','black','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','skin','black','black','black','skin','black','skin','black','skin','eyes','black','black','black','black','eyes','skin','black','skin','black','skin','black','black','black','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','pink','skin','skin','skin','black','black','black','skin','black','highlight','black','black','black','black','black','black','highlight','black','skin','black','black','black','skin','skin','skin','pink','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','black','pink','skin','pink','skin','black','skin','skin','black','skin','black','highlight','pink','pink','pink','pink','pink','pink','highlight','black','skin','black','skin','skin','black','skin','pink','skin','pink','black','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','black','white','skin','white','skin','black','skin','skin','skin','black','black','black','highlight','black','black','black','black','highlight','black','black','black','skin','skin','skin','black','skin','white','skin','white','black','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','black','white','black','white','skin','skin','skin','black','highlight','pink','black','skin','skin','skin','skin','black','pink','highlight','black','highlight','highlight','highlight','skin','black','white','black','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','highlight','white','skin','skin','black','highlight','pink','highlight','pink','black','black','black','black','pink','highlight','pink','highlight','black','highlight','highlight','skin','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','highlight','highlight','skin','skin','black','black','highlight','highlight','pink','highlight','pink','pink','highlight','pink','highlight','highlight','black','black','highlight','highlight','skin','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','highlight','highlight','highlight','highlight','skin','skin','black','black','pink','highlight','highlight','pink','pink','highlight','highlight','pink','black','black','skin','highlight','highlight','skin','skin','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','highlight','skin','skin','skin','skin','black','black','skin','black','black','black','pink','pink','black','black','black','skin','black','black','skin','skin','skin','skin','black','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','skin','black','black','black','black','skin','black','black','skin','skin','skin','black','black','skin','skin','skin','black','black','skin','black','black','black','black','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','skin','skin','skin','skin','skin','skin','black','nothing','black','black','skin','skin','skin','skin','black','black','nothing','black','skin','highlight','skin','skin','skin','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','black','skin','skin','skin','skin','skin','black','nothing','nothing','nothing','nothing','black','black','black','black','nothing','nothing','nothing','nothing','black','highlight','skin','skin','skin','skin','black','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','skin','black','black','black','black','black','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','skin','black','black','black','black','black','highlight','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','skin','skin','skin','skin','skin','skin','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','skin','skin','skin','skin','skin','skin','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','skin','white','skin','white','skin','white','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','skin','white','skin','white','skin','white','skin','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','white','black','white','skin','white','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','white','skin','white','black','white','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','white','black','white','black','white','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','white','black','white','black','white','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','nothing','black','nothing','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','black','nothing','black','nothing','black','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing'],
         ['nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing','nothing']
         ];

       var a = 0;
       var b = 0;


       function setup() {

       createCanvas(920, 892);
background(120);

       noStroke();

     }

function draw() {



  gridArr();

  gridArr2();

  gridArr3();

gridArr4();

if (mouseIsPressed) {

textSize(10);
gridArr5();
gridArr6();

}

}





       function gridArr() {

         for (var i = 0; i < 40; i++) {
                 for (var j = 0; j < 42; j++) {
                   a = gridarr[i][j];
                       if (a === 0) {
                         fill(120);
                       }
                       else if (a === 1) {
                         fill(0);
                       }
                       else if (a === 2) {
                         fill(90);
                       }
                       else if (a === 3) {
                         fill(180);
                       }
                       else if (a === 4) {
                         fill(255,0,0);
                       }
                       else if (a === 5) {
                         fill(80,120,230);
                       }
                       else if (a === 6) {
                         fill(140,180,240);
                       }
                       else if (a === 7) {
                         fill(30,70,190);
                       }
                       else if (a === 8) {
                         fill(90,110,255);
                       }
                        else if (a==9) {
                         fill(220);
                       }

                   // typical way of mapping out a grid (counter * scale) + offset
                   // where counter is a var from the forloop
                   // scale is value that will term the size/position of each drawing
                   // offset is a relative movement to place
                   // the grid collection around on the canvas

                   rect((j * 10) + 15, (i * 10) + 15, 10, 10);
                 }
             }


       }

       function gridArr2() {

         for (var i = 0; i < 40; i++) {
                  for (var j = 0; j < 42; j++) {
                    b = gridarr2[i][j];
                        if (b === 'nothing') {
                          fill(120);
                        }
                        else if (b === 'black') {
                          fill(0);
                        }
                        else if (b === 'shadow') {
                          fill(90);
                        }
                        else if (b === 'skin') {
                          fill(180);
                        }
                        else if (b === 'eyes') {
                          fill(255,0,0);
                        }
                        else if (b === 'highlight') {
                          fill(210);
                        }
                        else if (b === 'white') {
                          fill(255);
                        }
                        else if (b === 'pink') {
                          fill(180,0,130);
                        }
                        else if (b === 'pearl') {
                          fill(240,140,140);
                        }
                        else if (b === 'pearl_highlight') {
                          fill(250,200,200);
                        }
                         else {
                          fill(175, 75, 0);
                        }

                    // typical way of mapping out a grid (counter * scale) + offset
                    // where counter is a var from the forloop
                    // scale is value that will term the size/position of each drawing
                    // offset is a relative movement to place
                    // the grid collection around on the canvas

                    rect((j * 10) + 15, (i * 10) + 475, 10, 10);
                  }
              }



       }
       function gridArr3() {

         for (var i = 0; i < 40; i++) {
                  for (var j = 0; j < 42; j++) {
                    b = gridarr2[i][j];
                        if (b === 'nothing') {
                          fill(120);
                        }
                        else if (b === 'black') {
                          fill(0);
                        }
                        else if (b === 'shadow') {
                          fill(90);
                        }
                        else if (b === 'skin') {
                          fill(255,200,200);
                        }
                        else if (b === 'eyes') {
                          fill(255,0,0);
                        }
                        else if (b === 'highlight') {
                          fill(255,230,230);
                        }
                        else if (b === 'white') {
                          fill(255);
                        }
                        else if (b === 'pink') {
                          fill(180,0,130);
                        }
                        else if (b === 'pearl') {
                          fill(240,140,140);
                        }
                        else if (b === 'pearl_highlight') {
                          fill(250,200,200);
                        }
                         else {
                          fill(175, 75, 0);
                        }

                    // typical way of mapping out a grid (counter * scale) + offset
                    // where counter is a var from the forloop
                    // scale is value that will term the size/position of each drawing
                    // offset is a relative movement to place
                    // the grid collection around on the canvas
                    push();
                    translate(475,0);
                    rect((j * 10) + 15, (i * 10) + 475, 10, 10);
                    pop();
                  }
              }



       }
       function gridArr4() {

         for (var i = 0; i < 40; i++) {
                 for (var j = 0; j < 42; j++) {
                   a = gridarr[i][j];
                       if (a === 0) {
                         fill(120);
                       }
                       else if (a === 1) {
                         fill(0);
                       }
                       else if (a === 2) {
                         fill(90);
                       }
                       else if (a === 3) {
                         fill(180);
                       }
                       else if (a === 4) {
                         fill(255,0,0);
                       }
                       else if (a === 5) {
                         fill(80,220,230);
                       }
                       else if (a === 6) {
                         fill(140,240,240);
                       }
                       else if (a === 7) {
                         fill(30,150,190);
                       }
                       else if (a === 8) {
                         fill(100,190,255);
                       }
                        else if (a==9) {
                         fill(220);
                       }

                   // typical way of mapping out a grid (counter * scale) + offset
                   // where counter is a var from the forloop
                   // scale is value that will term the size/position of each drawing
                   // offset is a relative movement to place
                   // the grid collection around on the canvas
                   push();
                   translate(475,0);
                   rect((j * 10) + 15, (i * 10) + 15, 10, 10);
                   pop();
                 }
             }


       }


       function gridArr5() {

         for (var i = 0; i < 40; i++) {
                  for (var j = 0; j < 42; j++) {
                    b = gridarr2[i][j];
                        if (b === 'nothing') {
                          fill(120);
                        }
                        else if (b === 'black') {
                          fill(0);
                        }
                        else if (b === 'shadow') {
                          fill(90);
                        }
                        else if (b === 'skin') {
                          fill(255,200,200);
                        }
                        else if (b === 'eyes') {
                          fill(255,0,0);
                        }
                        else if (b === 'highlight') {
                          fill(255,230,230);
                        }
                        else if (b === 'white') {
                          fill(255);
                        }
                        else if (b === 'pink') {
                          fill(180,0,130);
                        }
                        else if (b === 'pearl') {
                          fill(240,140,140);
                        }
                        else if (b === 'pearl_highlight') {
                          fill(250,200,200);
                        }
                         else {
                          fill(175, 75, 0);
                        }

                    // typical way of mapping out a grid (counter * scale) + offset
                    // where counter is a var from the forloop
                    // scale is value that will term the size/position of each drawing
                    // offset is a relative movement to place
                    // the grid collection around on the canvas
                    push();
                    translate(475,0);
                    text('Palkia', j*10+15, i*10+475);

                    pop();
                  }
              }



       }
       function gridArr6() {

         for (var i = 0; i < 40; i++) {
                 for (var j = 0; j < 42; j++) {
                   a = gridarr[i][j];
                       if (a === 0) {
                         fill(120);
                       }
                       else if (a === 1) {
                         fill(0);
                       }
                       else if (a === 2) {
                         fill(90);
                       }
                       else if (a === 3) {
                         fill(180);
                       }
                       else if (a === 4) {
                         fill(255,0,0);
                       }
                       else if (a === 5) {
                         fill(80,220,230);
                       }
                       else if (a === 6) {
                         fill(140,240,240);
                       }
                       else if (a === 7) {
                         fill(30,150,190);
                       }
                       else if (a === 8) {
                         fill(100,190,255);
                       }
                        else if (a==9) {
                         fill(220);
                       }

                   // typical way of mapping out a grid (counter * scale) + offset
                   // where counter is a var from the forloop
                   // scale is value that will term the size/position of each drawing
                   // offset is a relative movement to place
                   // the grid collection around on the canvas
                   push();
                   translate(475,0);
                   text('Dialga', j*10+15, i*10+15);
                   pop();
                 }
             }


       }
