const GameManager = require('./game_manager.js')

Page({
  data: {
    grids: []
  },
  gameManager: null,
  newGame(){
    wx.showModal({
      title: '提示',
      content: '暂不支持该功能哦',
      showCancel: false,
    });
  },
  onLoad(){
    this.gameManager = new GameManager(4,2)
    const grids = this.gameManager.setup()

    console.log(grids);


    this.setData({
      grids
    })
  },
  touchStart(){
    console.log('touchStart')
  },
  touchMove(){
    console.log('touchMove')
  },
  touchEnd(){
    console.log('touchEnd')
  }
})