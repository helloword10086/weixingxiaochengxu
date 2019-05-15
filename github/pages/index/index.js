const WXAPI = require('../../wxapl/main')
Page({
  data:{
    noticeList:[],
    goods:[],
    categories:[],
    activeCategoryId:0
  },
  onLoad(){
    this.getBanners();
    this.loadGoods();
    this.getNotice();
  },
  getNotice(){
    WXAPI.noticeList({
      pageSize:5
    }).then(res =>{
      console.log(res);
      this.setData({
        noticeList:res.data
      })
    })
  },
  getBanners(){
    WXAPI.banners({
      type:'new'
    })
    .then(res =>{
      console.log(res)
    }) 
  },
  loadGoods(){
    WXAPI.goods({
      recommendStatus:1
    }).then(res => {
      console.log(res)
    })
  }
})