//index.js

const app = getApp()
var interval = null
var intime = 50


//Page Object
Page({
  data: {
    color: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
  images: [
      '/images/item.png',
      '/images/item1.png',
      '/images/item.png',
      '/images/item1.png',
      '/images/item.png',
      '/images/item1.png',
      '/images/item.png',
      '/images/item1.png',
      '/images/item.png'
    ],
    btnconfirm: '/images/dianjichoujiang.png',
    clickLuck: 'clickLuck',
    luckPosition: 0
  },
  clickLuck(){
    let that = this

    // 判断中奖的位置
    if(that.data.luckPosition == null|| isNaN(that.data.luckPosition) || that.data.luckPosition > 7){
      wx.showModal({
        title: '提示',
        content: '请填写正确的值',
        showCancel: false,
      })
      return
    }

    that.setData({
      btnconfirm: '/images/dianjichoujiangd.png',
      clickLuck: ''
    })

    clearInterval(interval)

    let index = 0
    // 循环每一项的透明度
    interval = setInterval(() => {
      if (index > 7) {
        index = 0
        that.data.color[7] = .5
      } else if (index != 0) {
        that.data.color[index - 1] = 0.5
      }
      that.data.color[index] = 1

      this.setData({
        color: that.data.color
      })
      index++
    }, intime)

    let stoptime = 2000
    setTimeout(() => {
      that.stop(that.data.luckPosition)
    }, stoptime)
  },

  stop(which){
    let e = this
    clearInterval(interval)
    let current = -1
    let color = e.data.color
    for (let i = 0; i < color.length; i++) {
      if (color[i] == 1) {
        current = i
      }
    }
    let index = current + 1
    e.stopLuck(which, index, intime, 10)
  },

  stopLuck(which, index, time, splittime){
    let e = this
    let color = e.data.color
    setTimeout(() => {
      // 重置前一个位置
      if(index > 7){
        index = 0
        color[7] = 0.5
      }else if(index != 0){
        color[index - 1] = 0.5
      }
      // 当前位置未选中状态
      color[index] = 1
      e.setData({
        color
      })
      //如果说当前旋转时间过短，或者当前位置不等于中奖位置, 递归至中奖
      if (time < 400 || index != which) {
        //越来越慢
        splittime++
        time += splittime
        index++
        e.stopLuck(which, index, time, splittime)
      }else{
        setTimeout(() => {
          if (which == 1 || which == 3 || which == 5 || which == 7 ) {
            wx.showModal({
              title: '提示',
              content: '恭喜中奖',
              showCancel: false,
              success: (result) => {
                // 设置按钮可点击
                e.setData({
                  btnconfirm: '/images/dianjichoujiang.png',
                  clickLuck: 'clickLuck'
                })
                e.loadAnimation()
              },
              fail: ()=>{},
              complete: ()=>{}
            });
          }else{
            wx.showModal({
              title: '提示',
              content: '很遗憾没中奖',
              showCancel: false,
              success: (result) => {
                e.setData({
                  btnconfirm: '/images/dianjichoujiang.png',
                  clickLuck: 'clickLuck'
                })
              },
              fail: ()=>{},
              complete: ()=>{}
            });
          }
        }, 1000);
      }
    }, time);
  },

  loadAnimation(){
    let that = this
    let index = 0

    interval = setInterval(() => {
      if (index > 7) {
        index = 0
        that.data.color[7] = .5
      }else if(index != 0){
        that.data.color[index -1] = 0.5
      }
      that.data.color[index] = 1

      that.setData({
        color: that.data.color
      })
      index++
    }, 1000)
  },
  //options(Object)
  onLoad(){
    this.loadAnimation()
  },
  input(e){
    let data = e.detail.value
    this.setData({
      luckPosition: data
    })
  }
});