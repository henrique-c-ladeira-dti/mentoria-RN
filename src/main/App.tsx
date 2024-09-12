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
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

if (__DEV__) {
  require('../utils/reactotron');
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
