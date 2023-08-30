import React from 'react';
import {Text} from 'react-native';

const PriceText = (props: any) => {
  console.log('render price text');
  const {price} = props;
  return <Text>{price || 'Selected price here'}</Text>;
};

export default React.memo(PriceText, (prevProps, nextProps) => {
  const {price: oldPrice} = prevProps;
  const {price: newPrice} = nextProps;

  return oldPrice === newPrice;
});
