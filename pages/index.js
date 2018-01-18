import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './pages.js';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();


const tabs = [{
  label: '查询',
  screen: 'RN.Home',
//  icon: require('../img/list.png'),
  title: '查询',
}, {
  label: '订单中心',
  screen: 'RN.Order',
  // icon: require('../img/swap.png'),
  title: '订单中心',
},{
  label: '个人中心',
  screen: 'RN.User',
  // icon: require('../img/swap.png'),
  title: '个人中心',
}];

// this will start our app
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
});
