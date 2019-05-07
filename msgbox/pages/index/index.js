Page({
  onLoad:function() {
  this.popup = this.selectComponent('#popup')
  },
  _error(){
    this.popup.hidePopup();
  },
  _success(){
    this.popup.hidePopup();
  },
  showPopup:function(){
    this.popup.showPopup()
  },
  change:function(e){
    // console.log('catch')
    var mComponent = this.selectComponent('#myComponent');
    mComponent.setText('外部调用')
  },
  onTextChange: function(){
    wx.showToast({
      title: '铺货事件',
    })
  }
})