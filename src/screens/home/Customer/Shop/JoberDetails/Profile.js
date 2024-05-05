import {FlatList, Image, View} from 'react-native';
import {Layout} from '../../../../../components/UI';
import {Text} from '../../../../../components/inputs';

const Profile = () => {
  return (
    <Layout>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text size="large">Images</Text>
        <Text>View All</Text>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: 100, height: 100, marginRight: 5, marginVertical: 5}}
          />
        )}
      />
    </Layout>
  );
};

export default Profile;
