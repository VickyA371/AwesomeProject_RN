import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

/// ** Components
import CardItem from '../../components/CardItem';
import TitleText from '../../components/TitleText';
import PriceText from '../../components/PriceText';

// ** MISC
import type {RootNavigationType} from '../../navigation/types';
import colors from '../../constants/colors';
import {homeScreenData} from '../../data';

const HomeScreen = (_props: NativeStackScreenProps<RootNavigationType>) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const renderItemHandler = useCallback(({item}: any) => {
    console.log('render item');
    const {id, name, price} = item;
    return (
      <CardItem
        id={id}
        title={name}
        price={price}
        onTitlePress={() => {
          // for (let i = 0; i < 100000000; i++) {}
          setTitle(name);
        }}
        onPricePress={() => {
          // for (let i = 0; i < 100000000; i++) {}
          setPrice(price);
        }}
      />
    );
  }, []);

  const newPriceText = useMemo(() => `${Math.random() + price}/-`, [price]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TitleText title={title} />
        <PriceText price={newPriceText} />
      </View>
      <FlatList
        data={homeScreenData}
        contentContainerStyle={styles.listContentContainerStyle}
        renderItem={renderItemHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 15,
  },
  listContentContainerStyle: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});

export default HomeScreen;
