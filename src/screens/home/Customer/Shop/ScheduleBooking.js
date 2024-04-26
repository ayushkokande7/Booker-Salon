import {View} from 'react-native';
import {Layout} from '../../../../components/UI';
import {Button, Text} from '../../../../components/inputs';

const ScheduleBooking = () => {
  return (
    <Layout>
      <View style={{alignItems: 'center'}}>
        <Text size="large">Book On Your Schedule</Text>
        <Text size="medium">Select Date & Time</Text>
      </View>
      <View>
        
      </View>
      <Button title="Book Now" />
    </Layout>
  );
};

export default ScheduleBooking;
