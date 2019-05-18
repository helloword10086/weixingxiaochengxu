// miniprogram/pages/index/index.js
const app = getApp()
import { addEmotion, geocoder, getWeather } from '../../lib/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backgroundImage: '../../images/tian.jpg',
    backgroundColor: '#62aadc',
    address: '定位中',
    lat: 40.056974,
    lon: 116.307689,
    paddingTop: 0,
    scale: 1

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    addEmotion('5-16', 'good')
    //获取设备信息
    let self = this
    wx.getSystemInfo({
      success: (res) => {

        // console.log(res)
        let width = res.windowWidth
        let scale = width / 375
        self.setData({
          width,
          scale,
          paddingTop: res.statusBarHeight + 12
        })

      },
      fail: () => { },
      complete: () => { }
    });
    this.getLocation()
  },
  getLocation() {
    //获取位置
    wx.getLocation({
      type: 'gcj02',
      success: this.updateLocation,
      fail: (e) => {
        this.openLocation()
      }
    })
  },
  //更新位置
  updateLocation(res) {
    let { latitude: lat, longitude: lon, name } = res
    let data = {
      lat,
      lon
    }
    if (name) {
      data.address = name
    }
    this.setData(data)
    this.getAddress(lat, lon, name)
  },
  openLocation() {
    wx.showToast({
      title: '检测到您未授权使用位置权限，请先开启哦',
      icon: 'none',
      duration: 3000
    })
  },
  getAddress(lat, lon, name) {
    wx.showLoading({
      title: '定位中',
      mask: true,
      //是否显示透明蒙层，防止触摸穿透
    })
    let fail = (e) => {
      this.setData({
        address: name || '南昌市'
      })
      wx.hideLoading() //让之隐藏
    }
    geocoder(lat, lon, (res) => {
      console.log(res.data)
      wx.hideLoading()
      let result = (res.data || {}).result;
      console.log(result)
      if (res.statusCode === 200 && result && result.address) {
        let { address, formatted_addresses, address_component } = result
        if (formatted_addresses && (formatted_addresses.recommend || formatted_addresses.rough)) {
          address = formatted_addresses.recommend || formatted_addresses.rough
        }
        let { province, city, district: county } = address_component
        this.setData({
          province,
          city,
          county,
          address: name || address
        })
      }

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
