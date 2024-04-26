import {View, Image} from 'react-native';
import {Text, TextInput, Button} from '../../../../components/inputs';
import IconRound from '../../../../components/UI/IconRound';
import {Layout} from '../../../../components/UI';
const EditShop = () => {
  return (
    <Layout padding>
      <View>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{width: '100%', height: 200}}
        />
        <IconRound
          icon="plus"
          style={{position: 'absolute', right: 10, bottom: 10}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text size="large">Shop name</Text>
        <Text size="medium">Shop ID: SP001</Text>
      </View>

      <View style={{padding: 10}}>
        <TextInput label="Shop Name" />
        <TextInput label="Shop Address" />
        <TextInput label="City" />
        <TextInput label="State" />
        <TextInput label="Pin Code" />
      </View>
      <Button title="Update Profile" />
    </Layout>
  );
};

export default EditShop;
