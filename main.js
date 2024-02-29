var canvas = new fabric.Canvas('myCanvas');
playerX = 10;
playerY = 10;
alturaBloco = 30;
larguraBloco = 30;

var playerObject = "";
var blockImageObject = "";




function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });


}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        var blockImageObject = Img;
        blockImageObject.scaleToWidth(larguraBloco);
        blockImageObject.scaleToHeight(alturaBloco);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });

        canvas.add(blockImageObject);
    });
}


window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (e.shiftKey == true && keyPressed == '80') {
        larguraBloco = larguraBloco + 10
        alturaBloco = alturaBloco + 10
        document.getElementById("currentWidth").innerHTML = larguraBloco;
        document.getElementById("currentHeight").innerHTML = alturaBloco;
    }




    if (e.shiftKey && keyPressed == '77') {
        larguraBloco = larguraBloco - 10
        alturaBloco = alturaBloco - 10
        document.getElementById("currentWidth").innerHTML = larguraBloco;
        document.getElementById("currentHeight").innerHTML = alturaBloco;
    }

    if (keyPressed == '87') {
        up();
    }

    if (keyPressed == '83') {
        down();
    };

    if (keyPressed == '65') {
        left();
    }

    if (keyPressed == '68') {
        right();
    }

    if (keyPressed == '1') {
        newImage('wall.jpg');
    }

    if (keyPressed == '2') {
        newImage('ground.jpg');
    }

    if (keyPressed == '3') {
        newImage('light_green.jpg');
    }

    if (keyPressed == '4') {
        newImage('trunk.jpg');
    }

    if (keyPressed == '5') {
        newImage('roof.jpg');
    }

    if (keyPressed == '6') {
        newImage('yellow_wall.jpg');
    }

    if (keyPressed == '7') {
        newImage('dark_green.jpg');
    }

    if (keyPressed == '8') {
        newImage('unique.jpg');
    }

    if (keyPressed == '9') {
        newImage('cloud.jpg');
    }
}


function up() {
    if (playerY >= 0) {
        playerY = playerY - alturaBloco;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down() {
    if (playerY <= 500) {
        playerY = playerY + alturaBloco;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left() {
    if (playerX >= 0) {
        playerX = playerX - larguraBloco;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right() {
    if (playerX <= 850) {
        playerX = playerX + larguraBloco;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
