import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from '../inputs';
import {useNavigation} from '@react-navigation/native';
import colors from '../../utils/Theme';
const UserCard = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 5,
        marginVertical: 5,
        alignItems: 'center',
      }}>
      <Text
        size="large"
        style={{
          backgroundColor: colors.secondary,
          padding: 10,
          paddingHorizontal: 10,
          borderBottomRightRadius: 50,
          borderTopRightRadius: 50,
        }}>
        1
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.secondary,
          borderTopStartRadius: 50,
          borderBottomStartRadius: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={{uri: 'https://picsum.photos/536/354'}}
            style={{width: 60, height: 60, borderRadius: 50}}
          />
          <Text size="large">Ankit</Text>
        </View>
        <Text size="medium">2:30pm</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SetTime')}
          style={{
            padding: 13,
            backgroundColor: '#00FF01',
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
          }}>
          <Text size="large">Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCard;
