const H = window.screen.height;
const x = Math.floor((2/3)*H/25); //x represents the width of one of the elementary squares composing the snake, we want the canvas to be 25 squares wide
const h = 25*x;
var X = [(h-x)/2];    //Axis of the top left corner of the square
var Y = [(h-x)/2];    //Ordinate of the top left corner of the square
cnv = document.getElementById("Canvas")

ctx = cnv.getContext("2d");

function createCanvas(){ //Changing the canvas size to what we want
    cnv.height = h;
    cnv.width = h;
    
    ctx.fillStyle = 'black';    //Black background
    ctx.beginPath();
    ctx.rect(0,0,h,h);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = 'white';    
    ctx.beginPath();    //First elementary square
    ctx.rect((h-x)/2,(h-x)/2,x,x);
    ctx.fill();
    ctx.closePath();
}

var RIGHT = false;
var LEFT = false;
var UP = false;
var DOWN = false;

function handleInputs(){
    document.addEventListener('keydown', (event) => {
        if (event.key == "ArrowRight"){
            if (RIGHT == false){
                RIGHT = true;
                right();
            }
        }
        if (event.key == "ArrowLeft"){
            if (LEFT == false){
                LEFT = true;
                left();
            }
        }
        if (event.key == "ArrowUp"){
            if (UP == false){
                UP = true;
                up();
            }
        }
        if (event.key == "ArrowDown"){
            if (DOWN == false){
                DOWN = true;
                down();
            }
        }
    })
}

function handleOutputs(){
    document.addEventListener('keyup', (event) => {
        if (event.key == "ArrowRight"){
            if (RIGHT == true){
                RIGHT = false;
            }
        }
        if (event.key == "ArrowLeft"){
            if (LEFT == true){
                LEFT = false;
            }
        }
        if (event.key == "ArrowUp"){
            if (UP == true){
                UP = false;
            }
        }
        if (event.key == "ArrowDown"){
            if (DOWN == true){
                DOWN = false;
            }
        }
    })
}

function right(){
    if (X[0]+x<h && RIGHT == true){
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X,Y,x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0]+x,Y[0],x,x);
        ctx.fill();
        ctx.closePath();

        for (k=0;k<X.length;k++){
            X[k] = X[k]+x;
        }
    }
    setTimeout(right, 500);
}

function left(){
    if (X[0]>0 && LEFT == true){
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X,Y,x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0]-x,Y[0],x,x);
        ctx.fill();
        ctx.closePath();

        for (k=0;k<X.length;k++){
            X[k] = X[k]-x;
        }
    }
    setTimeout(left, 500);
}


function up(){
    if (Y[0]>0 && UP == true){
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[0],Y[0],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0],Y[0]-x,x,x);
        ctx.fill();
        ctx.closePath();

        for (k=0;k<Y.length;k++){
            Y[k] = Y[k]-x;
        }
    }
    setTimeout(up, 500);
}

function down(){
    if (Y[0]+x<h && DOWN == true){
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[0],Y[0],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0],Y[0]+x,x,x);
        ctx.fill();
        ctx.closePath();

        for (k=0;k<Y.length;k++){
            Y[k] = Y[k]+x;
        }
    }
    setTimeout(down, 500);
}