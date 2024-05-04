import {View, StyleSheet, Image} from 'react-native';
import {Text} from '../inputs';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Miconi from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/Theme';
import {windowWidth} from '../../utils/Dimentions';
import IconRound from './IconRound';
const VerticalCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/e48b/46ce/c7c60878cce2c105741b5770cca36c76?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfGj~i6yi1DwQuaiphNMSGN~QUggyPmfFoUMYur2V3wC9oHWw1BZCeF5n3GZzWkHeZCIM9mGVPOtCkcaBzaqNAbN~59wrwON05nM3qmsD96e2SLUcIPtVNWYr~J9f7JiwSShpR2Z9Btrp1aIktO0tAiJi68o-SMatto4opqzByB0J8V3G8r9Wjj9biHfIqI-9TYN7VKGaPbLlxqynxG8Ngi1aAcY4DvGaSZB4Kecp2BS-UjRX7pVX5dri1BIrfvgfxIxKiuDPeadl~wJKYDO0C~r~61GX8uLedG47eLhiTtTr3J4DHkg-Ig3Mma4Ij-6xYQH72zoPwidxLWi7zxXyw__',
          }}
          style={{width: 130, height: 150}}
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
      </View>
      <View
        style={{
          flex: 1,
          marginRight: 10,
          justifyContent: 'space-evenly',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <Text size="large" style={{fontWeight: 'bold'}}>
              Ankit Kumar
            </Text>
            <Micon name="verified" size={25} color={colors.primary} />
          </View>
          <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <Miconi name="arrow-left-right" size={25} color={colors.primary} />
            <Text size="medium">5.0 KM</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Micon name="location-pin" size={23} color={colors.iconFocus} />
          <Text size="medium">Rz 45/333, new delhi</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
          <View>
            <Text size="medium" style={{fontWeight: 'bold'}}>
              Shop
            </Text>
            <Text size="medium" style={{fontWeight: 'bold'}}>
              City
            </Text>
          </View>
          <View>
            <Text size="medium">Future Salon</Text>
            <Text size="medium">New Delhi</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
          <Miconi name="star" size={25} color={colors.yellow} />
          <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <Text size="medium" style={{fontWeight: 'bold'}}>
              4.5
            </Text>
            <Text size="medium">(34)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: windowWidth(94),
    marginBottom: 10,
    alignSelf: 'center',
    elevation: 3,
    flexDirection: 'row',
    gap: 10,
    overflow: 'hidden',
  },
});

export default VerticalCard;
