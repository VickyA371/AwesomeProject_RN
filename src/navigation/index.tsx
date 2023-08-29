import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ** Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

// ** Types
import type {RootNavigationType} from './types';

// ** Stack / Tab creation
const Stack = createNativeStackNavigator<RootNavigationType>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
