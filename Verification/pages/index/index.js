Page({
  data:{
    start:false
  },
  _setStartDataEvent(event){
    // console.log(event);
    if (event.detail.start === false) {
      this.setData({
        start: false
      })
    }
  },
  onLoad(){
    setTimeout(() => {
      this.setData({
        start:true
      })
    }, 2000);
  }
})