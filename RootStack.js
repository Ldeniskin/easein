import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CostScreen from './screens/CostScreen';
export default RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Cost:{
    screen: CostScreen
  }
},{ headerMode: 'none',});
