import TileMap from "./Tilemap.js";
import Player from "./Player.js";

const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d");
const tileSize = 60;

const tilemap = new TileMap(tileSize);

var playerx = 150;
var playery = 150;

const player = new Player(playerx, playery, ctx, tileSize, tilemap);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event){
    if(event.keyCode === 39){
        rightPressed = true;
    } else if(event.keyCode === 37){
        leftPressed = true;
    }
    if(event.keyCode === 40){
        downPressed = true;
    } else if(event.keyCode === 38){
        upPressed = true;
    }
}
function keyUpHandler(event){
    if(event.keyCode === 39){
        rightPressed = false;
    } else if(event.keyCode === 37){
        leftPressed = false;
    }
    if(event.keyCode === 40){
        downPressed = false;
    } else if(event.keyCode === 38){
        upPressed = false;
    }
}

function gameLoop(){
    tilemap.draw(canvas, ctx);

    player.update(rightPressed,leftPressed,downPressed,upPressed)
}

setInterval(gameLoop, 1000/ 60);