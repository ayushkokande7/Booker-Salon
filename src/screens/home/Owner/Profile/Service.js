import {View} from 'react-native';
import {Layout} from '../../../../components/UI';
import PricingCard from '../../../../components/UI/PricingCard';
import IconRound from '../../../../components/UI/IconRound';
import Text from '../../../../components/inputs/Text';
import colors from '../../../../utils/Theme';
const Service = ({navigation}) => {
  return (
    <Layout padding>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          alignItems: 'center',
          backgroundColor: '#50d2e6',
        }}>
        <Text size="medium">Image</Text>
        <Text size="medium">Service</Text>

        <Text size="medium">Price</Text>
      </View>
      <PricingCard
        onPress={() =>
          navigation.navigate('AddService', {
            data: {
              id: 1,
              image:
                'https://s3-alpha-sig.figma.com/img/b26c/071c/adb4b5bd9dd7e7045bb0db8816caa0f8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VeywfqGNrYcnJovriFgFxA6gfkIuJw9ebfmCr508ESg-63p9ztdEB4fyfuG1mDG-0oM2GxvL5M16hYdKEm9taXKM0s7sCA~MeSNfyUrj7~QGdrFFAA6Dh8lQyPnAnI3U2kQHk96q1lS7~oMS-~9IwEmOm3cTOrIbycxzJzrD6zBSx4GMlV8Y3B~iOHVBKuvLJ89DLocrapoSCs2ITmTWdu~e1sfPJDQOWvCvvsBTALpN8ZfBWFulSt7YzOGc2v6CsFQtn9qxkF7mSTzZA8GMsTXIYnZioe6UMtmK5hJPgH8hfETqREemGf1ufUPfZuwKfBQ0e7dD9mQRqMiL790WkA__',
              name: 'hair',
              price: '500',
            },
          })
        }
      />
      <IconRound
        icon="plus"
        size={38}
        onPress={() => navigation.navigate('AddService')}
        style={{
          position: 'absolute',
          right: 10,
          bottom: 10,
          backgroundColor: colors.primary,
        }}
      />
    </Layout>
  );
};

export default Service;
