import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Text} from '../../components/inputs';
import {Layout} from '../../components/UI';
const OnBoarding = ({navigation}) => {
  return (
    <Layout
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text title="Booker Salon" style={{fontSize: 40, fontWeight: 'bold'}} />
      </View>
      <View style={{justifyContent: 'space-evenly', flex: 1.5}}>
        <View>
          <Text
            size="medium"
            title="User Type"
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              backgroundColor: '#0762E9',
              color: 'white',
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderRadius: 50,
              marginBottom: 30,
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Customer')}>
            <Text
              size="large"
              title="Customer"
              style={{color: 'white', fontWeight: 'bold'}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Owner')}>
          <Text
            size="large"
            title="Owner"
            style={{color: 'white', fontWeight: 'bold'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Jober')}>
          <Text
            size="large"
            title="Jober"
            style={{color: 'white', fontWeight: 'bold'}}
          />
        </TouchableOpacity>
      </View>
    </Layout>
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
