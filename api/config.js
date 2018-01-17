import CookieManager from 'react-native-cookies';
import util from './api.util.js';

var Config= {
  cookies:{
    'tk':	'Aj6Z5YWbTMRG2RjaZl0-OCDltrKpas_dkHfDa4SrTRoy01110',
    'JSESSIONID'	:'94480F53E0F6C3CAEF6BF9DC1F3B3E19',
    'RAIL_OkLJUJ'	:'FDa6LbZ-wLExbhyHDwUdPpLC8vDRejqI',
    '_jc_save_wfdc_flag'	:'dc',
    '_jc_save_showIns':	'true',
    'RAIL_EXPIRATION':	'1516245538515',
    'RAIL_DEVICEID':	'Q4pcRy2xvUDoC0OqneUzl-KkLHuGD171DAnpQ17Ipwxc7mgTrs89lZQrcxO1tzFcD7jci83ourPC6-sGnbyYcFfNt50n33h4ovofPuw8NeeSxXH161jnFEoxV8SSzITZ06kkcv3ewgIelKhVnUedPUYvAEK5mR6R',
    '_jc_save_toDate'	:'2018-01-15',
    'route':	'495c805987d0f5c8c84b14f60212447d',
    '_jc_save_fromDate'	:'2018-02-13',
    'BIGipServerpassport'	:'954728714.50215.0000',
    'current_captcha_type'	:'Z',
    'BIGipServerotn'	:'1742274826.24610.0000',
    '_jc_save_fromStation':	'%u5357%u660C%2CNCG',
    '_jc_save_toStation'	:'%u8336%u9675%2CCDG',
    'acw_tc'	:'AQAAAA6xP2yRkgkAe+tjmQuY++doyycc',
  },
  headers:{
    'Host':	'kyfw.12306.cn',
    'Cache-Control':	'no-cache',
    'Accept'	:'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'X-Requested-With'	:'XMLHttpRequest',
    'If-Modified-Since'	:'0',
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
    'Referer':	'https://kyfw.12306.cn/otn/index/init',
    'Cookie':'JSESSIONID=9C9641177D69A4382A7E5D29628DC309; BIGipServerotn=1105723658.64545.0000; route=9036359bb8a8a461c164a04f8f50b252',
    'Accept-Encoding':	'gzip, deflate, br',
    'Accept-Language':	'zh-CN,zh;q=0.9,en;q=0.8,vi;q=0.7',
  },
};
Config.cookieSerialize = function(obj) {
  var str = [];
  for(var p in obj)
  if (obj.hasOwnProperty(p)) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  }
  return str.join("&");
};
Config.cookieParse = function(str){
  var arr = str.split('&');
  arr.forEach(function (item) {
    var itemArr = item.split('=');
    Config.cookies[itemArr[0]] = itemArr[1];
  })
};

// Config.getCookie = function(options,cb){
//   var arr = str.split('&');
//   arr.forEach(function (item) {
//     var itemArr = item.split('=');
//     Config.cookies[itemArr[0]] = itemArr[1];
//   })
// };
Config.util = util;

export default Config;
