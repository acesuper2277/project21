var canvas,colourfulBg;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    colourfulBg = loadImage("colurful.jpg");

    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(80,580,200,30);
    block1.shapeColor = "blue";



    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";



    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";



    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "green";



    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 7;
    ball.velocityX = 7;
    //write code to add velocityX and velocityY

}

function draw() {
    background(colourfulBg);
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }


    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();

    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
