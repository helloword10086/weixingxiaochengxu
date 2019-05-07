const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')
let appid ='wxb9733166f598026f';
let secret ='d42aa82c5b7613d8d544bbab6e976e63';

let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token='
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
// https:https://api.weixin.qq.com/wxa/msg_sec_check?access_token
// 云函数入口函数
exports.main = async (event, context) => {
    // 令牌许可
let tokenResponse = await got(tokenUrl);
let token = JSON.parse(tokenResponse.body).access_token;
let checkResponse = await got(msgCheckUrl + token,{
    body:JSON.stringify({
        content:event.text
    })
});
  console.log(checkResponse)
  // return checkResponse.body;
  return event.a + event.b
}
