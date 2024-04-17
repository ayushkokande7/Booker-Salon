import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
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
    width: '100%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Button;
