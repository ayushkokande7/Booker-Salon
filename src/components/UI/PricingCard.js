import {View, Image} from 'react-native';
import React from 'react';
import Text from '../inputs/Text';

const PricingCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#ffffff',
        elevation: 3,
        borderRadius: 10,
        marginVertical: 10,
      }}>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 60, height: 60}}
      />
      <Text size="large">Haircut</Text>
      <Text size="large">$20</Text>
    </View>
  );
};

export default PricingCard;
