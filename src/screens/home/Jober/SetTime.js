import {Image, View} from 'react-native';
import {Layout} from '../../../components/UI';
import {Text} from '../../../components/inputs';
import Timer from '../../../components/UI/Timer';
import {TextC} from './Calculation';
import IconRound from '../../../components/UI/IconRound';
const SetTime = ({navigation}) => {
  return (
    <Layout
      style={{justifyContent: 'space-between', backgroundColor: '#2e7ef6d4'}}>
      <IconRound
        onPress={() => navigation.goBack()}
        icon="arrow-left"
        color="black"
        style={{
          position: 'absolute',
          left: 10,
          top: 10,
          zIndex: 1,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#bababa',
        }}
      />
      <View style={{marginHorizontal: 10}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            marginTop: 20,
          }}>
          <Image
            source={{uri: 'https://picsum.photos/536/354'}}
            style={{width: 120, height: 120, borderRadius: 100}}
          />
          <Text size="large" style={{fontWeight: 'bold', color: '#fff'}}>
            Ankit
          </Text>
        </View>
        <View style={{marginVertical: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 10,
            }}>
            <TextC label="Booking Time" color="#3DCEB8" />
            <TextC label="1:30 Pm" color="#fff" tcolor="gray" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 10,
            }}>
            <TextC label="Accept Time" color="#3DCEB8" />
            <TextC label="1:30 Pm" color="#fff" tcolor="gray" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 10,
            }}>
            <TextC label="Booking Code" color="#3DCEB8" />
            <TextC label="BK 001" color="#fff" tcolor="gray" />
          </View>
        </View>
      </View>
      <Timer />
    </Layout>
  );
};

export default SetTime;
