function move(){    //Function allowing the moves, called every 0.2s and change the direction according to the variable DIR
    if (X.length == 0){
        LOST = true;
    }
    else if (X[0]+x<h && DIR == "right"){ //If heading right without touching the right side with the head
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0],Y[0],x,x);
        ctx.fill();
        ctx.closePath();
        
        ctx.fillStyle = 'grey';    //Creating a square at the new position
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
    else if (X[0]+x>=h && DIR == "right"){ //If heading right touching the right side with the head
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();
        X.pop();
        Y.pop();
    }
    else if (X[0]>0 && DIR == "left"){ //If heading left without touching the left side with the head
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0],Y[0],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'grey';    //Creating a square at the new position
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
    else if (X[0]<=0 && DIR == "left"){ //If heading left touching the left side with the head
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        X.pop();
        Y.pop();
    }
    else if (Y[0]>0 && DIR == "up"){ //If heading up without touching the up side with the head
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0],Y[0],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'grey';    //Creating a square at the new position
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
    else if (Y[0]<=0 && DIR == "up"){ //If heading up touching the up side with the head
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        X.pop();
        Y.pop();
    }
    else if (Y[0]+x<h && DIR == "down"){ //If heading down without touching the down side with the head
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'white';    //Creating a square at the new position
        ctx.beginPath();
        ctx.rect(X[0],Y[0],x,x);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = 'grey';    //Creating a square at the new position
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
    else if (Y[0]+x>=h && DIR == "down"){ //If heading down touching the down side with the head
        ctx.fillStyle = 'black';    //Deleting ancient square
        ctx.beginPath();
        ctx.rect(X[X.length-1],Y[X.length-1],x,x);
        ctx.fill();
        ctx.closePath();

        X.pop();
        Y.pop();
    }

    
    if (X.slice(1,X.length).includes(X[0])){ // If a square of the square of the snake, has the same abciss as the head
        k = 1;
        while (!(Y[k] == Y[0] && X[k] == X[0]) && k<X.length){ //We search if it also has the same ordinate
            k += 1;
        }
        if (k < X.length - 1){ //If so, we delete, visually and in the lists of abcisses and ordinates, the square after the overlapped square
            for (i = k+1;i<X.length;i++){
                ctx.fillStyle = "black";
                ctx.fillRect(X[i],Y[i],x,x)
            }
            X.splice(k, X.length - k)
            Y.splice(k, Y.length - k)
        }
    }

    if (APPLES_X.includes(X[0]) && APPLES_Y.includes(Y[0])){ //If an apple is eaten, we get rid of its coordinates
        for (k=0;k<APPLES_X.length;k++){
            if (X[0] == APPLES_X[k] && Y[0] == APPLES_Y[k]){
                APPLES_X.splice(k,1);
                APPLES_Y.splice(k,1);
            }
        }
        l = X.length;
        if (X.length>1){ //Tests to decide where the new square is created for a snake longer than 1 square
            if (X[l-2] == X[l-1] + x){ //If the last square is on the left of the precedent
                if (X[l-1] != 0){ //Without touching the left side
                    ctx.fillStyle = 'white';    
                    ctx.beginPath();
                    ctx.rect(X[l-1]-x,Y[l-1],x,x);
                    ctx.fill();
                    ctx.closePath();
                    X.push(X[l-1]-x);
                    Y.push(Y[l-1])
                }
                else{ //If the last square touches the left side
                    if (Y[l-1]==0){ //If the last square is in the top left corner
                        ctx.fillStyle = 'white';    
                        ctx.beginPath();
                        ctx.rect(X[l-1],Y[l-1]+x,x,x);
                        ctx.fill();
                        ctx.closePath();
                        X.push(X[l-1]);
                        Y.push(Y[l-1]+x)
                    }
                    else{
                        ctx.fillStyle = 'white'; 
                        ctx.beginPath();
                        ctx.rect(X[l-1],Y[l-1]-x,x,x);
                        ctx.fill();
                        ctx.closePath();
                        X.push(X[l-1]);
                        Y.push(Y[l-1]-x)
                    }
                }
            }
            else if (X[l-2] == X[l-1] - x){ //If the last square is on the right of the precedent
                if (X[l-1] + x != h){ //Without touching the right side
                    ctx.fillStyle = 'white';    
                    ctx.beginPath();
                    ctx.rect(X[l-1]+x,Y[l-1],x,x);
                    ctx.fill();
                    ctx.closePath();
                    X.push(X[l-1]+x);
                    Y.push(Y[l-1])
                }
                else{ //If the last square touches the right side
                    if (Y[l-1]==0){ //If the last square is in the top right corner
                        ctx.fillStyle = 'white';    
                        ctx.beginPath();
                        ctx.rect(X[l-1],Y[l-1]+x,x,x);
                        ctx.fill();
                        ctx.closePath();
                        X.push(X[l-1]);
                        Y.push(Y[l-1]+x)
                    }
                    else{
                        ctx.fillStyle = 'white'; 
                        ctx.beginPath();
                        ctx.rect(X[l-1],Y[l-1]-x,x,x);
                        ctx.fill();
                        ctx.closePath();
                        X.push(X[l-1]);
                        Y.push(Y[l-1]-x)
                    }
                }
            }
            else if (Y[l-2] == Y[l-1] - x){ //If the last square is above the precedent
                if (Y[l-1] + x != h){ //Without touching the bottom side
                    ctx.fillStyle = 'white';    
                    ctx.beginPath();
                    ctx.rect(X[l-1],Y[l-1]+x,x,x);
                    ctx.fill();
                    ctx.closePath();
                    X.push(X[l-1]);
                    Y.push(Y[l-1]+x)
                }
                else{ //If the last square touches the bottom side
                    if (X[l-1]==0){ //If the last square is in the bottom left corner
                        ctx.fillStyle = 'white';    
                        ctx.beginPath();
                        ctx.rect(X[l-1]+x,Y[l-1],x,x);
                        ctx.fill();
                        ctx.closePath();
                        X.push(X[l-1]+x);
                        Y.push(Y[l-1])
                    }
                    else{
                        ctx.fillStyle = 'white'; 
                        ctx.beginPath();
                        ctx.rect(X[l-1]-x,Y[l-1],x,x);
                        ctx.fill();
                        ctx.closePath();
                        X.push(X[l-1]-x);
                        Y.push(Y[l-1])
                    }
                }
            }
            else if (Y[l-2] == Y[l-1] + x){ //If the last square is under the precedent
                if (Y[l-1] != 0){ //Without touching the top side
                    ctx.fillStyle = 'white';    
                    ctx.beginPath();
                    ctx.rect(X[l-1],Y[l-1]-x,x,x);
                    ctx.fill();
                    ctx.closePath();
                    X.push(X[l-1]);
                    Y.push(Y[l-1]-x)
                }
                else{ //If the last square touches the top side
                    if (X[l-1]==0){ //If the last square is in the top left corner
                        ctx.fillStyle = 'white';    
                        ctx.beginPath();
                        ctx.rect(X[l-1]+x,Y[l-1],x,x);
                        ctx.fill();
                        ctx.closePath();
                        X.push(X[l-1]+x);
                        Y.push(Y[l-1])
                    }
                    else{
                        ctx.fillStyle = 'white'; 
                        ctx.beginPath();
                        ctx.rect(X[l-1]-x,Y[l-1],x,x);
                        ctx.fill();
                        ctx.closePath();
                        X.push(X[l-1]-x);
                        Y.push(Y[l-1])
                    }
                }
            }
        }
    }
    oldDIR = DIR;
    if (LOST == false){
        apples()
        setTimeout(move, 200);
    }
}