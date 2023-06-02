const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d");
const tileSize = 60;

const tilemap = new TileMap(tileSize);

ALLSPRITES = [];

var playerx = 250;
var playery = 200;

const player = new Player(playerx, playery);

//ALLSPRITES.push(player.sprite)

var xpress = 0;
var ypress = 0;

var rightattack = false;
var leftattack = false;
var upattack = false;
var downattack = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event){
    if(event.keyCode === 68){
        xpress = player.speed;
    } else if(event.keyCode === 65){
        xpress = -player.speed;
    }
    if(event.keyCode === 83){
        ypress = player.speed;
    } else if(event.keyCode === 87){
        ypress = -player.speed;
    }
    breakme:{
        if(event.keyCode === 39){
            rightattack = true;
            break breakme;
        }  
        if(event.keyCode === 37){
            leftattack = true;
            break breakme;
        }
        if(event.keyCode === 40){
            downattack = true;
            break breakme;
        }  
        if(event.keyCode === 38){
            upattack = true;
            break breakme;
        }
    }

}
function keyUpHandler(event){
    if(event.keyCode === 39){
        rightattack = false;
    } else if(event.keyCode === 37){
        leftattack = false;
    }
    if(event.keyCode === 40){
        downattack = false;
    } else if(event.keyCode === 38){
        upattack = false;
    }

    if(event.keyCode === 68){
        xpress = 0;
    } else if(event.keyCode === 65){
        xpress = 0;
    }
    if(event.keyCode === 83){
        ypress = 0;
    } else if(event.keyCode === 87){
        ypress = 0;
    }
}

function checkWallCollision(x, y, xmove, ymove, obj){
    if (obj.x + obj.sprite.naturalWidth + xmove > x && obj.x + xmove < x + tileSize && obj.y + obj.sprite.naturalHeight + ymove > y && obj.y + ymove < y + tileSize){
        return true;
    }
    else{
        return false;
    }
}
checkWallCollision(0, 60, 5, 0, player);
function gameLoop(){

    tilemap.draw(canvas, ctx);

    player.update(xpress, ypress, rightattack, leftattack, upattack, downattack)
}

setInterval(gameLoop, 1000/ 60);