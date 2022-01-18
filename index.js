/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './App2';

// import App from './App3'; // STACK NAVIGATION screen navigation
import App from './App5'; // Bottom Tabs Navigator
// import App from './App4'; // Drawer Navigator

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
