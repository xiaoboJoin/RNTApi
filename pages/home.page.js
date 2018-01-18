import React from 'react';
import {View,TouchableWithoutFeedback, Text} from 'react-native';

class Home extends React.Component {
  _onQuery(){
    this.props.navigator.showModal({
      screen: 'RN.Captcha',
      title: '验证码'
    });
  }
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this._onQuery.bind(this)}>
          <Text>查询</Text>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}

export default Home;
