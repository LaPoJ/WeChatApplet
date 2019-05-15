const trendings = (data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://github-trending-api.now.sh/repositories',
      data,
      success(res){
        resolve(res.data)
      },
      fail(err){
        reject(err)
      }
    })
  })
}

const events = () => {
  return {
    get(){
      const promise = new Promise((resolve, reject) => {
        wx.request({
          url: 'https://api.github.com/events',
          // data: {},
          // header: {'content-type':'application/json'},
          // method: 'GET',
          // dataType: 'json',
          // responseType: 'text',
          success: (res) => {
            resolve({
              data: res.data,
              next: null
            })
          },
          fail: (err) => {
            reject(err)
          },
          complete: ()=>{
            console.log('events');
          }
        })
      })
      return promise
    }
  }
}

module.exports = {
  trendings,
  events
}