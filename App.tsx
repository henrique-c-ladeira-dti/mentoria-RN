/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {CharacterListScreen} from './src/screens/CharacterListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EpisodesListScreen} from './src/screens/EpisodesListScreen';

const BottomTab = createBottomTabNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <BottomTab.Navigator>
      <BottomTab.Screen name="Character List" component={CharacterListScreen} />
      <BottomTab.Screen name="Episodes List" component={EpisodesListScreen} />
    </BottomTab.Navigator>
  </NavigationContainer>
);

export default App;
