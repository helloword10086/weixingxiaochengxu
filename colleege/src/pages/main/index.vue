<template>
  <div class="header">
    <img src="../../../static/images/head.png" alt="" class="header-img">
    <div class="tui-jian">
      <img src="../../../static/images/tui.png" alt="" class="tuijian">
    </div>
    <div class="all-list">

     <list/>
    </div>
     <div class="foot">
       <div class="foot-content"> 更多精彩课程，就在"混沌大学"APP</div>
     </div>
  </div>
  
</template>
<script>
import list from '@/components/list'
export default {
  data() {
    return {
      
    }
  },
  components:{list}
}
</script>
<style >
page{
  background: #EDEDED;
  height: 100%;
  position: relative;
}
.header{
  height: 100%;
}
.header-img{
  width: 100%;
  height: 277rpx;
}
.tuijian{
  display: block;
  width: 95%;
  height: 200rpx; 
  margin: 10rpx auto;
}
.all-list{
  background: #fff;
}
.foot{
  position: absolute;
  /* top: 100px; */
  /* position: flex; */
  background: #3F4244;
top: 1125rpx;
  color: #BB9868;
  width: 100%;
}
.foot-content{
  display: block;
  margin: 10px auto;
 /* justify-content: center; */
 text-align: center;
 
}
</style>
