import {FlatList, View} from 'react-native';
import React from 'react';
import {Text} from '../inputs';
import Icon from '../UI/Icon';
import Caterogy from '../../utils/Categories';
const Categories = () => {
  return (
    <View style={{paddingHorizontal: 5}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text size="large" style={{fontWeight: 'bold'}}>
          Categories
        </Text>
        <Text size="medium">View All </Text>
      </View>
      <FlatList
        data={Caterogy}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Icon data={item} />}
        style={{marginTop: 10}}
      />
    </View>
  );
};

export default Categories;
