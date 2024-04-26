import {View, Image} from 'react-native';
import React from 'react';
import {Text} from '../../../../components/inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../utils/Theme';
import TopNavigation from '../../../../navigations/TopNavigation';
import {Layout} from '../../../../components/UI';
import Jober from './Jober';
import Pricing from './Pricing';
import Reviews from './Reviews';
const Index = () => {
  const tabs = [
    {
      name: 'Jober',
      icon: 'home',
      component: Jober,
    },
    {
      name: 'Pricing',
      component: Pricing,
    },
    {
      name: 'Reviews',
      component: Reviews,
    },
  ];

  return (
    <Layout style={{height: '120%'}}>
      <Image
        source={{uri: 'https://picsum.photos/536/354'}}
        style={{width: '100%', height: 200}}
      />
      <View style={{margin: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Micon name="map-marker" size={23} color={colors.iconFocus} />
            <Text size="medium" noOfLine={1}>
              Rz 45/333, new delhi 45/333
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <Micon name="arrow-left-right" size={23} color={colors.primary} />
            <Text size="medium">5 Km</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text size="medium">Services</Text>
            <Text size="medium">View All</Text>
          </View>
          <View></View>
        </View>
      </View>
      <TopNavigation tabs={tabs} />
    </Layout>
  );
};

export default Index;
