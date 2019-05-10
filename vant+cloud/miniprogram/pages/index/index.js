// miniprogram/pages/index/index.js
import Notify from '../dist/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupName: '',
    newGroupModal: false
  },
  showNewGorupModal(){
    this.setData({
      newGroupModal: true
    })
  },
  onGroupNameChange(event){
    // console.log(event.detail)
    this.setData({
      groupName: event.detail
    })
  },
  colseDialog(){
    this.setData({
      newGroupModal: false,
    })
    setTimeout(() => {
      this.setData({
        groupName: ''
      })
    }, 500);
  },
  creatGroup(event){
    let that = this
    if (that.data.groupName === '') {
      Notify({
        text: '起个名字吧',
        duration: 1500,
        selector: '#notify-selector',
        backgroundColor: '#dc3545'
      });
      that.selectComponent('#newGroupModal').stopLoading()
      return
    }else{
      wx.cloud.callFunction({
        name: 'createGroup',
        data: {
          groupName: that.data.groupName
        },
        success(res){
          console.log(res);

          that.setData({
            newGroupModal: false
          })

          setTimeout(() => {
            wx.showToast({
              title: '创建成功',
              icon: 'success'
            })
          }, 500);

          setTimeout(() => {
            that.setData({
              groupName: ''
            })
          }, 500);

          setTimeout(() => {
            wx.switchTab({
              url: '/pages/group/group'
            })
          }, 1000);

        },
        fail(error){
          console.log(error);
        }
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