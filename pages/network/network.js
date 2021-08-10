// pages/network/network.js
// import request from '../../service/network'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 网络请求相关操作
  onLoad() {
    // 1. 原生的方式发送网络请求
    // this.get_data_origin()

    // 2. 使用封装的request发送网络请求
    // Promise最大的好处就是防止出现回调地狱
    // request({
    //   url: 'http://152.136.185.210:7878/api/m5/home/multidata'
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  },
  get_data_origin() {
    // 发送网络请求
    // 1. 发送最简单的get请求
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/home/multidata',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // 2. get请求，并且携带参数
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // 3. post请求， 并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'fmh',
        age: 18
      },
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('请求结束')
      }
    })
  },

  // 弹窗相关
  handleShowToast() {
    wx.showToast({
      title: '加载中...',
      duration: 3000,
      icon: 'loading',
      image: '/assets/test/102.png',
      mask: true,
      success() {
        console.log('展示成功')
      },
      fail() {
        console.log('展示失败')
      },
      complete() {
        console.log('展示完毕')
      }
    })
  },

  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容嘿嘿嘿',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      success: function(res) {
        if(res.cancel) {
          console.log('用户点击了取消按钮')
        }
        if(res.confirm) {
          console.log('用户点击了确定按钮')
        }
      }
    })
  },

  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    
    setTimeout(() => {
      // 必须手动调用hideLoading才会让loading消失
      wx.hideLoading()
    }, 1500)
  },

  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res)
      }
    })
  },

  // 分享相关
  onShareAppMessage(options) {
    return {
      title: '我是标题',
      path: '/pages/about/about',
      imageUrl: '/assets/test/102.png'
    }
  }
})