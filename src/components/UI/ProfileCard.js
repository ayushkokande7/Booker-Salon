import {View, TouchableOpacity} from 'react-native';
import {Text} from '../inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileCard = ({icon, title, color, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#808080ab',
        marginBottom: 2,
      }}>
      <>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              backgroundColor: color + '50',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Micon name={icon} size={30} color={color} />
          </View>
          <Text size="large">{title}</Text>
        </View>
        <Micon name="chevron-right" size={35} color="#3f3f3f" />
      </>
    </TouchableOpacity>
  );
};

export default ProfileCard;
