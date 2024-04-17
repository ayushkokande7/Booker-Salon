import {View, Image} from 'react-native';
import React from 'react';
import {Text} from '../inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
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
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{width: 55, height: 55, borderRadius: 50}}
        />
        <View>
          <Text size="medium" title="Ankit" />
          <Text size="medium" title="Rz 45/333, new delhi" noOfLine={1} />
        </View>
      </View>
      <View>
        <Micon name="bell" size={25} />
      </View>
    </View>
  );
};

export default UserHeader;
