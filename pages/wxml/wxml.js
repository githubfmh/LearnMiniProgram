// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "小苹果",
    firstName: 'kove',
    lastName: 'james',
    age: 23,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score:75,
    movies: ['星际穿越', '盗梦空间', '大话西游', '警察故事'],
    nums: [
      ['穷开心'],
      ['朱元璋'],
      ['赵匡胤']
    ],
    letters: ['a', 'b', 'c', 'd']
  },

  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  hanldeSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  addScore() {
    this.setData({
      score: this.data.score += 6
    })
  },
  numberToFixed(value) {
    return value.toFixed(2)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})