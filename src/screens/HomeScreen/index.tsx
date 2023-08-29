import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// ** Types
import type {RootNavigationType} from '../../navigation/types';

const HomeScreen = (_props: NativeStackScreenProps<RootNavigationType>) => {
  return (
    <View style={styles.container}>
      <Text>{'Home Screen'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
