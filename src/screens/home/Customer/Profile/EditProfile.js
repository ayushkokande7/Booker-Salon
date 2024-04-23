import {View} from 'react-native';
import {Layout} from '../../../../components/UI';
import {Image} from 'react-native';
import {TextInput} from '../../../../components/inputs';
import SelectDropdown from 'react-native-select-dropdown';

const EditProfile = () => {
  return (
    <Layout padding>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 80, height: 80, borderRadius: 50}}
      />
      <TextInput label="Name" />
      <TextInput label="Mobile No" />
      <TextInput label="Age" />
      <TextInput label="Gender" />
      <TextInput label="Address" />
    </Layout>
  );
};

export default EditProfile;
