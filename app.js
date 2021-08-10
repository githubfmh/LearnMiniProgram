const TOKEN = 'token'
// 注册一个小程序示例
App({
  // 对象： 小程序关闭掉
  globalData() {
    token: ''
  },
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
    
    // 登录流程
    // 1. 先从缓冲中取出token
    const token = wx.getStorageSync(TOKEN)

    // 2. 判断token是否有值
    if(token && token.length !== 0) { 
       // 已经有token， 验证token是否过期
       this.check_token(token)
    } else {
      // 没有token，进行登录
      this.login()
    }
  },
  check_token() {
    console.log('执行了验证token的操作')
    wx.request({
      url: 'http://httpbin.org/get',
      method: 'get',
      header: {
        token
      },
      success: (res) => {
        if(!res.data.errCode) {
          console.log('token有效')
          this.globalData.token = token;
        } else {
          this.login()
        }
      },
      fail: (err) => {
        console.log('err')
      }
    })
  },
  // 登录操作
  login() {
    console.log('执行了登录操作')
    wx.login({
      // code只有5分钟的有效期
      success: res => {
        // 1. 获取code
        const code = res.code;
        // 2. 将code发送给我们的服务器
        wx.request({
          url: 'http://httpbin.org/get',
          method: 'get',
          data: {
            code
          },
          success: res => {
            // 1. 取出token
            const token = res.data.args.code;

            // 2. 将token保存在globalData中
            this.globalData.token = token;

            // 3. 进行本地存储
            wx.setStorageSync(TOKEN)
          }
        })
      }
    })
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