const app = getApp()
var interval = null  //定时器
var intime = 50  //转的速度
Page({
  data: {
    color: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    images: ['/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png'],
    btnconfirm: '/images/dianjichoujiang.png',
    clickLuck: 'clickLuck',  //点击后一段事件 ，设置按钮不可点击
    luckPosition: 0
  },

  onLoad() {
    this.loadAnimation();
  },
  input(e) {
    console.log(e.detail.value);
    let data = e.detail.value
    this.setData({
      luckPosition: data
    })
  },
  loadAnimation() {
    let e = this
    let index = 0
    interval = setInterval(() => {
      if (index > 7) {
        index = 0
        e.data.color[7] = 0.5
      } else if (index != 0) {
        e.data.color[index - 1] = 0.5
      }
      e.data.color[index] = 1
      e.setData({
        color: e.data.color
      })
      index++
    }, 1000)
  },
  clickLuck() {
    let e = this
    // 判断中奖的位置格式
    if (e.data.luckPosition == null || isNaN(e.data.luckPosition) || e.data.luckPosition > 7) {
      wx.showModal({
        title: '提示',
        content: '请填写正确的值',
        showCancel: false
      })
      return
    }

    e.setData({
      btnconfirm: '/images/dianjichoujiangd.png',
      clickLuck: ''  //阻止 继续操作
    })
    clearInterval(interval)
    let index = 0
    //循环每一项的透明度
    interval = setInterval(() => {
      if (index > 7) {
        index = 0
        e.data.color[7] = 0.5
      } else if (index != 0) {
        e.data.color[index - 1] = 0.5
      }
      e.data.color[index] = 1
      e.setData({
        color: e.data.color
      })
      index++
    }, intime)

    let stoptime = 2000
    setTimeout(() => {
      e.stop(e.data.luckPosition) //调用stop 的事件让它停下来
    }, stoptime)

  },
  stop(which) {
    let e = this
    clearInterval(interval)
    let current = -1
    let color = e.data.color
    for (let i = 0; i < color.length; i++) {
      if (color[i] == 1) {
        current = i
      }
    }
    let index = current + 1
    e.stopLuck(which, index, intime, 10)
  },
  stopLuck(which, index, time, splittime) {
    let e = this
    let color = e.data.color
    setTimeout(() => {
      //重置前一个位置
      if (index > 7) {
        index = 0
        color[7] = 0.5
      } else if (index != 0) {
        color[index - 1] = 0.5
      }
      //当前位置位选中状态
      color[index] = 1
      e.setData({
        color
      })
      // 如果说当前旋转时间过短，或者说当前位置不等于中奖位置，递归，直至中奖位置
      if (time < 400 || index != which) {
        //越来越慢
        splittime++
        time += splittime
        //当前位置加1
        index++
        e.stopLuck(which, index, time, splittime)
      } else {
        setTimeout(() => {
          if (which == 1 || which == 3 || which == 5 || which == 7) {
            wx.showModal({
              title: '提示',
              content: '恭喜中奖！',
              showCancel: false,
              success(res) {
                //设置按钮可点击
                e.setData({
                  btnconfirm: '/images/dianjichoujiang.png',
                  clickLuck: 'clickLuck'
                })
                e.loadAnimation()
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '很遗憾，没有中奖！',
              showCancel: false,
              success(res) {
                e.setData({
                  btnconfirm: '/images/dianjichoujiang.png',
                  clickLuck: 'clickLuck'
                })
                e.loadAnimation()
              }
            })
          }
        }, 1000)
      }
    }, time)
  }
})
