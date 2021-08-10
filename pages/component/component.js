// pages/component/component.js
Page({
  handleIncrement(event) {
    this.setData({
      count: this.data.count += 1
    })
    console.log(event)
  },

  handleTabClick(event) {
    console.log(event)
  },

  handleIncrementCpn() {
    // 最终目的：修改my-sel中的count
    // 1. 获取组件对象
    // const my-sel = this.selectComponent('class/id')
    const mysel = this.selectComponent('#sel-id')
    
    // 2. 通过setData修改组件中的数据(不合理)
    // mysel.setData({
    //   count: mysel.data.count += 20
    // })

    // 3. 通过方法对数据进行修改
    mysel.incrementCount(10)
  },

  hindleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    isShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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