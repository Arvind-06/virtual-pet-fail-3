var dog,sadDog,happyDog,database,foodstock,foods;
var feed,addfood;
var foodObj;
var feedTime,lastFed,currentTime;



function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1200,500);
  database = firebase.database();
  foodObj = new Food();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.3;

  feed = createButton("FEED THE DOG");
  feed.position(950,95);
  feed.mousePressed(feedDog);

  addfood = createButton("ADD FOOD TO BASKET");
  addfood.position(1065,95);
  addfood.mousePressed(addfoods);

}

function draw(){
  foodObj.display();
  dog.display();

  foodObj.getFoodStock();
  
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
lastFed=data.val();
});

  

fill(255,255,254);
textSize(15);
if(lastFed>=12){
if(" LastFeed:"+lastFed%12 +"PM",350,30);
}else if(lastFed==0){
 text("Last Feed:12 AM",350,30);
}else{
  text("Last Feed:"+lastFed+"AM",350,30);
}


  

  drawSprites();

}

function feedDog(){
  dog.changeImage(happyDog);
  foodObj.deductFood();
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref("/").update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour(),
  })

  

}

function addfoods(){
  foodObj.addFood();    
  foodObj.updateFoodStock();
}













