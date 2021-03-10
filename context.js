const H = window.screen.height;
const x = Math.floor((2/3)*H/25); //x represents the width of one of the elementary squares composing the snake, we want the canvas to be 25 squares wide
const h = 25*x;
var X = [(h+x)/2,(h-x)/2,(h-3*x)/2];    //Axis of the top left corner of the squares
var Y = [(h-x)/2,(h-x)/2,(h-x)/2];    //Ordinate of the top left corner of the squares
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

    ctx.fillStyle = 'white';    //Creating the squares
    ctx.fillRect((h-3*x)/2,(h-x)/2,x,x);
    ctx.fillRect((h-x)/2,(h-x)/2,x,x);

    ctx.fillStyle = "grey"
    ctx.fillRect((h+x)/2,(h-x)/2,x,x);
}

var oldDIR = true;
var DIR = true;
var PRESSED = false;
var LOST = false;