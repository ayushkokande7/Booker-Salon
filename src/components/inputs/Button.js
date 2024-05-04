import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
const Button = ({title, onPress, style, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {icon && <Micon name={icon} size={30} color="white" />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2E7EF6',
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Button;
