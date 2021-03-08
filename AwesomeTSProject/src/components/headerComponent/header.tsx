import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const Header = ({route, navigation }:any) => {
   
    return (
    
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Banner', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
      />
      
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      </View>
      
    );
  };