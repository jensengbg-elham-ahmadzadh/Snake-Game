/* 
// creating canvas on js

function canvas() {
    createCanvas(600, 600);

}
function drawCanvas() {
    background(51); // short from rgb(51, 51, 51); the resut we get a gray canvas with the size of 600 X 600
}

*/

// VARIABLES and DOMS TAGS

const canvas = document.getElementById('canvas'),
    playButton = document.getElementById('play'),
    time = document.getElementById('time'),
    left = document.getElementById('left'),
    right = document.getElementById('right'),
    up = document.getElementById('up'),
    down = document.getElementById('down'),
    // return a two dimensional drawing context
    ctx = canvas.getContext("2d"),
    scale = 10,   // THE scale OF snake and apple
    rows = canvas.height / scale,
    columns = canvas.width / scale;
    


let gameScore = document.getElementById('score');




var snake;

//ctx.font = "30px Ariel" ;                                           // to make sure my browser supports ctx
//ctx.strokeText("Hello world", 10, 50);



//*************************************************

// SETUP FUNCTION

//************************************************/


(function setup() {   // Local Function


setTimeout(timer,1000);  // after 1 sec timer starts counting

//THE ARRAY CONSTRUCTOR CREATES NEW ARRAYS DEPENDING ON ARGUMENTS IT RECEIVES
   
snake = new snakeDraw();
    
    fruit = new fruit();

    fruit.pickLocation();

    //console.log(fruit); // we gonna use the x and y of the fruit inside our codes
   


    window.setInterval(() => {
       
        //clear specified pixels within a given rectangle otherwise it rewrites a rectangle.
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fruit.draw();
        snake.upDate();
        snake.draw();
       
        //***************************************** */

        // The snake should become longer after eating the fruit so we need if condition here.

        //**************************************** */
        if (snake.eat(fruit) && score < 8  ) {
          
            //console.log('EATING'); // when the snake hits the fruit it prints eating 

            //************************************* */
            //after eating the fruit it has to Change the location

            fruit.pickLocation();
             scoreCounting();
             checkScore();
            //*************************************** */

          
        }

        snake.selfCollision();

    }, 200); // speed the snake while moving

  
}());

//*************************************************

//play button
playButton.addEventListener('click',restart);
   