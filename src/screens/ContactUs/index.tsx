import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <Text>{'Contact Us'}</Text>
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

export default ContactUs;
