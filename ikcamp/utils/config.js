'use strict';
const env = 'dev'

const defaultAlertMessage = '好像哪里出啦点问题'
const defaultShareText = {
  en:"ikcamp英语-学英语口语四六级"
}

const defaultImg = {
  articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
  coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
};
const defaultBarTitle ={
  en: "ikcamp"
}
let core = {
  env:env,
  defaultAlertMessage: defaultAlertMessage ,
  defaultShareText: defaultShareText['en'],
  defaultImg: defaultImg,
  defaultBarTitle: defaultBarTitle['en'],
  isDev:env === 'dev',
  isProduction: env === 'prodoction'
}

export default core;
