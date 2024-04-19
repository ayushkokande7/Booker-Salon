import {Layout} from '../../../components/UI';
import {View, Image} from 'react-native';
const Profile = () => {
  return (
    <Layout>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{width: 100, height: 100}}
        />
      </View>
    </Layout>
  );
};

export default Profile;
