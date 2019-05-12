// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumb: '',
    name: '',
    orders: [],
    hasAddress: false,
    address: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getUserInfo({
      success: (result)=>{
        that.setData({
          thumb: result.userInfo.avatarUrl,
          name: result.userInfo.nickName,
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });

    var reqTask = wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
      success: (result)=>{
        that.setData({
          orders: result.data
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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
    let that = this
    wx.getStorage({
      key: 'address',
      success: (result)=>{
        that.setData({
          hasAddress: true,
          address: result.data
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    })
  },
  payOrders(){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      success: (result)=>{
        wx.showModal({
          title: '付钱提示',
          content: '已成功付款',
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#3CC51F',
          success: (result) => {
            console.log(result);
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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

  }
})