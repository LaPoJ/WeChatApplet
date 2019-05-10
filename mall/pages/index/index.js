const WXAPI = require('../../wxapi/main')

Page({
  data:{
    goods: [],  //商品
    categories: [],   //分类
    activeCategoryId: 0,  //当前分类
    noticeList: [],  //通知
    banners: []
  },
  onLoad(){
    this.getNotice()  //通知
    this.getBanners()   //请求Banner位
    this.loadGoods()  //商品
  },
  getNotice(){
    WXAPI.noticeList({
      pageSize: 5
    }).then(res => {
      this.setData({
        noticeList: res.data
      })
    })
  },
  getBanners(){
    WXAPI.banners({
      type: 'new'
    }).then(res => {
      this.setData({
        data: res.data
      })
    })
  },
  loadGoods(){
    WXAPI.goods({
      recommendStatus: 1
    }).then(res => {
      this.setData({
        goods: res.data
      })
    })
  }
})