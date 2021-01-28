/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import StartDaySortContainer from './src/containers/StartDaySortContainer';
import EndDaySortContainer from './src/containers/EndDaySortContainer';
import ItemSortContainer from './src/containers/ItemSortContainer';
import AddItemContainer from './src/containers/AddItemContainer';

const App = createBottomTabNavigator({
  One: {
    screen: StartDaySortContainer,
  },
  Two: {
    screen: EndDaySortContainer,
  },
  Three: {
    screen: ItemSortContainer,
  },
  Four: {
    screen: AddItemContainer,
  },
});

export default createAppContainer(App);
