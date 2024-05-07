import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from '../inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/Theme';
import {useNavigation} from '@react-navigation/native';
const UserHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
        margin: 8,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <View
          style={{
            borderColor: '#0866f4',
            borderWidth: 3,
            padding: 3,
            borderRadius: 50,
            width: 67,
            height: 67,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: '100%', height: '100%', borderRadius: 50}}
          />
        </View>
        <View>
          <Text size="large">Ankit</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: -5,
            }}>
            <Micon name="map-marker" size={23} color={colors.iconFocus} />
            <Text size="medium" noOfLine={1}>
              Rz 45/333, new delhi
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notification');
        }}
        style={{
          padding: 8,
          borderColor: '#626262',
          borderWidth: 1,
          borderRadius: 50,
        }}>
        <Micon name="bell-badge-outline" size={28} />
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            padding: 5,
            backgroundColor: 'red',
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserHeader;
