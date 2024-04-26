import {TouchableOpacity} from 'react-native';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconRound = ({onPress, icon, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderRadius: 50,
        ...style,
      }}>
      <Micon name={icon} size={30} color="#ffffff" />
    </TouchableOpacity>
  );
};

export default IconRound;
