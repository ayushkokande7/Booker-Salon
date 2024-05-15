import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/Theme';
const Button = ({mode = 'container', title, onPress, style, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[mode === 'outline' ? styles.outline : styles.button, style]}>
      {icon && <Micon name={icon} size={30} color="white" />}
      <View
        style={{
          shadowColor: '#000000',
          backgroundColor: 'transparent',
          elevation: 15,
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.text,
            {color: mode === 'outline' ? colors.primary : 'white'},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  outline: {
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
  },
});
export default Button;
