// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'prev-la-pjc-zx-3oou1'

cloud.init()
// 获取服务器的句柄
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  const userInfo = event.userInfo

  return await
}