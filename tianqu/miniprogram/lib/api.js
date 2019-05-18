const QQ_MAP_KEY = 'PZFBZ-PKVKX-CUO44-ZOODI-UOQDQ-RUFVX'

wx.cloud.init({
  env: 'li123-zgxbt'
})

const db = wx.cloud.database();
export  const addEmotion = (openid,emotion) =>{
     return db.collection('diary').add({
         data: {
           openid,
           emotion,
           tsModified: Date.now()
         }
     })
}
//添加心情

//获取位置
export const geocoder = (lat,lon,success = () =>{},fail =() =>{}) =>{
  return  wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data:{
      location:`${lat},${lon}`,
      key: QQ_MAP_KEY ,
      get_poi:0
    },
    success,
    fail
  })
}
//获取天气
export const getWeather = (lat,lon) =>{
  return wx.cloud.callFunction({
    name:'he-weather',
    data:{
      lat,
      lon
    }
  })
}
