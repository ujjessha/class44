class Tile{
    constructor(x,y,resolution,index,next){
this.x=x;
this.y=y;
this.resolution=resolution;
this.next=next;
//this.color=random(200,255);
this.index=index;
if(this.index%2===0){
    this.color=200;

}
else{
 this.color=100;
}
    }
    show(){
        fill(this.color);
        rect(this.x,this.y,this.resolution,this.resolution);
        textSize(30);
       fill(255);
     //text(this.index+"->"+this.next,this.x+this.resolution/2,this.y+this.resolution/2);


    }
    getCentre(){
        var centreX=this.x+this.resolution/2;
        var centreY=this.y+this.resolution/2;
        return [centreX,centreY];
    }
    
}