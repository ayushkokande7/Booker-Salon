import {View} from 'react-native';
import {Layout} from '../../../../components/UI';
import {Button, Text} from '../../../../components/inputs';
import SelectDate from '../../../../components/UI/SelectDate';
import {useDispatch} from 'react-redux';
import {showAlert} from '../../../../redux/slices/alertSlice';
import IconRound from '../../../../components/UI/IconRound';
const ScheduleBooking = ({navigation}) => {
  const dis = useDispatch();
  return (
    <Layout>
      <IconRound
        onPress={() => navigation.goBack()}
        icon="arrow-left"
        color="black"
        style={{
          position: 'absolute',
          left: 10,
          top: 10,
          zIndex: 1,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#bababa',
        }}
      />
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text size="large">One Click and Book Now!</Text>
        <Button
          title="Instant Book"
          icon="wifi"
          onPress={() => {
            dis(
              showAlert({
                title: 'Thank You! \n For Your Booking',
                message:
                  'Booking Confirmed! Get ready for an \n unforgettable experience. \n See you soon!',
                icon: 'check-circle-outline',
              }),
            );
          }}
          style={{
            marginVertical: 10,
            borderRadius: 15,
            padding: 10,
            marginBottom: 20,
          }}
        />
        <Text size="large">Book on Your Schedule</Text>
        <Text size="medium">Select Date & Time</Text>
      </View>
      <SelectDate />
    </Layout>
  );
};

export default ScheduleBooking;
