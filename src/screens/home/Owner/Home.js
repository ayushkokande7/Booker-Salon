import {Image, View} from 'react-native';
import {Layout} from '../../../components/UI';
import {Button} from '../../../components/inputs';

const Home = ({navigation}) => {
  return (
    <Layout>
      <Image
        source={{
          uri: 'https://picsum.photos/536/354',
        }}
        style={{width: '100%', height: 200}}
      />
      <View style={{margin: 10}}>
        <Button
          title="Add Jober"
          onPress={() => {
            navigation.navigate('AddJober');
          }}
        />
      </View>
    </Layout>
  );
};

export default Home;
