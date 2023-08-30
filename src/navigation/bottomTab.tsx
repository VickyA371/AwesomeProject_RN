import React, {useEffect} from 'react';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {BottomTabNavigationType, RootNavigationType} from './types';
import Loader from '../components/Loader';

const Tab = createBottomTabNavigator<BottomTabNavigationType>();

const Tab1 = (_props: BottomTabScreenProps<BottomTabNavigationType>) => {
  useEffect(() => {
    console.log('tab1 mounted');
  }, []);
  return (
    <View>
      <Text>{'Tab 1'}</Text>
    </View>
  );
};

const Tab2 = (_props: BottomTabScreenProps<BottomTabNavigationType>) => {
  useEffect(() => {
    console.log('tab2 mounted');
  }, []);
  return (
    <View>
      <Text>{'Tab 3'}</Text>
    </View>
  );
};

const Tab3 = (_props: BottomTabScreenProps<BottomTabNavigationType>) => {
  useEffect(() => {
    console.log('tab3 mounted');
  }, []);
  return (
    <View>
      <Text>{'Tab 3'}</Text>
    </View>
  );
};

const Tab4 = (_props: BottomTabScreenProps<BottomTabNavigationType>) => {
  useEffect(() => {
    console.log('tab4 mounted');
  }, []);
  return (
    <View>
      <Text>{'Tab 4'}</Text>
    </View>
  );
};

const BottomTabNavigator = (
  _props: NativeStackScreenProps<RootNavigationType>,
) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}>
      <Tab.Screen name="tab1" component={Tab1} />
      <Tab.Screen name="tab2" component={Tab2} />
      <Tab.Screen name="tab3" component={Tab3} />
      <Tab.Screen name="tab4" component={Tab4} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
