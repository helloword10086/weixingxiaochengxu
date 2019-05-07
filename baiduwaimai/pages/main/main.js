var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData;
Page({
  data: {
    markers: '',
    latitude: '',
    longitude: '',
    rgcData: {},
    url: ['http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png',
    'http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png',
    'http://p1.meituan.net/jungle/99fb0a3687a7ad570d015ec081ff396a9989.png',
    'http://p1.meituan.net/jungle/c1048e334022a93221b0e63bbfb998b18861.png',
    'http://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png',
    'http://p1.meituan.net/jungle/dfd03fd91f640682c16179ba85837f739679.png',
    'http://p1.meituan.net/jungle/e54f1fe77b0588d2dfe82a12e424108a9450.png',
      'http://p1.meituan.net/jungle/e54f1fe77b0588d2dfe82a12e424108a9450.png',
      'http://p1.meituan.net/jungle/e54f1fe77b0588d2dfe82a12e424108a9450.png',
      'http://p1.meituan.net/jungle/e54f1fe77b0588d2dfe82a12e424108a9450.png'],
    indicatorDots: false,
    autoplay: false,
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'TVhyLbhfR6Ukkb88C5BmMGtGEp0ECaXD'
    });
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation']) {
          //如果授权结果为true，则获取相关信息
          wx.getLocation({
            type: 'wgs84',
            success: function (res) {
              // 发起regeocoding检索请求 
              BMap.regeocoding({
                success: function (res) {
                  wxMarkerData = res.wxMarkerData;
                  console.log(wxMarkerData)
                  that.setData({
                    markers: wxMarkerData[0].address,
                    latitude: wxMarkerData[0].latitude,
                    longitude: wxMarkerData[0].longitude
                  });
                },
                fail: function () { }
              })
            }
          })
        } else {
          //如果授权结果为false，执行授权操作
          wx.authorize({
            scope: 'scope.userLocation',
            success: function (res) {
              wx.getLocation({})
            },
            fail: function () { //如果用户点击拒绝，以后的每次点击授权每次都都会直接进入此回调

            }
          })
        }
      }
    })
  
  
  },
  addressInput(){
    wx.navigateTo({
      url: '../input/input'
    })
  },
  searchFoot() {
    wx.navigateTo({
      url: '../search/search'
    })
  }
})