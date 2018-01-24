import BaseModel from './model.js'
import Config from './config.js'
import CookieManager from 'react-native-cookies';
import RNFetchBlob from 'react-native-fetch-blob'
// class OrderCaptchaModel extend BaseModel {
//   constructor() {
//     super()
//   }
// }

function loginInit() {
  var that = this;
  const url = 'https://kyfw.12306.cn/otn/login/init';
  var headers = Config.headers;
  delete headers['Cookie'];
  delete headers['Referer'];

  fetch(url,{
    method: 'GET',
    headers:headers,
  }).then((response)=>{
    return response.text();
  }).then((body)=>{
    var arr = body.replace('/*<![CDATA[*/', "").replace('/*]]>*/', "").match(/var(.*)/ig);
    arr.forEach(function (item) {
      // var isMobileCheck = 'N';
      // var passport_appId = 'otn';
      // var passport_login = 'https://kyfw.12306.cn/passport/web/login';
      // var passport_captcha = 'https://kyfw.12306.cn/passport/captcha/captcha-image';
      // var passport_authuam = 'https://kyfw.12306.cn/passport/web/auth/uamtk';
      // var passport_captcha_check = 'https://kyfw.12306.cn/passport/captcha/captcha-check';
      // var passport_authclient = 'uamauthclient';
      // var passport_loginPage = 'login/init';
      // var passport_okPage = 'index/initMy12306';
      // var passport_proxy_captcha =  'login/init';

      if (item.indexOf('passport_appId')!= -1) {
        var passport_appId;
        eval(item);
        if (passport_appId) {
          that.model.passport_appId = passport_appId||"";
        }

      }
      if (item.indexOf('passport_login')!= -1) {
        var passport_login;
        eval(item);
        if (passport_login) {
          that.model.passport_login = passport_login||"";
        }
      }
      if (item.indexOf('passport_captcha')!= -1) {
        var passport_captcha;
        eval(item);
        if (passport_captcha) {
          that.model.passport_captcha = passport_captcha||"";
        }
      }
      if (item.indexOf('passport_authuam')!= -1) {
        var passport_authuam
        eval(item);
        if (passport_authuam) {
          that.model.passport_authuam = passport_authuam||"";
        }
      }
      if (item.indexOf('passport_captcha_check')!= -1) {
        var passport_captcha_check
        eval(item);
        if (passport_captcha_check) {
          that.model.passport_captcha_check = passport_captcha_check||"";
        }
      }
      if (item.indexOf('passport_authclient')!= -1) {
        var passport_authclient;
        eval(item);
        if (passport_authclient) {
          that.model.passport_authclient = passport_authclient||"";
        }
      }
      if (item.indexOf('passport_loginPage')!= -1) {
        var passport_loginPage
        eval(item);
        if (passport_loginPage) {
          that.model.passport_loginPage = passport_loginPage||"";
        }
      }
      if (item.indexOf('passport_okPage')!= -1) {
        var  passport_okPage
        eval(item);
        if (passport_okPage) {
          that.model.passport_okPage = passport_okPage||"";
        }
      }
      if (item.indexOf('passport_proxy_captcha')!= -1) {
        var passport_proxy_captcha
        eval(item);
        if (passport_proxy_captcha) {
          that.model.passport_proxy_captcha = passport_proxy_captcha||"";
        }
      }
    })


    var pattern = new RegExp('<script[^>]*>(.*?)<\/script>', 'g');
    //匹配单个script标签内容的写法
    var matchArr = body.match(pattern);
    that.model.srcArray = [];
    matchArr.forEach(function (item) {
      let matched = item.match(/src/);
      if (matched) {
        let arr = item.split(' ');
        if (arr.length) {
          src = arr[1].replace(/"/g,'').split('=');
          that.model.srcArray.push(src[1]);
        }
      }
    })
    that.next();
  });
}


function getJS() {

}

function getDynamicJs() {
  var that = this;
  var path = '';
  if (that.model.srcArray) {
    that.model.srcArray.forEach(function (item) {
      if (item.match(/dynamicJs/)) {
        path = item;
      }
    })
  }
  else {
    that.next();
  }
  var headers = Config.headers;
  delete headers['Cookie'];
  delete headers['Referer'];
  fetch('https://kyfw.12306.cn'+path,{
    method: 'GET',
    headers:headers,
  }).then((res)=>{
    that.next();
  });
}


function getCaptchaImage() {
  var that = this;
  const url = that.model.passport_captcha;
  var options = {
    'login_site':'E',
    'module':'login',
    'rand':'sjrand',
  };
  var headers = Config.headers;
  delete headers['Cookie'];
  delete headers['Referer'];
  const querystring = Config.util.queryString(options);
  RNFetchBlob.fetch('GET', url+"?"+querystring+"&"+Math.random(), headers)
  .then((res) => {
    // the conversion is done in native code
    that.model.captchaData = res.base64();
    // // the following conversions are done in js, it's SYNC
    // let text = res.text()
    // let json = res.json()
    that.next();
  });
}




class LoginCaptchaModel extends BaseModel {
  constructor(options,callback) {
    super()
    this.options = options;
    this.callback = callback;
    this.jobs = [loginInit,getDynamicJs,getCaptchaImage];
    this.model.error = {};
    this.model.captchaData='';
  }
  done(){
    this.callback&&this.callback(this.model.error,this.model.captchaData);
  }
}


function GetCaptcha(options,callback) {
  return (new LoginCaptchaModel(options,callback)).start();
}


function checkRandCode() {

}

function VerifyRandCode(options,callback) {


}


export {GetCaptcha,VerifyRandCode}
