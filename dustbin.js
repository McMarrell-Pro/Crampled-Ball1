class Dustbin{
constructor(x,y,width,height){
var options = {restitution:1,isStatic:false,density:1}
this.body = Bodies.rectangle(x,y,width,height);
this.width = width;
this.height = height;
World.add(world,this.body);
}
display(){
    fill("white");
    rectMode(CENTER);
    translate(this.body.position.x,this.body.position.y,this.body.position.width,this.body.position.height);
    
}


}