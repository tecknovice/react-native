import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation"

import Create from './components/Create'
import List from './components/List'

const MainNavigator = createStackNavigator(
  {
    List: { screen: List },
    Create: { screen: Create }
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6200EE',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.2
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 24
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
