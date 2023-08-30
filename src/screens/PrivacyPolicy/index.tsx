import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <Text>{'Privacy Policy'}</Text>
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

export default PrivacyPolicy;
