// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    curIndex: 0,
    isScroll: true,
    toView: 'guowei',
    detail: [],
    windowHeight: 0,
    heightArr: [],
    containerH: 0,
    lastActive: 0
  },
  switchTab(e) {
    // console.log(e)
    this.setData({
      toView: e.target.dataset.id,
      curIndex: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          windowHeight: result.windowHeight
        })
      },
      fail: () => { },
      complete: () => {
      }
    });
  },




  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    let self = this
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success(res) {
        self.setData({
          detail: res.data
        })
        self.setHeigthArr()
      },
    })
  },

  setHeigthArr() {
    let that = this
    let query = wx.createSelectorQuery().in(this)

    let heightArr = []
    let s = 0
    query.selectAll('.cate-box').boundingClientRect((rects) => {
      rects.forEach(rect => {
        s += rect.height
        heightArr.push(s)
      })

      that.setData({
        heightArr: heightArr
      })

      // console.log(this.data.heightArr);

    })

    query.select('.categroy-right').boundingClientRect((res) => {
      // 计算容器高度
      // console.log(res);

      that.setData({
        containerH: res.height * (this.data.category.length)
      })

      // console.log(this.data.containerH);

    }).exec();

    // let menuButton = wx.getMenuButtonBoundingClientRect();

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onScroll(e) {
    let scrollTop = e.detail.scrollTop;

    // scrollTop += 10;

    let scrollArr = this.data.heightArr;
    if (scrollTop <= scrollArr[scrollArr.length - 1] - this.data.containerH) {
      return
    } else {
      // console.log((scrollArr[0] * ) / 2);

      for (let i = 0; i < scrollArr.length; i++) {
        if (scrollTop >= 0 && scrollTop < scrollArr[0]) {

          if (0 != this.data.lastActive) {
          this.setData({
            curIndex: 0,
            lastActive: 0
          })
        }
        } else if (scrollTop >= scrollArr[i - 1] - 100 && scrollTop < scrollArr[i]) {

          if (i != this.data.lastActive) {
            this.setData({
              curIndex: i,
              lastActive: i
            })
          }

        }
      }
    }
  }
})