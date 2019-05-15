//app.js
App({
  onLaunch: function (options) {
    const self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env:'li123-zgxbt'
      })
    }

    this.globalData.shareParam = options.query
    wx.getSetting({
     success(settingRes){
         if(settingRes.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: (infoRes) =>{
                self.globalData.userInfo = infoRes.userInfo
                if(self.catchUserInfo){
                  self.catchUserInfo(infoRes.userInfo)
                }
                wx.cloud.callFunction({
                  name:'getUser',
                  data:{
                    avatarUrl: infoRes.userInfo.avatarUrl,
                    name:'',
                    nickName: infoRes.userInfo.nickName,
                    sex: infoRes.userInfo.gender
                  }
                })
              },fail:(error) =>{console.log(error)},
             
            })
         }else{
           wx.redirectTo({
             url: `/pages/login/login?back=${options.path.split('/')[1]}`,
           })
         }
     } 
    })
    wx.cloud.callFunction({
      name:'getUserinfo',
      data:{
        success(res) {
          self.globalData.userInfoFromCloud = res.result.storeUser
        }

      }
    })
  },
  globalData:{
    currentGroupInfo:null,
    currentGroupUserList:[],

  }
})
