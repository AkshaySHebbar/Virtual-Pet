var dog,happyDog,database,foodS,foodStock;

function preload()
{
dog.loadImage("images/dogImg.png");
happydog.loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  
  dog=createSprite(250,250);
  
}


function draw() {  
  background(46, 139, 87);

  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(dogHappy);
  }

}
function readStock(data){
  foodS=data.val();
}

function writestock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


