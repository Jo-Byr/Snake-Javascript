var APPLES_X = []; //Lists of the abcisses of the apples
var APPLES_Y = []; //Lists of the ordinates of the apples
var apple_time = 4; //Counts the number of loops (of 200ms) without an apple spawning
var spawn = 0; //Variable allowing the spawn of an apple

function apples(){
    if (apple_time >= 10){ //Limitating the apple spawn rate at 1 every 2s at maximum
        pop = Math.floor(Math.random() * 20) //An apple has 1/20 to spawn every 200ms
        if (pop == 0){
            appleX = Math.floor(Math.random() * 25)*x; //Random coordinates
            appleY = Math.floor(Math.random() * 25)*x;
            
            i = 0;
            while (i< X.length && spawn == 0){ //Verifying the generated coordinates are not those of one of the squares of the snake
                if (!(X[i] == appleX && Y[i] == appleY)){
                    i += 1;
                }
                else{
                    spawn = 1;
                }
            }
            if (spawn == 0){
                k = 0;
                while (k < APPLES_X.length && spawn == 0){ //Verifying the generated coordinates are not those of one of the existing apples
                    if (!(APPLES_X[k] == appleX && APPLES_Y[k] == appleY)){
                        k += 1;
                    }
                    else{
                        spawn = 1;
                    }
                }
            }

            if (spawn == 0){ //If both the previous tests are negative
                apple_time = 0;
                APPLES_X.push(appleX)
                APPLES_Y.push(appleY)
                ctx.fillStyle = 'red';    //Creating a square at the new position
                ctx.beginPath();
                ctx.rect(appleX+x/4,appleY+x/4,x/2,x/2);
                ctx.fill();
                ctx.closePath();
            }
        }
        else{
            apple_time += 1;
        }
    }
    if (apple_time > 30){ //If no apple as spawned in the last 6 seconds, one spawns automatically
        appleX = Math.floor(Math.random() * 25)*x; //Random coordinates
        appleY = Math.floor(Math.random() * 25)*x;
        
        i = 0;
        while (i< X.length && spawn == 0){ //Verifying the generated coordinates are not those of one of the squares of the snake
            if (!(X[i] == appleX && Y[i] == appleY)){
                i += 1;
            }
            else{
                spawn = 1;
            }
        }
        if (spawn == 0){
            k = 0;
            while (k < APPLES_X.length && spawn == 0){ //Verifying the generated coordinates are not those of one of the existing apples
                if (!(APPLES_X[k] == appleX && APPLES_Y[k] == appleY)){
                    k += 1;
                }
                else{
                    spawn = 1;
                }
            }
        }

        if (spawn == 0){ //If both the previous tests are negative
            apple_time = 0;
            APPLES_X.push(appleX)
            APPLES_Y.push(appleY)
            ctx.fillStyle = 'red';    //Creating a square at the new position
            ctx.beginPath();
            ctx.rect(appleX+x/4,appleY+x/4,x/2,x/2);
            ctx.fill();
            ctx.closePath();
        }
    }
    else{
        apple_time += 1;
    }
}