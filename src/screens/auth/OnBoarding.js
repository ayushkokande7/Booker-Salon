import {
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Text} from '../../components/inputs';
const OnBoarding = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/onBoarding.png')}
      resizeMode="cover"
      style={{
        alignItems: 'center',
        flex: 1,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
          Booker Salon
        </Text>
      </View>
      <View style={{justifyContent: 'space-evenly', flex: 2}}>
        <View>
          <Text
            size="medium"
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              backgroundColor: '#0762E9',
              color: 'white',
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderRadius: 50,
              marginBottom: 30,
            }}>
            User Type
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Customer')}>
            <Text size="large" style={{color: 'white', fontWeight: 'bold'}}>
              Customer
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Owner')}>
          <Text size="large" style={{color: 'white', fontWeight: 'bold'}}>
            Owner
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Jober')}>
          <Text size="large" style={{color: 'white', fontWeight: 'bold'}}>
            Jober
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0762E9',
    padding: 15,
    width: 200,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
  },
});
export default OnBoarding;
