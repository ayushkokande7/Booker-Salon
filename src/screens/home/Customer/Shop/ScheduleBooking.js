import {View} from 'react-native';
import {Layout} from '../../../../components/UI';
import {Button, Text} from '../../../../components/inputs';
import DatePicker from 'react-native-date-picker';
const ScheduleBooking = () => {
  return (
    <Layout>
      <View style={{alignItems: 'center'}}>
        <Text size="large">Book On Your Schedule</Text>
        <Text size="medium">Select Date & Time</Text>
      </View>
      <View>
        <DatePicker date={new Date()} mode={'datetime'} />
      </View>
      <Button title="Book Now" />
    </Layout>
  );
};

export default ScheduleBooking;
