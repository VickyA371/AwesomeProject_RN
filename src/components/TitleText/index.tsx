import React from 'react';
import {Text} from 'react-native';

const TitleText = (props: any) => {
  console.log('render title text');
  const {title} = props;
  return <Text>{title || 'Selected title here'}</Text>;
};

export default React.memo(TitleText);
