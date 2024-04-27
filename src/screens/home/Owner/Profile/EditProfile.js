import {View, Image} from 'react-native';
import {Text, TextInput, Button} from '../../../../components/inputs';
import {Layout} from '../../../../components/UI';
import IconRound from '../../../../components/UI/IconRound';
const EditProfile = () => {
  return (
    <Layout padding style={{justifyContent: 'space-between'}}>
      <View>
        <View
          style={{
            width: 120,
            height: 120,
            marginBottom: 10,
            alignSelf: 'center',
          }}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: '100%', height: '100%', borderRadius: 100}}
          />
          <IconRound
            icon="camera"
            style={{position: 'absolute', right: 0, bottom: 0}}
          />
        </View>
        <TextInput label="Owner Name" />
        <TextInput label="Mobile No" />
        <TextInput label="Email Address" />
        <View style={{flexDirection: 'row', gap: 10}}>
          <View style={{flex: 1}}>
            <TextInput label="Age" />
          </View>
          <View style={{flex: 1}}>
            <TextInput label="Gender" />
          </View>
        </View>
      </View>
      <Button title="Update Profile" />
    </Layout>
  );
};

export default EditProfile;
