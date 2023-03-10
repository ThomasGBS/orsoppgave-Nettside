export default class Player{
    constructor(x = 0, y = 0, ctx, tileSize, tileMap){
        this.x = x;
        this.y = y;
        this.sprite = new Image(60,60)//`Game/Assets/Player.png`;
        this.sprite.src = `Game/Assets/Player.png`

        this.ctx = ctx;
        this.tileSize = tileSize;
        this.tileMap = tileMap
    }

    update(right,left,down,up){
        var input = [right,left,down,up];
        this.#move(input);
        this.ctx.drawImage(this.sprite, this.x, this.y, this.sprite.naturalWidth, this.sprite.naturalHeight);
    }

    #checkWallCollision(x, y){
        if (this.x + this.sprite.naturalWidth > x && this.x < x + this.tileSize && this.y + this.sprite.naturalHeight < y && this.y < y + this.tileSize){
            return true;
        }
        else{
            return false;
        }
    }

    #move(input){
        if(input[0] == true){
            var busy = false
            for (let row = 0; row < this.tileMap.map.length; row++) {
                for (let column = 0; column < this.tileMap.map[row].length; column++) {
                    if(this.#checkWallCollision(this.tileSize*(column -1), this.tileSize*(row -1))){
                        busy = true
                        console.log("busy")
                    }
                }
            }
            if(busy == false){
                this.x += 20;
            }
        }
        else if(input[1] == true){
            var busy = false
            for (let row = 0; row < this.tileMap.map.length; row++) {
                for (let column = 0; column < this.tileMap.map[row].length; column++) {
                    if(this.#checkWallCollision(this.tileSize*column, this.tileSize*row)){
                        busy = true
                    }
                }
            }
            if(busy == false){
                this.x -= 5;
            }
        }
        if(input[2] == true){
            var busy = false
            for (let row = 0; row < this.tileMap.map.length; row++) {
                for (let column = 0; column < this.tileMap.map[row].length; column++) {
                    if(this.#checkWallCollision(this.tileSize*column, this.tileSize*row)){
                        busy = true
                    }
                }
            }
            if(busy == false){
                this.y -= 5;
            }
        }
        else if(input[3] == true){
            var busy = false
            for (let row = 0; row < this.tileMap.map.length; row++) {
                for (let column = 0; column < this.tileMap.map[row].length; column++) {
                    if(this.#checkWallCollision(this.tileSize*column, this.tileSize*row)){
                        busy = true
                    }
                }
            }
            if(busy == false){
                this.y += 5;
            }
        }
    }
}