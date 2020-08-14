var tiles=[];
var player;

function setup() {
  createCanvas(400,400);
  var resolution=40;
  var rows=height/resolution;
  var columns=width/resolution;
  var direction=1;
  var x=0;
  var y=(rows-1)*resolution;


   for(var i=0;i<rows*columns;i++){
    var tile=new Tile(x,y,resolution,i,i+1);
    tiles.push(tile);
    x=x+resolution*direction
    //console.log(tile);
    if(x>=width|| x<0){
      direction=direction*(-1);
      y=y-resolution;
      x=x+resolution*direction;
    }
  }
  player=new Player();
  
}

function draw() {
  background(255,255,255);  
 
  for(var tile of tiles){
    tile.show();
  }
  player.roll();
  player.display(tiles);
 // console.log(tiles);
}