class Ground{
   
    constructor(x,y,width,height){
      var opt = {
      isStatic:true    

    }
    this.body = Bodies.rectangle(x,y,width,height,opt)
    World.add(world,this.body)
    this.height = height;
    }
   display(){
       var pos =this.body.position;

    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    fill("red")
   }
}