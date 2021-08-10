// pages/router/router.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '哈哈哈'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?name=嘿嘿嘿'
    })
  }
})