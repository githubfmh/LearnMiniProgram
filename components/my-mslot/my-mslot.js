// components/my-mslot/my-mslot.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },
  data: {

  },
  pageLifetimes: {
    show() {
      console.log('组件显示出来')
    },
    hide() {
      console.log('组件隐藏出来')
    },
    resize() {
      console.log('组件尺寸改变')
    }
  },
  lifetimes: {
    created() {
      console.log('组件被创建出来')
    },
    attached() {
      console.log('组件被添加到页面')
    },
    ready() {
      console.log('组件被渲染出来')
    },
    move() {
      console.log('组件被移动到另外一个节点')
    },
    detached() {
      console.log('组件被移出')
    }
  }
})
