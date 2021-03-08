/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from './src/components/headerComponent/header'
import { Banner } from './src/components/bannerComponent/banner'

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Header">
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Banner" component={Banner} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App;
