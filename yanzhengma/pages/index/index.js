Page({
  data:{
    start:false
  },
  onLoad(){
    // setTimeout(() =>{
    //   this.setData({
    //     start: true
    //   })
    // },2000)
  },
  _getCountdownEvent(){
   this.setData({
     start:true
   })
  },
  _setStartDataEvent(e){
   console.log(e);
   if(e.detail.start === false){
     this.setData({
       start: false
     })
   }
  }
})