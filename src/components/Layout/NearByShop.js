import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {HorzontalCard} from '../UI';

const NearByShop = () => {
  return (
    <FlatList
      data={[1, 2, 3]}
      renderItem={({item}) => <HorzontalCard />}
      keyExtractor={item => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginRight: 15}}
    />
  );
};

export default NearByShop;
