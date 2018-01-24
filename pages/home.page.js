import React from 'react';
import {View,TouchableHighlight, Text} from 'react-native';
import RNProgressHUB from 'react-native-progresshub';

class Home extends React.Component {
  _onQuery(){
    this.props.navigator.showModal({
      screen: 'RN.Captcha',
      title: '验证码'
    });
  }
  _onLogin(){

    var progress = 0.1;

      RNProgressHUB.showSpinIndeterminate("开始");
      // return ;

      var interval =  setInterval(function () {
          RNProgressHUB.dismiss();
        // if(progress <= 1){
        //   RNProgressHUB.setProgress(progress);
        // } else {
        //   RNProgressHUB.dismiss();
        //   clearInterval(interval);
        // }
        // progress += 0.1;
      },5000);
   return;
    RNProgressHUB.showSimpleText("Message",2000);

  //  RNProgressHUB.setProgress(1);
    return;
    this.props.navigator.showModal({
      screen: 'RN.Login',
      title: '登录'
    });
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onQuery.bind(this)}>
          <Text style={{height: 40}}>查询</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onLogin.bind(this)}>
          <Text style={{height: 40}}>登录</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onQuery.bind(this)}>
          <Text style={{height: 40}}>查询</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default Home;
