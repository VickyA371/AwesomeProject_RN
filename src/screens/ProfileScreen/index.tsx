import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// ** Types
import {RootNavigationType} from '../../navigation/types';

const ProfileScreen = (_props: NativeStackScreenProps<RootNavigationType>) => {
  return (
    <View style={styles.container}>
      <Text>{'Profile Screen'}</Text>
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

export default ProfileScreen;
