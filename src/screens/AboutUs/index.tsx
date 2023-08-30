import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text>{'About Us'}</Text>
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

export default AboutUs;
