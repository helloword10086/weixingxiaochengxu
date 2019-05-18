const Grid = require("./grid.js");
//负责整个游戏的调度
function GameManager(size, startTiles = 2) {
    this.size = size;
    this.startTiles = startTiles;
}
GameManager.prototype = {
    setup: function () {
        this.grid = new Grid(this.size);
        this.addStartTiles();
        return this.grid.cells;
    },
    addStartTiles() {
        for (let tile = 0; tile < this.startTiles; tile++) {
            this.addRandomTiles();
        }
    },
    addRandomTiles() {
        if (this.grid.cellAvailable()) {
            const value = Math.random() < 0.5 ? 2 : 4;
            //随机位置
            //x,y
            const cell = this.grid.randomAvailabelCell();
            const tile = {
                x:cell.x,
                y:cell.y,
                value:value
            }
            //将tile 信息插入到页面
            this.grid.insertTile(tile);
        }

    },
    findFathestTail: function(cell,vertor){
      
    },
    getVertor:function(direction){
        const map = {
            0:{
                x:0,
                y:-1
            },
            1:{
                x: 1,
                y:0
            },
            2:{
                x:0,
                y:1
            },
            3:{
                x:-1,
                y:0
            }
        }
        return map[direction];
    },
    move: function(direction){
    const vertor = this.getVertor(direction);
    console.log(direction,vertor);
    const position = this.findFathestTail();
    }
}

module.exports = GameManager;
