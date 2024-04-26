import {View} from 'react-native';
import {Layout} from '../../../components/UI';
import {Button, TextInput} from '../../../components/inputs';

const AddJober = () => {
  return (
    <Layout padding style={{justifyContent: 'space-between'}}>
      <View>
        <TextInput label="Name" />
        <TextInput label="Mobile No." />
        <Button title="Send OTP" />
        <TextInput label="Enter OTP" />
      </View>
      <Button title="Add Jober" />
    </Layout>
  );
};

export default AddJober;
