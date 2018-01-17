// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// });
//
// promise.then(function() {
//   console.log('resolved.');
// });
//
// console.log('Hi!');

import BaseModel from './model.js'
import Config from './config.js'
const queryString = require('query-string');
// import {
//   fetch
// } from 'react-native';


function init() {
  const url = 'https://kyfw.12306.cn/otn/leftTicket/init';
  var headers = Config.headers;
  var that = this;
  fetch(url, {
    method: 'GET',
    headers:headers
  }).then((response)=>{
    return response.text();
  }).then((text)=>{
    var arr = text.replace('/*<![CDATA[*/', "").replace('/*]]>*/', "").match(/var(.*)/ig);
    arr.forEach(function (item) {
      if (item.indexOf('CLeftTicketUrl')!= -1) {
        eval(item);
        that.model.CLeftTicketUrl = CLeftTicketUrl||"";
      }
      // if (item.indexOf('passport_captcha')!= -1) {
      //     eval(item);
      //     if (passport_captcha  != 'undefined') {
      //       that.model.passport_captcha = passport_captcha||"";
      //     }
      // }
      if (item.indexOf('passport_appId')!= -1) {
        eval(item);
        that.model.passport_appId = passport_appId||"";
      }
      // if (item.indexOf('passport_login')!= -1) {
      //     eval(item);
      //     if (passport_login != 'undefined') {
      //       that.model.passport_login = passport_login||"";
      //     }
      // }
      if (item.indexOf('passport_authuam')!= -1) {
        eval(item);
        that.model.passport_authuam = passport_authuam||"";
      }
      // if (item.indexOf('passport_captcha_check')!= -1) {
      //     eval(item);
      //     if (passport_captcha_check != 'undefined') {
      //       that.model.passport_captcha_check = passport_captcha_check||"";
      //     }
      // }
      if (item.indexOf('passport_authclient')!= -1) {
        eval(item);
        that.model.passport_authclient = passport_authclient||"";
      }
      if (item.indexOf('passport_loginPage')!= -1) {
        eval(item);
        that.model.passport_loginPage = passport_loginPage||"";
      }
      if (item.indexOf('passport_okPage')!= -1) {
        eval(item);
        that.model.passport_okPage = passport_okPage||"";
      }
      if (item.indexOf('passport_proxy_captcha')!= -1) {
        eval(item);
        that.model.passport_proxy_captcha = passport_proxy_captcha||"";
      }
    })
    this.next();
  });
}
function getJS() {
  const url = 'https://kyfw.12306.cn/otn/leftTicket/init';

}

function logDevice() {
  const url = 'https://kyfw.12306.cn/otn/leftTicket/init';

}

function query() {
  var that = this;
  const url = 'https://kyfw.12306.cn/otn/'+that.model.CLeftTicketUrl;
  var headers = Config.headers;
  headers.Referer=	'https://kyfw.12306.cn/otn/leftTicket/init';
  headers['Accept-Encoding'] ='gzip, deflate, br';
  headers['Accept-Language']	='zh-CN,zh;q=0.9,en;q=0.8,vi;q=0.7';
  delete headers['Accept'];
  var options = {
    'leftTicketDTO.train_date':that.options.train_date,
    'leftTicketDTO.from_station':that.options.from_station,
    'leftTicketDTO.to_station':	'BJP',
    'purpose_codes':	'ADULT',
  };
  const querystring = Config.util.queryString(options);
  var that = this;
  fetch(url+"?"+querystring, {
    method: 'GET',
    headers:headers,
  }).then((response)=>{
    return response.json();
  }).then((body)=>{
    if (body.status&&body.data.flag == 1&&body.data.result) {
      var arr = body.data.result;
      var cv = body.data.map;
      that.model.trains = arr.map(function (item) {
        var train = {};
        var cq = item.split("|");
        train.secretHBStr = cq[36];
        train.secretStr = cq[0];
        train.buttonTextInfo = cq[1];
        var cu = [];
        cu.train_no = cq[2];
        cu.station_train_code = cq[3];
        cu.start_station_telecode = cq[4];
        cu.end_station_telecode = cq[5];
        cu.from_station_telecode = cq[6];
        cu.to_station_telecode = cq[7];
        cu.start_time = cq[8];
        cu.arrive_time = cq[9];
        cu.lishi = cq[10];
        cu.canWebBuy = cq[11];
        cu.yp_info = cq[12];
        cu.start_train_date = cq[13];
        cu.train_seat_feature = cq[14];
        cu.location_code = cq[15];
        cu.from_station_no = cq[16];
        cu.to_station_no = cq[17];
        cu.is_support_card = cq[18];
        cu.controlled_train_flag = cq[19];
        cu.gg_num = cq[20] ? cq[20] : "--";
        cu.gr_num = cq[21] ? cq[21] : "--";
        cu.qt_num = cq[22] ? cq[22] : "--";
        cu.rw_num = cq[23] ? cq[23] : "--";
        cu.rz_num = cq[24] ? cq[24] : "--";
        cu.tz_num = cq[25] ? cq[25] : "--";
        cu.wz_num = cq[26] ? cq[26] : "--";
        cu.yb_num = cq[27] ? cq[27] : "--";
        cu.yw_num = cq[28] ? cq[28] : "--";
        cu.yz_num = cq[29] ? cq[29] : "--";
        cu.ze_num = cq[30] ? cq[30] : "--";
        cu.zy_num = cq[31] ? cq[31] : "--";
        cu.swz_num = cq[32] ? cq[32] : "--";
        cu.srrb_num = cq[33] ? cq[33] : "--";
        cu.yp_ex = cq[34];
        cu.seat_types = cq[35];
        cu.exchange_train_flag = cq[36];
        cu.from_station_name = cv[cq[6]];
        cu.to_station_name = cv[cq[7]];
        train.queryLeftNewDTO = cu;
        getSeatTypes(train);
        if (train.seats) {
          train.seats.forEach(function (seat) {
              seat.name = name_of_seat(seat.type);
              seat.code = code_of_seat(seat.type);
          })
        };
        return train;
      })
      that.next();
    }
    else {
      that.model.error = {
        code:-1,
        message:'获取车次列表失败，请重试！'
      }
      that.done();
    }
  });
}


