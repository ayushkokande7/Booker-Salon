import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, Switch} from '../inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/Theme';

const JoberCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('JoberDetails')}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 3,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <View>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: 60, height: 60, borderRadius: 50}}
          />
          <Micon
            name="check-decagram"
            size={25}
            color={colors.primary}
            style={{position: 'absolute', top: -5, right: -5}}
          />
        </View>

        <View>
          <Text size="large">Ankit Kumar</Text>
          <Text size="medium">Job ID: SP001</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
            }}>
            <Micon name="star" size={25} color={colors.yellow} />
            <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
              <Text size="medium" style={{fontWeight: 'bold'}}>
                4.5
              </Text>
              <Text size="medium">(36)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{gap: 15}}>
        <View style={{alignItems: 'flex-end', gap: 5}}>
          <Text size="medium" style={{fontWeight: 'bold', color: '#616161'}}>
            Booking Status
          </Text>
          <Switch value={true} />
        </View>
        <Button mode="outline" title="Book Now" style={{padding: 5}} />
      </View>
    </TouchableOpacity>
  );
};

export default JoberCard;
