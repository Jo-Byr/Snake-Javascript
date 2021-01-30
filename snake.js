const H = window.screen.height;
const x = Math.floor((2/3)*H/25); //x represents the width of one of the elementary squares composing the snake, we want the canvas to be 25 squares wide
const h = 25*x;
var X = [(h+x)/2,(h-x)/2];    //Axis of the top left corner of the square
var Y = [(h-x)/2,(h-x)/2];    //Ordinate of the top left corner of the square
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
    ctx.rect((h+x)/2,(h-x)/2,x,x);
    ctx.fill();
    ctx.closePath();
}

var DIR = true;

function handleInputs(){
    document.addEventListener('keydown', (event) => {
        if (event.key == "ArrowRight"){
            DIR = "right";
        }
        else if (event.key == "ArrowLeft"){
            DIR = "left";
        }
        else if (event.key == "ArrowUp"){
            DIR = "up";
        }
        else if (event.key == "ArrowDown"){
            DIR = "down";
        }
    })
}

function move(){
    console.log(X,Y)
    if (X[0]+x<h && DIR == "right"){
        ctx.fillStyle = 'black';
        ctx.fillRect(X[X.length-1], X[X.length-1], x, x);

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.fillRect(X[0]+x,Y[0],x,x);

        for (k=0;k<X.length;k++){
            X[k] = X[k]+x;
        }
    }
    else if (X[0]>0 && DIR == "left"){
        ctx.fillStyle = 'black';
        ctx.fillRect(X[X.length-1], X[X.length-1], x, x);

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.fillRect(X[0]-x,Y[0],x,x);

        for (k=0;k<X.length;k++){
            X[k] = X[k]-x;
        }
    }
    else if (Y[0]>0 && DIR == "up"){
        ctx.fillStyle = 'black';
        ctx.fillRect(X[X.length-1], X[X.length-1], x, x);

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.fillRect(X[0],Y[0]-x,x,x);

        for (k=0;k<Y.length;k++){
            Y[k] = Y[k]-x;
        }
    }
    else if (Y[0]+x<h && DIR == "down"){
        ctx.fillStyle = 'black';
        ctx.fillRect(X[X.length-1], X[X.length-1], x, x);

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.fillRect(X[0],Y[0]+x,x,x);

        for (k=0;k<Y.length;k++){
            Y[k] = Y[k]+x;
        }
    }
    setTimeout(move, 500);
}