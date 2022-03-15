var gamestate = "play"
var space, space_image
var rocket, rocket_image
var meteor, meteor_image, meteorsGroup
var som


function preload(){
space_image = loadImage("espaço.png");
rocket_image = loadImage("rocket.png");
meteor_image = loadImage("Meteoro.png");
som = loadSound("Sound.mp3");


}

function setup() {
 createCanvas(600,600);
 space = createSprite(300,300,50,50);
 space.velocityY = 4; 
 space.addImage(space_image);
 

 rocket = createSprite(300,300,20,20);
 rocket.scale = 0.2;
 rocket.addImage(rocket_image);
 

 meteorsGroup = new Group();

 som.loop();

 
}

function draw() {
  background(0);
    
   
     if(gamestate == "end"){
        fill("red");
        textSize(26);
        text ("Você perdeu ", 220,300); 
   }
      if(gamestate == "play"){
      


          if(space.y > 400 ){
          space.y = height/2;
        }
      if(keyDown("right")){
          rocket.x = rocket.x + 3;
      }
      if(keyDown("left")){
          rocket.x = rocket.x - 3;
      }
      if(meteorsGroup.isTouching(rocket)){
          
          gamestate = "end";
          
          rocket.destroy();
          space.destroy();
          meteor.destroy();

         
    }
     
    
    spawMeteor();
  }



 
    
    drawSprites();
}

function spawMeteor(){

if(frameCount % 60 == 0 ){
  
  meteor = createSprite(Math.round(random(200,400)),-50,200);
  meteor.velocityY = 5;
  meteor.lifetime = 600;
  meteor.addImage(meteor_image);
  meteor.scale = 0.1;
  meteorsGroup.add(meteor);


}

}