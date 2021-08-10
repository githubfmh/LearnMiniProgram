// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: ''
  },
  onLoad() {
    wx.getSetting({
      success: res => {
        if(res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              // console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    const nickname = e.detail.userInfo.nickName
    
    this.setData({
      nickname: nickname
    })
  }
})