import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

// ** Types
import colors from '../../constants/colors';

const CardItem = (props: any) => {
  const {id, title, price, onTitlePress, onPricePress} = props;
  return (
    <View key={id} style={styles.container}>
      <Pressable onPress={onTitlePress}>
        <Text>{title}</Text>
      </Pressable>
      <Pressable onPress={onPricePress}>
        <Text>{price}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
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
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CardItem;
