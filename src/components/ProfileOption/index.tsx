import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

// ** Types
import colors from '../../constants/colors';

const ProfileOption = (props: any) => {
  const {text, onPress} = props;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ProfileOption;
