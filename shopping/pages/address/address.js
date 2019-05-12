// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{
      name: '',
      phone: '',
      detail: ''
    }
  },
  bindName(e){
    this.setData({
      'address.name': e.detail.value,
    })
  },

  bindPhone(e){
    this.setData({
      'address.phone': e.detail.value,
    })
  },

  bindDetail(e){
    this.setData({
      'address.detail': e.detail.value,
    })
  },
  formSubmit(){
    if (this.data.address.name && this.data.address.phone && this.data.address.detail) {

      if (!(/[\u4e00-\u9fa5]/.test(this.data.address.name))) {
        wx.showModal({
          title: '提示',
          content: '请填写正确姓名',
          showCancel: false
        })
      } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.data.address.phone))){
        console.log(this.data.address.phone);
        wx.showModal({
          title: '提示',
          content: '请填写正确电话',
          showCancel: false
        })
      } else if (!(/^([\u4e00-\u9fa5]+(省|自治区))?[\u4e00-\u9fa5]+市[\u4e00-\u9fa5]+(区|县)$/.test(this.data.address.detail))){
        wx.showModal({
          title: '提示',
          content: '请填写正确地址',
          showCancel: false
        })
      }else{
        wx.setStorage({
          key: 'address',
          data: this.data.address,
          success: (result) => {
            wx.navigateBack()
          },
          fail: () => { },
          complete: () => { }
        })
      }
    }else{
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this
    wx.getStorage({
      key: 'address',
      success: (result) => {
        that.setData({
          hasAddress: true,
          address: result.data
        })
      },
      fail: () => { },
      complete: () => { }
    })
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

  }
})