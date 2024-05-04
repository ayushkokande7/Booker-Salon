import {View, Image} from 'react-native';
import React from 'react';
import {Text} from '../inputs';
import Micon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/Theme';
import IconRound from './IconRound';
const UserHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
        margin: 8,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <View
          style={{
            borderColor: '#0866f4',
            borderWidth: 3,
            padding: 3,
            borderRadius: 50,
            width: 67,
            height: 67,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: '100%', height: '100%', borderRadius: 50}}
          />
        </View>
        <View>
          <Text size="large">Ankit</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: -5,
            }}>
            <Micon name="location-pin" size={20} color={colors.iconFocus} />
            <Text size="medium" noOfLine={1}>
              Rz 45/333, new delhi
            </Text>
          </View>
        </View>
      </View>
      <IconRound icon="bell" size={25} />
    </View>
  );
};

export default UserHeader;
