import React from 'react';
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Pressable, Text} from 'react-native';

// ** Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTabNavigator from './bottomTab';
import AppContent from '../screens/AppContent';
import CodeSplit from '../screens/CodeSplit';

// ** MISC
import type {RootNavigationType} from './types';

// ** Stack / Tab creation
const Stack = createNativeStackNavigator<RootNavigationType>();

const homeScreenStackOptions:
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<RootNavigationType, 'home'>;
      navigation: NavigationProp<RootNavigationType>;
    }) => NativeStackNavigationOptions)
  | undefined = ({navigation}) => {
  const onProfilePress = () => {
    navigation.navigate('profile');
  };
  return {
    headerRight: ({tintColor}) => {
      return (
        <Pressable onPress={onProfilePress}>
          <Text style={{color: tintColor}}>{'Profile'}</Text>
        </Pressable>
      );
    },
  };
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={homeScreenStackOptions}
        />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="bottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="appContent" component={AppContent} />
        <Stack.Screen name="codeSplit" component={CodeSplit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
