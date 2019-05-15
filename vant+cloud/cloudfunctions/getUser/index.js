// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
 const userInfo = event.userInfo;
 const checkUser = await   db.collection('user').where({
   openId: userInfo.openId
 }).get()
 if(checkUser.data.length >0){
   await db.collection('user').doc(checkUser.data[0]._id).updata({
     data:{
       avatarUrl:event.avatarUrl,
       nickName:event.nickName,
       sex:event.sex
     }
   })
 }else{
   const insertResult = await db.collection('user').add({
   avatarUrl: event.avatarUrl,
     nickName: event.nickName,
       sex: event.sex,
       name:'',
       openId:event.userInfo.openId,
       createData: new Date()
   })
 }
}