import React from 'react';
import {View, Text,TouchableHighlight,TextInput} from 'react-native';
import API from '../api/api.js';

class Login extends React.Component {
  static navigatorButtons = {
    leftButtons: [
      {
        title: '关闭', // for a textual button, provide the button title (label)
        id: 'close', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        //disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      }
    ]
  }
  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') {
      // this is the event type for button presses
      if (event.id == 'close') {
        // this is the same id field from the static navigatorButtons definition
        this.props.navigator.dismissModal();
      }

    }
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:''
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  _onLogin(){
    this.props.navigator.showModal({
      screen: 'RN.Captcha',
      title: '验证码'
    });
  //  AlertIOS.alert('提示', this.state.username+this.state.password);
  }
  render() {
    return (
      <View>
        <TextInput
         style={{height: 40}}
         placeholder="用户名"
         onChangeText={(text) => this.setState({username:text})}
       />
       <TextInput
           style={{height: 40}}
           placeholder="密码"
           onChangeText={(text) => this.setState({password:text})}
         />

       <TouchableHighlight onPress={this._onLogin.bind(this)}>
         <Text>
           登录
         </Text>
       </TouchableHighlight>
      </View>
    );
  }
}

export default Login;
