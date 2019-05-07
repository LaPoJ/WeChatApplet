Page({
  data: {
    hasUserInfo: false,
    userInfo: {},
    todos: [],
    addShow: false,
    addText: '',
    focus: false,
    status: 1
  },
  showStatus: function(e){
    var status = e.currentTarget.dataset.status
    if(status == this.data.status){
      returnv
    }
    this.setData({
      status: status
    })
  },
  setInput:function (e) {
    console.log(e);
    this.setData({
      addText: e.detail.value
    })
  },
  addTodo:function () {
    //1. 检测是否有输入
    if (this.data.addTex) {
      wx.showToast({
        title: "请输入Todo",
        duration: 1000,
        icon: 'none'
      })
      return ;
    }
    // 2. todo push
    // let todos = this.data.todos
    // todos.push({
    //   title: this.data.addText,
    //   id: new Date().getTime(),
    //   status:0
    // })
    // 3. 关闭表单
    this.setData({
      todos: [
        {
          title: this.data.addText,
          id: new Date().getTime(),
          status: 0
        },
        ...this.data.todos
      ],
      addShow: false,
      focus: false,
      addText: ''
    })
    console.log(this.data);

  },
  addTodoShow: function () {
    this.setData({
      addShow: true,
      focus:true
    })
  },
  addTodoHide: function () {
    this.setData({
      addShow: false,
      focus: false
    });
  },
  getUserInfo: function (e) {
    console.log(e);
    // this.data.userInfo = e.detail.userInfo;
    // this.data.hasUserInfo = true;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
