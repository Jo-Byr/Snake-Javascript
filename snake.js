const H = window.screen.height;
const x = Math.floor((2/3)*H/25); //x represents the width of one of the elementary squares composing the snake, we want the canvas to be 25 squares wide
const h = 25*x;
var X = [(h+x)/2,(h-x)/2,(h-3*x)/2];    //Axis of the top left corner of the square
var Y = [(h-x)/2,(h-x)/2,(h-x)/2];    //Ordinate of the top left corner of the square
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
    //ctx.beginPath();    //First elementary square
    ctx.fillRect((h-3*x)/2,(h-x)/2,x,x);
    ctx.fillRect((h-x)/2,(h-x)/2,x,x);
    ctx.fillRect((h+x)/2,(h-x)/2,x,x);
    //ctx.fill();
    //ctx.closePath();
}

var DIR = true;
var PRESSED = false;

function handleInputs(){
    document.addEventListener('keydown', (event) => {
        if (event.key == "ArrowRight" && DIR != "left"){
            DIR = "right";
        }
        else if (event.key == "ArrowLeft" && DIR != "right"){
            DIR = "left";
        }
        else if (event.key == "ArrowUp" && DIR != "down"){
            DIR = "up";
        }
        else if (event.key == "ArrowDown" && DIR != "up"){
            DIR = "down";
        }
        if (PRESSED == false){
            move()
            PRESSED = true
        }
    })
}

function move(){
    if (X[0]+x<h && DIR == "right"){
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0]+x,Y[0],x,x);
        ctx.fill();
        ctx.closePath();

        for (k=X.length-1;k>0;k--){
            X[k] = X[k-1];
            Y[k] = Y[k-1];
        }
        X[0] += x;
    }
    else if (X[0]>0 && DIR == "left"){
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0]-x,Y[0],x,x);
        ctx.fill();
        ctx.closePath();

        for (k=X.length-1;k>0;k--){
            X[k] = X[k-1];
            Y[k] = Y[k-1];
        }
        X[0] -= x;
    }
    else if (Y[0]>0 && DIR == "up"){
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0],Y[0]-x,x,x);
        ctx.fill();
        ctx.closePath();

        for (k=X.length-1;k>0;k--){
            X[k] = X[k-1];
            Y[k] = Y[k-1];
        }
        Y[0] -= x;
    }
    else if (Y[0]+x<h && DIR == "down"){
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0],Y[0]+x,x,x);
        ctx.fill();
        ctx.closePath();

        for (k=X.length-1;k>0;k--){
            X[k] = X[k-1];
            Y[k] = Y[k-1];
        }
        Y[0] += x;
    }
    setTimeout(move, 500);
}