var bmap = require('../../libs/bmap-wx.js');
Page({
  data: {
    sugData: ''
  },
  // 绑定input输入 
  bindKeyInput: function (e) {
    var that = this;
    // 新建百度地图对象 
    console.log(e.detail.value);
    this.setData({
      value: e.detail.value
    })
    var BMap = new bmap.BMapWX({
      ak: 'TVhyLbhfR6Ukkb88C5BmMGtGEp0ECaXD'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var sugData = '';
      for (var i = 0; i < data.result.length; i++) {
        sugData = sugData + data.result[i].name + '\n';
      }
      console.log(sugData )
      that.setData({
        sugData: sugData
      });
    }
    // 发起suggestion检索请求 
    BMap.suggestion({
      query: e.detail.value,
      region: '南昌',
      city_limit: true,
      fail: fail,
      success: success
    });
  }
}) 