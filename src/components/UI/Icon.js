import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from '../inputs';
import {useNavigation} from '@react-navigation/native';
const Icon = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Nearby')}
      style={{
        alignItems: 'center',
        width: 100,
      }}>
      <View
        style={{
          borderColor: data.color,
          borderWidth: 3,
          padding: 5,
          borderRadius: 50,
          width: 80,
          height: 80,
        }}>
        <Image
          source={data.img}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 50,
          }}
        />
      </View>
      <Text size="medium" style={{marginTop: 5, textAlign: 'center'}}>
        {data?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Icon;
