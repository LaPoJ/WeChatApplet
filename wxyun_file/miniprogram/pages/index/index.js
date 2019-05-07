// 链接数据库
const db = wx.cloud.database()
// 找到userInfo
const userInfo = db.collection('userInfo')
Page({
  data: {
    userList: []
  },
  getUserInfo: function (result) {
    // console.log(result);
    // 获取_openid 前端是拿不到的 => 云开发能获取

    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        // console.log(res.result.openId);
        // 云数据库中添加一条记录 传一个json 代表一条记录

        // 数量
        // 不是结果， 是符合条件的数量
        userInfo.where({
          _openid: res.result.openId
        }).count().then(res => {
          if (res.total == 0) {
            userInfo.add({
              data: result.detail.userInfo
            }).then(res => {
              console.log(res)
            })
          }else{
            // console.log('已经添加过！');
            wx.navigateTo({
              url: '/pages/add/add',
              success: function(e){

              }
            })
          }
        })
      }
    })
  },
  onLoad: function(options){
    userInfo.get().then( res => {
      this.setData({
        userList: res.data
      })
    })
  }
})