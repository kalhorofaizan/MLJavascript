function setup() {

    createCanvas(400, 400);
    this.pointx = floor(random(0, 19)) * 20;
    this.pointy = floor(random(0, 19)) * 20;
    console.log(this.pointx);
    document.getElementById("points").innerHTML = this.points;
}


this.positionx = 0;
this.positiony = 0;
this.player = [];
this.pointx = 40;
this.pointy = 40;
this.points = 0;
this.direction="";

function draw() {
    background(0);
    fill("#527cfa");
    square(this.pointx, this.pointy, 20);
    fill(254);
    square(positionx, positiony, 20);
    this.player.map(function (po) {
        square(po[0], po[1], 20);
    });
    if(this.positionx==-20 || this.positionx==400 || this.positiony==-20 || this.positiony==400){
        gameover();
    }
    if (positionx == pointx && positiony == pointy) {
        this.points = this.points + 1;
        this.pointx = floor(random(0, 19)) * 20;
        this.pointy = floor(random(0, 19)) * 20;

        document.getElementById("points").innerHTML = this.points;
        player.push([positionx, positiony]);
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
            if(this.direction!="right"){
                this.direction="left";
            }
           
    } else if (keyCode === RIGHT_ARROW) {
        if(this.direction!="left"){
            this.direction="right";
        }
       
    


    } else if (keyCode === UP_ARROW) {
        if(this.direction!="down"){
            this.direction="up";
        }

    } else if (keyCode === DOWN_ARROW) {
        if(this.direction!="up"){
            this.direction="down";
        }
       

    }

}


setInterval(function ( ){
    snakebody(this.positionx,this.positiony);
    move(this.direction);
    player.forEach(function (part){
        // console.log(part);
        if(part[0]==this.positionx && part[1]==this.positiony ){
           gameover();
        }
        
    });
   
},500);


function move(dd){
    if(dd=="left"){
        this.positionx=this.positionx-20;
    }else if(dd=="right"){
        this.positionx=this.positionx+20;
    }
    else if(dd=="up"){

        this.positiony=this.positiony-20;
    }
    else if(dd=="down"){
        this.positiony=this.positiony+20;
    }
}



function snakebody(x, y) {
    
    for (i = 1; i <= points; i++) {
        x1 = player[i - 1][0];
        y1 = player[i - 1][1];
        player[i - 1] = [x, y];
        x = x1;
        y = y1;
    }

}


function gameover() {
    this.positionx = 0;
    this.positiony = 0;
    this.player = [];
    this.points = 0;
    this.direction="";
    document.getElementById("points").innerHTML = this.points;
}