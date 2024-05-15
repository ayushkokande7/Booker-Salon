import {View, StyleSheet, Image} from 'react-native';
import {Button, Text} from '../inputs';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Miconi from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/Theme';
import {windowWidth} from '../../utils/Dimentions';
import IconRound from './IconRound';
const VerticalCard = ({time = false}) => {
  return (
    <View style={styles.card}>
      <View>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/4203/6cf7/0ff3d3efe7d9c8c10d20a33b953f0d75?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LTPEh127OSvkfKRFnyYhztrTM~80xG8zfH9Ga6Eq57ahRV~1UBQobebFO93SxcflEH5nA1EwUiy7ZGtQadNCnpS5YHUVo6BIF-V6zb0A6d1XHs~1rktgfTFaJ3w2fvN58XXxg4g1keNJqiB6xbJgnYD6hpwXlW3ZjLr8XP5Mo8o6YR9McfFXsp8okYGEHWsy~Da3HaNkmTcuR7cosv~Pe81vLKI4oFAuZSPIWFICbJCyLmW2TLXI6igoQ-KB15O1hZU21TL4sH~3PHfjsOmoncaAer1~osRrh16YQwhuFTvI~VEsqDUsxoiqZDt-B2hJKfiYuXlJoNH0T3fDvlXWdw__',
          }}
          style={{width: 130, height: 160}}
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
          {time ? (
            <View
              style={{
                position: 'absolute',
                top: -2,
                right: -10,
                padding: 5,
                // borderRadius: 50,
                borderBottomLeftRadius: 20,
                backgroundColor: colors.iconFocus,
              }}>
              <Text size="large">94</Text>
            </View>
          ) : (
            <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
              <Miconi
                name="arrow-left-right"
                size={25}
                color={colors.primary}
              />
              <Text size="medium">5.0 KM</Text>
            </View>
          )}
        </View>
        {time ? (
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Miconi name="clock-outline" size={23} color="gray" />
            <Text size="medium">Mon, 12 Aug 2024 - 10:00 AM</Text>
          </View>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Micon name="location-pin" size={23} color={colors.iconFocus} />
            <Text size="medium">Rz 45/333, new delhi</Text>
          </View>
        )}
        <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
          <View>
            <Text size="medium" style={{fontWeight: 'bold'}}>
              Shop
            </Text>
            <Text size="medium" style={{fontWeight: 'bold'}}>
              {time ? 'Book Code' : 'City'}
            </Text>
            <Text size="medium" style={{fontWeight: 'bold'}}>
              Job ID
            </Text>
          </View>
          <View>
            <Text size="medium">Future Salon</Text>
            <Text size="medium"> {time ? ' BK 001' : 'New Delhi'}</Text>
            <Text size="medium">JB 001</Text>
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

        {time ? (
          <Button
            title="Cancel"
            mode="outline"
            style={{
              position: 'absolute',
              bottom: 10,
              right: 0,
              padding: 3,
              paddingHorizontal: 10,
            }}
          />
        ) : (
          <Button
            title="Book Now"
            mode="outline"
            style={{
              position: 'absolute',
              bottom: 10,
              right: 0,
              padding: 3,
              paddingHorizontal: 10,
            }}
          />
        )}
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
