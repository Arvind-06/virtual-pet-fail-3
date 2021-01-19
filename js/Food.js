class Food {
  constructor(){
  this.image = loadImage("images/Milk.png");
this.lastFed;
this.foodstock = 30;
 }
 getFoodStock(){
   return this.foodstock;
 }
 updateFoodStock(){
  database.ref('/').update({
    Food:this.foodstock,
  })
 }

 deductFood(){
   if(this.foodstock>=1){
     this.foodstock=this.foodstock-1;
   }
 }
addFood(){
  if(this.foodstock<=29){
    this.foodstock++;
  }
}
display(){
  background(45,140,90);

  var x=80,y=100;

  imageMode(CENTER);

  if(this.foodstock!=0){
    for(var i=0;i<this.foodstock;i++){
      if(i%10===0){
        x=80;
        y=y+50
      }
      image(this.image,x,y,50,50);
      x+=30;
    }
  }
}
}



























































