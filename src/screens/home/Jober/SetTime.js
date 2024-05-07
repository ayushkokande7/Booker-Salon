import {Image, View} from 'react-native';
import {Layout} from '../../../components/UI';
import {Button, Text, TextInput} from '../../../components/inputs';
import Timer from '../../../components/UI/Timer';
import colors from '../../../utils/Theme';

const SetTime = () => {
  return (
    <Layout padding style={{justifyContent: 'space-between'}}>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <Image
            source={{uri: 'https://picsum.photos/536/354'}}
            style={{width: 120, height: 120, borderRadius: 100}}
          />
          <Text size="large" style={{fontWeight: 'bold'}}>
            Ankit
          </Text>
        </View>
        <TextInput label="Name" />
        <TextInput label="Booking Time" />

        <TextInput label="Accept Time" />
        <TextInput label="Booking Code" />

        <Timer />
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Button
          icon="timer-outline"
          title="Start"
          onPress={() => {}}
          style={{flex: 1}}
        />
        <Button
          icon="check-circle-outline"
          title="Complete"
          onPress={() => {}}
          style={{backgroundColor: colors.success, flex: 1}}
        />
      </View>
    </Layout>
  );
};

export default SetTime;
