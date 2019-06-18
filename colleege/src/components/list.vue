<template>
  <div>
    <h1 class="list-title">为你推荐</h1>
    <div class="alllist">
     <div class="mylist">
       <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3208326311,3261429607&fm=27&gp=0.jpg" alt="" class="my">
       <h2>领导力原则</h2>
       <div class="all">

       <p class="jieshao">俞敏洪</p>
       </div>
       <div class="all">
       <p class="kan">85万人次</p>
        </div>
        <div class="all">
       <view class="content">团队管理</view>
       </div>
     </div>
     <div class="mylist">
       <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3208326311,3261429607&fm=27&gp=0.jpg" alt="" class="my">
       <h2>领导力原则</h2>
       <div class="all">

       <p class="jieshao">俞敏洪</p>
       </div>
       <div class="all">
       <p class="kan">85万人次</p>
        </div>
        <div class="all">
       <view class="content">团队管理</view>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.mylist{
  overflow: hidden;
  border-bottom: 1px solid #D6D8DB;
}
h1{
  display: block;
  padding: 20rpx;
  font-weight: bold;
  font-size: 43rpx;
}

.my{
  display: block;
  height: 200rpx;
  width: 150rpx;
  float: left;
  border-radius: 2px;
  margin: 20rpx;
}
h2{
  display: block;
  margin-top: 20rpx;
  font-weight: bold;
  font-size: 32rpx;
  margin-bottom: 10rpx;
}
.jieshao{
  font-size: 14px;
  color: #747474;
  margin-bottom: 10rpx;
  margin-right: 10px;
  float: left;
}
.kan{
  font-size: 12px;
  color: #747474;
  margin-bottom: 10rpx;
  margin-right: 10px;
  float: left;
}
.content{
  display: block;
  background: #F9F2EA;
   font-size: 12px;
  color: #747474;
  margin-bottom: 10rpx;
  margin-right: 10px;
  padding: 8rpx;
  /* width: 10rpx; */
  float: left;
}
.all{
  overflow: hidden;
}
</style>
