// 注册一个小程序示例
App({
  // 生命周期函数
  // 小程序初始化完成时, 会执行的生命周期函数
  onLaunch(options) {
    // 可以进行网络请求 || 获取用户信息
    
    // 异步调用 -> 
    // wx.getUserInfo({
    //   // 数据拿到之后，在进行回调的
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // setTimeout(function() {
    //   const err = new Error()

    //   throw err
    // }, 3000)
  },

  // 小程序界面显示出来之后会执行的生命周期函数
  onShow(options) {
    // console.log(options)
    // 1. 判断小程序进入的场景
    switch(options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }

    // 2. 获取用户信息，并且获取到用户信息之后， 将用户信息传递给服务器
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },

  // 小程序界面被隐藏时, 会执行的生命周期函数
  onHide() {
    console.log('界面被隐藏')
  },

  // 小程序发生一些错误时，会执行的生命周期函数
  onError() {
    console.log('小程序发生错误')
  },

  // 全局对象变量
  globalData: {
    name: 'coderwhy',
    age: 18
  }
})