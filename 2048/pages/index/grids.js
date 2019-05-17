function Grid(size) {
  this.size = size
  this.cells = this.empty()
}

Grid.prototype = {
  /**
   * empty 返回一个空的矩阵 -> 二维数组
   */
  empty: function () {
    let cells = []
    for (let i = 0; i < this.size; i++) {
      cells[i] = []
      for (let j = 0; j < this.size; j++) {
        cells[i].push(null)
      }
    }
    return cells
  },
  availableCells() {
    var cells = []
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if(!this.cells[i][j]){
          cells.push({
            x: i,
            y: j
          })
        }
      }
    }
    return cells
  },
  cellAvailable() {
    // 0 || >0
    // !! => 强转为 true 或 false
    return !!this.availableCells().length
  },

  // 从空位置随机生成初始化位置
  randomAvailableCell(){
    const cells = this.availableCells()
    return cells[Math.floor(Math.random() * cells.length)]
  },
  insertTile(tile){
    this.cells[tile.x][tile.y] = tile
  }
}

module.exports = Grid