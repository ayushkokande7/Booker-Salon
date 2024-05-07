import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../inputs';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Miconi from 'react-native-vector-icons/MaterialCommunityIcons';
import {windowWidth} from '../../utils/Dimentions';
import colors from '../../utils/Theme';
import {useNavigation} from '@react-navigation/native';
import IconRound from './IconRound';
const HorzontalCard = ({size = 75}) => {
  const navigation = useNavigation();
  const card = size === 75 ? true : false;
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          width: windowWidth(size),
          marginBottom: card ? 5 : 15,
          marginHorizontal: card ? 10 : 5,
        },
      ]}
      onPress={() => navigation.navigate('Shop')}>
      <Image
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/4203/6cf7/0ff3d3efe7d9c8c10d20a33b953f0d75?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LTPEh127OSvkfKRFnyYhztrTM~80xG8zfH9Ga6Eq57ahRV~1UBQobebFO93SxcflEH5nA1EwUiy7ZGtQadNCnpS5YHUVo6BIF-V6zb0A6d1XHs~1rktgfTFaJ3w2fvN58XXxg4g1keNJqiB6xbJgnYD6hpwXlW3ZjLr8XP5Mo8o6YR9McfFXsp8okYGEHWsy~Da3HaNkmTcuR7cosv~Pe81vLKI4oFAuZSPIWFICbJCyLmW2TLXI6igoQ-KB15O1hZU21TL4sH~3PHfjsOmoncaAer1~osRrh16YQwhuFTvI~VEsqDUsxoiqZDt-B2hJKfiYuXlJoNH0T3fDvlXWdw__',
        }}
        style={{width: '100%', height: 150}}
      />
      <IconRound
        icon="heart-outline"
        size={25}
        color={colors.primary}
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
          backgroundColor: '#ffffff99',
        }}
      />
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <Text
              size={card ? 'large' : 'medium'}
              style={{fontWeight: card ? 'bold' : 'normal'}}>
              Ankit Kumar
            </Text>
            <Micon
              name="verified"
              size={card ? 25 : 20}
              color={colors.primary}
            />
          </View>
          <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <Miconi
              name="arrow-left-right"
              size={card ? 25 : 20}
              color={colors.primary}
            />
            <Text size="medium">5 Km</Text>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
          <Micon name="location-pin" size={23} color={colors.iconFocus} />
          <Text size={card ? 'medium' : 'small'} noOfLine={1}>
            Rz 45/333, new delhi 45/333, new delhi 45/333, new delhi 45/333, new
            delhi 45/333, new delhi 45/333, new delhi
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 3,
            marginTop: 3,
          }}>
          <Miconi name="star" size={25} color={colors.yellow} />
          <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <Text size="medium" style={{fontWeight: 'bold'}}>
              4.5
            </Text>
            <Text size="medium">(36)</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 3,
    overflow: 'hidden',
  },
});
export default HorzontalCard;
