class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;
        this.wall = this.#image('BrickTile.png');
        this.grass = this.#image('GrassTile.png');
        this.player = this.#image('Player.png');
    }

    #image(fileName){
        const img = new Image();
        img.src = `Game/Assets/${fileName}`;
        return img;
    }
    map = [
        [1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1],
    ];

    draw(canvas, ctx) {
        this.#setCanvasSize(canvas);
        this.#clearCanvas(canvas, ctx);
        this.#drawMap(ctx);
    }
    
    #drawMap(ctx) {
        for (let row = 0; row < this.map.length; row++) {
            for (let column = 0; column < this.map[row].length; column++) {
                const tile = this.map[row][column];
                let image = null;
                switch (tile) {
                    case 1:
                        image = this.wall;
                        break;
                    case 0:
                        image = this.grass;
                        break;    
            }
    
            if (image != null)
              ctx.drawImage(
                image,
                column * this.tileSize,
                row * this.tileSize,
                this.tileSize,
                this.tileSize
              );
          }
        }
    }
    
    #clearCanvas(canvas, ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    #setCanvasSize(canvas) {
        canvas.height = this.map.length * this.tileSize;
        canvas.width = this.map[0].length * this.tileSize;
    }
}
    