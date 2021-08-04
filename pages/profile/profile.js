// pages/profile/profile.js

// getApp 获取App()参产生的示例对象
const app = getApp();

const name = app.globalData.name;
const get = app.globalData.get;

// 注册一个页面
// 页面也有自己的生命周期
Page({
  // 2. 初始化数据
  data: {
    msg: '哈哈哈',
    list: []
  },

    // 3. 监听wxml中相关的一些事件
  changeClick() {
    this.setData({
      msg: 'Hello World'
    })
  },

  handleGetUserInfo(event) {
    console.log(event)
  },


  // 1. 监听页面的生命周期函数

  // 页面被加载出来回调
  onLoad() {
    console.log('onLoad')
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/home/multidata',
      // 箭头函数中的this一层层向上找
      success: (res) => {
        console.log(res)
        const data = res.data
        this.setData({
          list: data.data.banner.list
        })
      }
    })
  },
  // 页面初次渲染完成时回调
  onReady() {
    console.log('onReady')
  },
  // 页面显示出来回调
  onShow() {
    console.log('onShow')
  },
  // 页面被隐藏时回调
  onHide() {
    console.log('onHide')
  },
  // 页面销毁时回调
  onUnload() {
    console.log('onUnload')
  },

  // 4. 监听其他事件
  // 监听页面的滚动
  onPageScroll(position) {
    console.log(position)
  },

  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },

  // 监听页面下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新')
  }

})