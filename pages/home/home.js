// pages/home/home.js
Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 20},
      {id: 111, name: 'james', age: 24},
      {id: 112, name: 'curry', age: 33},
      {id: 113, name: 'why', age: 18},
    ],
    counter: 0
  },
  handleAddClick() {
    // 1. 错误做法，界面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2. this.setData()[p0o098uhjmkllo]
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubClick() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})