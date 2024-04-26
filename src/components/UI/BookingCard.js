import {View, Image} from 'react-native';
import {Text} from '../inputs';
const BookingCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <Text size="medium">1</Text>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 60, height: 60, borderRadius: 50}}
      />
      <View style={{alignItems: 'center'}}>
        <Text size="medium">Ankit Kumar</Text>
        <Text size="medium">ID: SP001</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text size="medium">Time</Text>
        <Text size="medium">1:30 PM</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text size="medium">Estimated Time</Text>
        <Text size="medium">1:30 PM</Text>
      </View>
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: '#0af70a',
          borderRadius: 50,
        }}
      />
    </View>
  );
};

export default BookingCard;
