import {TouchableOpacity} from 'react-native';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconRound = ({onPress, icon, size = 30, color = '#ffffff', style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderRadius: 50,
        ...style,
      }}>
      <Micon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconRound;
