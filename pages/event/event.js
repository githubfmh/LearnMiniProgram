// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },

  btn() {
    console.log('按钮发生点击')
  },

  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handeTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongpress() {
    console.log('handleLongpress')
  },

  // 事件的传递参数 
  handleEventClick(event) {
    console.log('11', event)
  },
  handleEventEnd(event) {
    console.log('22', event)
  },

  handleInter(event) {
    console.log('inter', event)
  },
  handleOuter(event) {
    console.log('outer', event)
  },

  handleItemClick(event) {
    console.log(event);
    const dataset = event.target.dataset;

    const item = dataset.item;
    const index = dataset.index;
    console.log(item, index)
  },

  // 事件冒泡与捕获
  handleCaptureView1() {
    console.log('handleCatureView1')
  },
  handleView1() {
    console.log('handleView1')
  },
  handleCaptureView2() {
    console.log('handleCatureView2')
  },
  handleView2() {
    console.log('handleView2')
  },
  handleCaptureView3() {
    console.log('handleCatureView3')
  },
  handleView3() {
    console.log('handleView3')
  },
})