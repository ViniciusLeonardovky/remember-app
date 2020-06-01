import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#7539dd" />
    <Routes />
  </NavigationContainer>
);

export default App;
