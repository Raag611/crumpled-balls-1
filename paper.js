class paper{
constructor(x,y,r){
var opt={
isStatic : false,
restitution:0.3,
friction:0.5,
density:1.2


} 
this.body=Bodies.circle(x,y,r,opt)
World.add(world,this.body)
this.radius = r


}
display(){
var pos =this.body.position;
fill("red")
ellipseMode(CENTER)

ellipse(pos.x,pos.y,this.radius*2,this.radius*2)

}
}