function getSeatTypes(K) {
  var seats = [];
  var ct = K.queryLeftNewDTO.yz_num;
  var cq = K.queryLeftNewDTO.rz_num;
  var cx = K.queryLeftNewDTO.yw_num;
  var cv = K.queryLeftNewDTO.rw_num;
  var cw = K.queryLeftNewDTO.gr_num;
  var cu = K.queryLeftNewDTO.ze_num;
  var cz = K.queryLeftNewDTO.zy_num;
  var cA = K.queryLeftNewDTO.tz_num;
  var cr = K.queryLeftNewDTO.swz_num;
  var cy = K.queryLeftNewDTO.wz_num;
  var cs = "";
  if (ct != "--") {
    cs = "YZ";
    seats.push({
      type:cs,
      amount:ct,
    })
    // return cs
  }
  if (cu != "--") {
    cs = "ZE";
    seats.push({
      type:cs,
      amount:cu,
    })
  }
  if (cx != "--") {
    cs = "YW";
    seats.push({
      type:cs,
      amount:cx,
    })

  }
  if (cz != "--") {
    cs = "ZY";
    seats.push({
      type:cs,
      amount:cz,
    })

  }
  if (cq != "--") {
    cs = "RZ";
    seats.push({
      type:cs,
      amount:cq,
    })

  }
  if (cv != "--") {
    cs = "RW";
    seats.push({
      type:cs,
      amount:cv,
    })

  }
  if (cA != "--") {
    cs = "TZ";
    seats.push({
      type:cs,
      amount:cA,
    })
  }
  if (cw != "--") {
    cs = "GR";
    seats.push({
      type:cs,
      amount:cw,
    })

  }
  if (cr != "--") {
    cs = "SWZ";
    seats.push({
      type:cs,
      amount:cr,
    })

  }
  if (cy != "--") {
    cs = "WZ";
    seats.push({
      type:cs,
      amount:cy,
    })
  }
  K.seats = seats;
}




function name_of_seat(cr) {
  var cq = "";
  if (cr == "ZY") {
    cq = "一等座"
  }
  if (cr == "ZE") {
    cq = "二等座"
  }
  if (cr == "SWZ") {
    cq = "商务座"
  }
  if (cr == "TZ") {
    cq = "特等座"
  }
  if (cr == "YZ") {
    cq = "硬座"
  }
  if (cr == "RZ") {
    cq = "软座"
  }
  if (cr == "YW") {
    cq = "硬卧"
  }
  if (cr == "RW") {
    cq = "软卧"
  }
  if (cr == "GR") {
    cq = "高级软卧"
  }
  if (cr == "SRRB") {
    cq = "动卧"
  }
  if (cr == "YYRW") {
    cq = "高级动卧"
  }
  if (cr == "WZ") {
    cq = "无座"
  }
  return cq
}

function code_of_seat(cr) {
  var cq = "";
  if (cr == "ZY") {
    cq = "M"
  }
  if (cr == "ZE") {
    cq = "O"
  }
  if (cr == "SWZ") {
    cq = "9"
  }
  if (cr == "TZ") {
    cq = "P"
  }
  if (cr == "YZ") {
    cq = "1"
  }
  if (cr == "RZ") {
    cq = "2"
  }
  if (cr == "YW") {
    cq = "3"
  }
  if (cr == "RW") {
    cq = "4"
  }
  if (cr == "GR") {
    cq = "6"
  }
  if (cr == "WZ") {
    cq = "WZ"
  }
  if (cr == "SRRB") {
    cq = "F"
  }
  if (cr == "YYRW") {
    cq = "A"
  }
  return cq
}


function log() {

}

class TrainModel extends BaseModel {
  constructor(options,callback) {
    super()
    this.options = options;
    this.callback = callback;
    this.jobs = [init,query];
    this.model.error = {};
    this.model.trains=[];
  }
  done(){
    this.callback&&this.callback(this.model.error,this.model.trains);
  }
}






export default TrainModel
