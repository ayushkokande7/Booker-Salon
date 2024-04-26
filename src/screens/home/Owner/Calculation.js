import {View} from 'react-native';
import {Layout} from '../../../components/UI';
import {Button, Text} from '../../../components/inputs';

const TextC = ({label, color}) => {
  return (
    <Text
      size="large"
      style={{
        flex: 1,
        padding: 12,
        textAlign: 'center',
        color: 'white',
        borderRadius: 50,
        backgroundColor: color,
      }}>
      {label}
    </Text>
  );
};
const Calculation = () => {
  return (
    <Layout padding style={{justifyContent: 'space-evenly'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <TextC label="Total Jobers" color="#9747FF" />
        <TextC label="1" color="#3DCEB8" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <TextC label="Bookings" color="#1713DB" />
        <TextC label="65" color="#3DCEB8" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <TextC label="Complete" color="#17a017" />
        <TextC label="123" color="#3DCEB8" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <TextC label="Pending" color="#FE5073" />
        <TextC label="12" color="#3DCEB8" />
      </View>
      <Button title="Report" />
    </Layout>
  );
};

export default Calculation;
