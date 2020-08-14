class Player{
    constructor(){

        this.spot=0;
    }
    roll(){
        var rand=Math.round(random(1,6));
        this.spot=this.spot+rand;
    }
    display(tiles){
        //console.log(this.spot);
      // console.log(tiles[this.spot]);
       var currentTile=tiles[this.spot];
      var pose= currentTile.getCentre();
      console.log(pose);
      ellipse(pose[0],pose[1],15,15);

    }
}