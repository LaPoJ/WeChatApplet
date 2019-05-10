- 一套好的UI
  app.wxss 全局皮肤
- 组件思想
  界面中相对独立显示区块  => 封装成组件
  意义： 界面由组件构成， 不是由标签构成
  组件可以复用
- 项目中所有的请求都封装到 API 目录下
  ```javascript


  request =() => {
   return new Promise((resolve, reject) => {
    wx.request({
      url: 'url',
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
  }
  module.exports = {
    request,
  }
  ```
- 实现顺序
  ```javascript
  导入请求
  const request = reqiure('url')

  wx.startPullDownRefresh() //=> onload 把生命周期交给 onPullRefresh()
  resquestFunction(){
    request.request()
      .then(data => {
        this.setData({
          this.data: data
        })
      })
      .catch()
  } //api请求
  wx.stopPullDownRefresh()
  ```
- 复杂项目的组件数量比较多 /style/base.wxss 多个组件都依赖的基础样式