import {View, Image} from 'react-native';
import {Layout} from '../../../../components/UI';
import {Text} from '../../../../components/inputs';
import ProfileCard from '../../../../components/UI/ProfileCard';

const Index = ({navigation}) => {
  return (
    <Layout>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text size="large" style={{fontWeight: 'bold'}}>
          Ankit Budhori
        </Text>
        <Text size="medium">988998989</Text>
        <Text size="medium">Job ID : CM001</Text>
      </View>
      <View
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: 20,
          flex: 1,
          elevation: 5,
        }}>
        <ProfileCard
          icon="account"
          title="Edit Jober"
          color="#0762E9"
          onPress={() => navigation.navigate('EditJober')}
        />
        <ProfileCard
          icon="store"
          title="See Reviews"
          color="#f2af5f"
          onPress={() => navigation.navigate('JoberReview')}
        />
        <ProfileCard
          icon="content-cut"
          title="See Customers"
          color="#5fadf2"
          onPress={() => navigation.navigate('JoberBookings')}
        />
        <ProfileCard icon="delete" title="Delete Jober" color="#f43b41" />
      </View>
    </Layout>
  );
};

export default Index;
