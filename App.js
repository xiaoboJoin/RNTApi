/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  _onTrains(){
    console.log('_onTrains');
  }
  _onLogin(){
    
  }
  _onSubmit(){

  }
  _onConfirm(){

  }
  _onUncommpletedOrder(){

  }
  _onFetchOrders(){

  }
  _onOrderDetail(){

  }
  _onPayInfo(){

  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onTrains}>
          <Text style={styles.welcome}>
            查询
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onLogin}>
          <Text style={styles.welcome}>
            登录
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onSubmit}>
          <Text style={styles.welcome}>
            提交订单
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onConfirm}>
          <Text style={styles.welcome}>
            确认订单
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onUncommpletedOrder}>
          <Text style={styles.welcome}>
            未完成订单
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onFetchOrders}>
          <Text style={styles.welcome}>
            已完成订单
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onOrderDetail}>
          <Text style={styles.welcome}>
            订单详情
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPayInfo}>
          <Text style={styles.welcome}>
            获取支付信息
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
