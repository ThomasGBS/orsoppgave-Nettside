class Player{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
        this.sprite = new Image(60,60)//`Game/Assets/Player.png`;
        this.sprite.src = `Game/Assets/Player.png`

        this.attackType = "default";
        this.damage = 10;
        this.speed = 5;
        this.playerattacks = [];
        //this.date = new Date();
        //this.secondcheck = 0;
    }

    update(xmove,ymove, attackright, attackleft, attackup, attackdown){
        //this.date = new Date();
        //var seconds = this.date.getSeconds();
        //console.log(this.secondcheck)
        //console.log(seconds)
        if(true){//seconds > this.secondcheck + 1){
            breakme: {
                if(attackright == true){
                    this.playerattacks.push(new Attack(this.x + (this.sprite.naturalWidth / 2), this.y + (this.sprite.naturalHeight / 2), this.damage, this.attackType, 15,0));
                    //this.secondcheck = this.date.getSeconds();
                    console.log("hello")
                    break breakme;
                }
                if(attackleft == true){
                    this.playerattacks.push(new Attack(this.x + (this.sprite.naturalWidth / 2), this.y + (this.sprite.naturalHeight / 2), this.damage, this.attackType, -15,0));
                    //this.secondcheck = this.date.getSeconds();
                    break breakme;
                }
                if(attackup == true){
                    this.playerattacks.push(new Attack(this.x + (this.sprite.naturalWidth / 2), this.y + (this.sprite.naturalHeight / 2), this.damage, this.attackType, 0,-15));
                    //this.secondcheck = this.date.getSeconds();
                    break breakme;
                }
                if(attackdown == true){
                    this.playerattacks.push(new Attack(this.x + (this.sprite.naturalWidth / 2), this.y + (this.sprite.naturalHeight / 2), this.damage, this.attackType, 0,15));
                    //this.secondcheck = this.date.getSeconds();
                    break breakme;
                }
            }
            console.log("bob")
        }
        if(xmove != 0 || ymove != 0){
            this.move(xmove,ymove);
        }
        for(var i = 0; i < this.playerattacks.length; i++){
            this.playerattacks[i].updateAttack(attackright,attackleft,attackup,attackdown);
        }
        ctx.drawImage(this.sprite, this.x, this.y, this.sprite.naturalWidth, this.sprite.naturalHeight);
    }

    move(inputx, inputy){
        var busy = false;
        for (let row = 0; row < tilemap.map.length; row++) {
            for (let column = 0; column < tilemap.map[row].length; column++) {
                if(tilemap.map[row][column] == 1){
                    if(checkWallCollision(tileSize* column, tileSize* row, inputx, inputy, player) == true){
                        busy = true;
                    }
                }
                
            }
        }
        if(busy == false){
            this.x += inputx;
            this.y += inputy;
        }
    }
}