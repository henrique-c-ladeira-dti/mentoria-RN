import React from 'react';
import {CharacterListScreen} from '../screens/CharacterListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EpisodesListScreen} from '../screens/EpisodesListScreen';

const BottomTab = createBottomTabNavigator();

export const Routes: React.FC = () => (
  <NavigationContainer>
    <BottomTab.Navigator>
      <BottomTab.Screen name="Character List" component={CharacterListScreen} />
      <BottomTab.Screen name="Episodes List" component={EpisodesListScreen} />
    </BottomTab.Navigator>
  </NavigationContainer>
);
