// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    city: '南昌',

    items: [],

    indicatorDots: true,
    indicatorColor: 'rgba(255,255,255,.3)',
    indicatorActiveColor: '#eee',
    autoplay: true,
    interval: 5000,
    duration: 1000
    // indicatorColor:rgb(255, 105, 180),

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5cbf003f330edc5317b81626/movie/wechat-movies',
      success: function (res) {
        console.log(res);
        that.setData({
          items:res.data.data.movieList
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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
    // wx.startPullDownRefresh()
    setTimeout(() => {
      wx.stopPullDownRefresh()
      console.log(1);
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    setTimeout(() => {
      console.log(2);
    }, 1000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})