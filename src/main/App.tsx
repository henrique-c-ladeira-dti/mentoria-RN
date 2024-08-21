/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Routes} from './Routes';
import {Provider} from 'react-redux';
import store from '../store/store';

if (__DEV__) {
  require('../utils/reactotron');
}

const App: React.FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
