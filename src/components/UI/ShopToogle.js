import {View} from 'react-native';
import {Text} from '../inputs';
import Switch from '../inputs/Switch';
import colors from '../../utils/Theme';
const ShopToogle = () => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: colors.secondary,
      }}>
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          paddingV: 10,
          paddingHorizontal: 30,
          borderRadius: 15,
          gap: 3,
        }}>
        <Text size="large" style={{color: 'white'}}>
          Shop
        </Text>
        <Switch />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text size="large" style={{color: 'white', fontWeight: 'bold'}}>
          All
        </Text>
        <Text size="large" style={{color: 'white', fontWeight: 'bold'}}>
          Bookings
        </Text>
      </View>
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          paddingHorizontal: 20,
          borderRadius: 15,
          gap: 3,
        }}>
        <Text size="large" style={{color: 'white'}}>
          Booking
        </Text>
        <Switch />
      </View>
    </View>
  );
};

export default ShopToogle;
