- start 从页面到组件

```html
  <countdown start="start" ></countdown>
```

- 页面是老板，组件是员工，页面是组建组成的
start 老板也要知道状态 ， page data 添加状态

<countdown start="{{start}}">

- 组件的数据 data(内部数据) + properties(外部数据)

- properties 里的 observer 接收到值改变是的执行 observer -> 观察者

- 从内向外触发事件
  ```JavaScript
    this.triggerEvent({
      "event_name",
      data
    })
  ```
  外: (绑定自定义事件)bind:event_name="expFunc"
- 页由组件组成  先去独立的开发组件 再拼起来

- 由外传入的properties 由内传出的事件 Page 和 Components 就成了不可分割的有机体

- 喜马拉雅 掘进活动 小米商城 京东商城 马蜂窝旅游 58到家 口碑 猫眼电影 摩拜单车 青桔单车 微信读书 星巴克用兴说
  思否课堂 肯德基 小红书 58同城租房找房 二维火点餐 有赞精选 小米有品店 瓜子二手车 蘑菇街女装 拉勾网 懂球帝
  滴滴出行 转转二手交易 爱奇艺视频 快狗打车 美丽说 美团门票 拼多多 饿了么外卖 珍爱网 