// API封装模块， wx.request 也封装请求不要每次读取重复代码

// method get|post| PUT | RESTFUL
// 通用的数据请求

const CONFIG = require('./config.js')
const API_BASE_URL = 'https://api.it120.cc'

const request = (url, needSubDomain, method, data) => {
  const _url = API_BASE_URL + (needSubDomain?'/' + CONFIG.subDomain:'') + url
  // console.log(_url);

  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-ww2-form-urlencoded'
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        reject(err)
      },
      complete(){
        console.log('complete');
      }
    })
  })
}


module.exports = {
  goods: (data) => {
    return request('/shop/goods/list', true, 'post', data)
  },

  // 后台添加 一个页面 —> 比较长
  banners: (data) => {
    return request('/banner/list', true, 'get', data)
  },
  noticeList: (data) => {
    // request 怎么传输数据？ 根据后端的约定来
    return request('/notice/list', true, 'post', data)
  }
}