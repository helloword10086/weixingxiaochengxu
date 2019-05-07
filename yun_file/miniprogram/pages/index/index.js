//连上数据库
const db = wx.cloud.database();
// 找到userinfo表
const userInfo = db.collection('userInfo');
Page({
  data:{
      userList:[]
  },
  getUserInfo: function(result){
    console.log(result);
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        userInfo.where({
          _openid:res.result._openId
        }).count().then(res =>{
          if(res.total == 0){
              userInfo.add({
              data: result.detail.userInfo
            }).then(res =>{
             console.log(res)
            })
          }else{
            wx.navigateTo({
              url: '/pages/add/add',
              success: res => {
                console.log(res);
              },
            })
          }
        })
        // userInfo.add({
        //   data: result.detail.userInfo
        // }).then(res =>{
        //   console.log(res);
        // })
      }
    })
  },
  onLoad: function(options){
    userInfo.get().then(res =>{
      this.setData({
        userList:res.data
      })
    })
  }
})