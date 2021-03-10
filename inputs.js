function handleInputs(){    //Function called onload, bind the keys
    document.addEventListener('keydown', (event) => {
        if (event.key == "ArrowRight" && DIR != "left" && oldDIR != "left"){
            DIR = "right";
        }
        else if (event.key == "ArrowLeft" && DIR != "right" && oldDIR != "right"){
            DIR = "left";
        }
        else if (event.key == "ArrowUp" && DIR != "down" && oldDIR != "down"){
            DIR = "up";
        }
        else if (event.key == "ArrowDown" && DIR != "up" && oldDIR != "up"){
            DIR = "down";
        }
        if (PRESSED == false && ["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(event.key)){
            move()
            PRESSED = true
        }
    })
}