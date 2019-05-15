// pages/category/curIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
          category:[
            { name: '果味', id: 'guowei' },
            { name: '蔬菜', id: 'shucai' },
            { name: '炒货', id: 'chaohuo' },
            { name: '点心', id: 'dianxin' },
            { name: '粗茶', id: 'cucha' },
            { name: '淡饭', id: 'danfan' }

          ],
          curIndex:0,
          isScroll:false,
          toView:'guowei'
  },
  switchTab(e){
  console.log(e)
  this.setData({
    toView:e.currentTarget.dataset.id,
    curIndex:e.currentTarget.dataset.index
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  scroll(e){
    console.log(e.detail)
    console.log(e.detail.scrollHeight)
    let h = e.detail.scrollHeight;
    let a = e.detail.scrollHeight / 6 ;
    let top = e.detail.scrollTop ;
    console.log(a)
    console.log(top)
    let curIndex = 0;
      if(top>(a * 5)){
        curIndex = 5;
      }else if(top>(a * 4)){
        curIndex = 4
      } else if (top > (a * 3)) {
        curIndex = 3
      } else if (top > (a * 2)) {
        curIndex = 2
      } else if (top > (a * 1)) {
         curIndex = 1
      }
     
    console.log(curIndex)
  this.setData({
    curIndex: curIndex
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success(res){
        console.log(res)
        that.setData({
          
          detail:res.data
        })
      }
    })
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