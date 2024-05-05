import {Image, View, TouchableOpacity} from 'react-native';
import {Layout} from '../../../components/UI';
import {Button, Text} from '../../../components/inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../utils/Theme';
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
            backgroundColor: '#2E7EF6',
            padding: 5,
            borderRadius: 50,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text size="small" style={{color: 'white'}}>
            Image
          </Text>
          <Text size="small" style={{color: 'white'}}>
            Name
          </Text>
          <Text size="small" style={{color: 'white'}}>
            Today Booking
          </Text>
          <Text size="small" style={{color: 'white'}}>
            Compete
          </Text>
          <Text size="small" style={{color: 'white'}}>
            Live
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#f0f0f0',
            elevation: 15,
            flex: 1,
            padding: 10,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Jober')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              marginVertical: 5,
              backgroundColor: '#3DCEB8',
              padding: 5,
              elevation: 10,
              borderRadius: 50,
            }}>
            <View>
              <Image
                source={{uri: 'https://picsum.photos/536/354'}}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
              <Micon
                name="check-decagram"
                size={20}
                color={colors.primary}
                style={{position: 'absolute', top: 0, right: 0}}
              />
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: '#4bebd3ff',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
                borderRadius: 20,
                justifyContent: 'space-between',
                shadowColor: '#000',

                elevation: 20,
              }}>
              <Text size="medium">ankit</Text>
              <Text size="medium">12</Text>
              <Text size="medium">5</Text>
              <Text
                size="medium"
                style={{
                  backgroundColor: colors.iconFocus,
                  padding: 3,
                  paddingHorizontal: 5,
                  borderRadius: 50,
                }}>
                1
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Home;
