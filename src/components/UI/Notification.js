import {View, Image} from 'react-native';
import {Text} from '../inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
const Notification = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        borderColor: '#afafafc4',
        borderBottomWidth: 1,
        padding: 10,
      }}>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 70, height: 70, borderRadius: 50}}
      />
      <View>
        <Text size="large" style={{fontWeight: 'bold'}}>
          Appointment Confirmed
        </Text>
        <Text size="medium">Your Appointment is Confirmed!</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Micon name="clock-outline" size={25} color="gray" />
          <Text size="medium">Mon ,12 Aug 2024 - 10:00 AM</Text>
        </View>
      </View>
    </View>
  );
};

export default Notification;
