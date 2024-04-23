import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from '../inputs';

const Icon = ({data}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        width: 105,
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
    </View>
  );
};

export default Icon;
