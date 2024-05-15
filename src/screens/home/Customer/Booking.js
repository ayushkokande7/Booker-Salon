import {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '../../../components/inputs';
import FlatListComponent from '../../../components/Layout/FlatList';
import {VerticalCard} from '../../../components/UI';
const Booking = () => {
  const [booking, setBooking] = useState(0);
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 60,
          paddingTop: 10,
          backgroundColor: '#1a6fee',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => setBooking(0)}
          style={{
            flex: 0.5,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 5,
            borderColor: booking === 0 ? 'white' : '#ffffff00',
          }}>
          <Text
            size="large"
            style={{
              color: 'white',
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBooking(1)}
          style={{
            flex: 1,
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 5,
            borderColor: booking === 1 ? 'white' : '#ffffff00',
          }}>
          <Text size="large" style={{color: 'white'}}>
            Booked
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBooking(2)}
          style={{
            flex: 1,
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 5,
            borderColor: booking === 2 ? 'white' : '#ffffff00',
          }}>
          <Text size="large" style={{color: 'white'}}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBooking(3)}
          style={{
            flex: 1,
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 5,
            borderColor: booking === 3 ? 'white' : '#ffffff00',
          }}>
          <Text size="large" style={{color: 'white'}}>
            Cancelled
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 110}}>
        <FlatListComponent renderItem={() => <VerticalCard time={true} />} />
      </View>
    </View>
  );
};

export default Booking;
