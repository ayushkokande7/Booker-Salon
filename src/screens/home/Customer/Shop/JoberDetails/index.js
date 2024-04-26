import {Image, View} from 'react-native';
import {Layout} from '../../../../../components/UI';
import {Text} from '../../../../../components/inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../../utils/Theme';
import TopNavigation from '../../../../../navigations/TopNavigation';
import AllBookings from './AllBookings';
import Profile from './Profile';
const Index = () => {
  const tabs = [
    {
      name: 'All Bookings',
      component: AllBookings,
    },
    {
      name: 'Profile',
      component: Profile,
    },
  ];
  return (
    <Layout>
      <View style={{alignItems: 'center', gap: 5, marginBottom: 10}}>
        <Image
          source={{uri: 'https://picsum.photos/536/354'}}
          style={{width: 120, height: 120, borderRadius: 100}}
        />
        <View style={{alignItems: 'center'}}>
          <Text size="large">Ankit Kumar</Text>
          <Text size="medium">Job ID- SP001</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: '25%',
            backgroundColor: 'white',
            elevation: 3,
            padding: 10,
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
            }}>
            <Micon name="star" size={25} color={colors.yellow} />
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Text size="medium" style={{fontWeight: 'bold'}}>
                4.5
              </Text>
              <Text size="medium">(36)</Text>
            </View>
          </View>
        </View>
      </View>
      <TopNavigation tabs={tabs} />
    </Layout>
  );
};

export default Index;
