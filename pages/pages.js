import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';
import Home from './home.page.js';
import Order from './order.page.js';
import User from './user.page.js';
import Captcha from  './captcha.js';



export function registerScreens() {
  Navigation.registerComponent('RN.Home', () => Home);
  Navigation.registerComponent('RN.Order', () => Order);
  Navigation.registerComponent('RN.User', () => User);
  Navigation.registerComponent('RN.Captcha', () => Captcha);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
