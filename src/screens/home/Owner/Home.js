import {Image, View, TouchableOpacity} from 'react-native';
import {Layout} from '../../../components/UI';
import {Button, Text} from '../../../components/inputs';

const Home = ({navigation}) => {
  return (
    <Layout>
      <View>
        <Image
          source={{
            uri: 'https://picsum.photos/536/354',
          }}
          style={{width: '100%', height: 200}}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 5,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{gap: 5}}>
            <Text
              size="large"
              style={{
                backgroundColor: '#ffffffcb',
                borderTopRightRadius: 10,
                paddingHorizontal: 5,
                borderBottomRightRadius: 10,
              }}>
              Shop Name
            </Text>
            <Text
              size="medium"
              style={{
                backgroundColor: '#ffffffcb',
                borderTopRightRadius: 10,
                paddingHorizontal: 5,
                borderBottomRightRadius: 10,
              }}>
              Shop ID: SP001
            </Text>
          </View>
        </View>
      </View>
      <View style={{margin: 10, flex: 1}}>
        <Button
          title="Add Jober"
          icon="plus-circle"
          onPress={() => {
            navigation.navigate('AddJober');
          }}
        />
        <View
          style={{
            backgroundColor: '#aba8a8',
            flex: 1,
            padding: 10,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{
              backgroundColor: '#ef6d03',
              padding: 5,
              borderRadius: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text size="medium">Image</Text>
            <Text size="medium">Name</Text>
            <Text size="medium">Today Booking</Text>
            <Text size="medium">Compete</Text>
            <Text size="medium">Live</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Jober')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              marginVertical: 5,
              backgroundColor: '#d74cfa',
              padding: 5,
              borderRadius: 50,
            }}>
            <Image
              source={{uri: 'https://picsum.photos/536/354'}}
              style={{width: 60, height: 60, borderRadius: 50}}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: '#95ea50',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
                borderRadius: 20,
                justifyContent: 'space-between',
              }}>
              <Text size="medium">ankit</Text>
              <Text size="medium">12</Text>
              <Text size="medium">5</Text>
              <Text size="medium">7</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Home;
