import {View} from 'react-native';
import {Layout} from '../../../../components/UI';
import {Button, Text} from '../../../../components/inputs';

const Upload = () => {
  return (
    <Layout padding>
      <View style={{gap: 10, flexDirection: 'row', marginBottom: 20}}>
        <Button title="Upload Image" style={{flex: 1}} />
        <Button title="Upload Video" style={{flex: 1}} />
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text size="large" style={{fontWeight: 'bold'}}>
              Images
            </Text>
            <Text size="medium">View all </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text size="large" style={{fontWeight: 'bold'}}>
              Videos
            </Text>
            <Text size="medium">View all </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Upload;
