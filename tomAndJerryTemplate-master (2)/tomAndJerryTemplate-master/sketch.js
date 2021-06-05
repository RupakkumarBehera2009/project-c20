var backgroundImage;
var cat;

function preload() {
    //load the images here
    backgroundImage = loadImage(" images/garden.png");
    catImage1 = loadAnimation(" images/cat1.png");
    mouseImage1 = loadAnimation(" images/mouse1.png");
    catImage2 = loadAnimation(" images/cat2.png","images/cat3.png");
    mouseImage2 = loadAnimation(" images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(960,700);
    cat.addAnimation("cat1",catImage1)
    cat.scale=0.2
    mouse=createSprite(90,700);
    mouse.addAnimation("mouse1",mouseImage1)
    mouse.scale=0.2

    

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("cat1",catImage1);
        cat.changeAnimation("cat1"); 
        cat.velocityX=0
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if (keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTesing",mouseImage2);
    mouse.changeAnimation("mouseTesing");
    mouse.frameDelay = 25;
    cat.addAnimation("cat2",catImage2);
    cat.changeAnimation("cat2");
    cat.velocityX=-2
}
}

