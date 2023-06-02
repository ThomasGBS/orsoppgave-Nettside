class Attack{
    constructor(x, y, dmg, type, xmove, ymove){
        this.xmove = xmove;
        this.ymove = ymove;
        this.x = x;
        this.y = y;
        this.damage = dmg;
        this.type = type;
        this.sprite = new Image(60,60);
        if(this.type == "default"){
            this.sprite.src = `Game/Assets/DefaultAttack.png`;
        }
        else if(this.type == "fire"){
            this.sprite.src = `Game/Assets/FireAttack.png`;
        }
    }
    updateAttack(){
        var busy = false
        for (let row = 0; row < tilemap.map.length; row++) {
            for (let column = 0; column < tilemap.map[row].length; column++) {
                if(tilemap.map[row][column] == 1){
                    if(checkWallCollision(tileSize*column, tileSize*row, this.xmove, this.ymove, this)){
                        for(var i = 0; i < player.playerattacks.length; i++){
                            if (player.playerattacks[i] == this){
                                player.playerattacks.splice(i, 1)
                            }
                            delete this;
                            return
                        }
                        busy = true;
                    }
                }
                
            }
        }
        if(busy == false){
            this.x += this.xmove;
            this.y += this.ymove;
        }
        
        ctx.drawImage(this.sprite, this.x - (this.sprite.naturalWidth / 2), this.y - (this.sprite.naturalHeight / 2), this.sprite.naturalWidth, this.sprite.naturalHeight);

    }
}