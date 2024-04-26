import {View} from 'react-native';
import {Layout} from '../../../../../components/UI';
import BookingCard from '../../../../../components/UI/BookingCard';
import {Button} from '../../../../../components/inputs';
import {useNavigation} from '@react-navigation/native';
const AllBookings = () => {
  const navigation = useNavigation();
  return (
    <Layout padding>
      <BookingCard />
      <Button
        onPress={() => navigation.navigate('ScheduleBooking')}
        title="Schedule Your Booking"
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          padding: 10,
        }}
      />
    </Layout>
  );
};

export default AllBookings;
