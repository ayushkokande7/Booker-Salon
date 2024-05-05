import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../inputs/Text';

const PricingCard = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#ffffff',
        elevation: 15,
        borderRadius: 10,
        marginVertical: 10,
      }}>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 60, height: 60}}
      />
      <Text size="large">Haircut</Text>
      <Text size="large">$20</Text>
    </TouchableOpacity>
  );
};

export default PricingCard;
