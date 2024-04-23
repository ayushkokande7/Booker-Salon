import {View, Image} from 'react-native';
import {Text} from '../inputs';

const Notification = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
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
          Ankit Kumar
        </Text>
        <Text size="medium">Your Appointment is Confirmed</Text>
        <Text size="medium">Mon ,12 Aug 2024 - 10:00 AM</Text>
      </View>
    </View>
  );
};

export default Notification;
