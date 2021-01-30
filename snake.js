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

function move(){
    t1 = 0;
    document.addEventListener('keydown', (event) => {
        t2 = Date.now();
        if (t2 - t1 > 1000){    //Limitation to 1 move per second 
            t1 = Date.now();

            if (event.key == "ArrowRight" && X[0]+x<h){
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

            if (event.key == "ArrowLeft" && X[0]>0){
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

            if (event.key == "ArrowUp" && Y[0]>0){
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

            if (event.key == "ArrowDown" && Y[0]+x<h){
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
        }
    })
}